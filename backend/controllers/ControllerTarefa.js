import connection from '../models/db.js';


export const cadastrarTarefa = (req, res) => {

    const {
        titulo,
        categoria,
        prazo,
        prioridade
    } = req.body;

    const sql = `
        INSERT INTO tarefas
        (
            titulo,
            categoria,
            prazo,
            prioridade
        )
        VALUES (?, ?, ?, ?)
    `;

    connection.query(
        sql,
        [
            titulo,
            categoria,
            prazo,
            prioridade
        ],
        (erro, resultado) => {

            if (erro) {

                console.log(erro);

                return res.status(500).json({
                    mensagem: 'Erro ao cadastrar tarefa'
                });

            }

            res.status(201).json({
                mensagem: 'Tarefa cadastrada com sucesso',
                id: resultado.insertId
            });

        }
    );
};


export const listarTarefas = (req, res) => {

    const sql = `
        SELECT *
        FROM tarefas
        ORDER BY prazo ASC
    `;

    connection.query(
        sql,
        (erro, resultados) => {

            if (erro) {

                console.log(erro);

                return res.status(500).json({
                    mensagem: 'Erro ao buscar tarefas'
                });

            }

            res.status(200).json(resultados);

        }
    );
};


export const atualizarTarefa = (req, res) => {

    const { id } = req.params;

    const {
        titulo,
        categoria,
        prazo,
        prioridade
    } = req.body;

    const sql = `
        UPDATE tarefas
        SET
            titulo = ?,
            categoria = ?,
            prazo = ?,
            prioridade = ?
        WHERE id = ?
    `;

    connection.query(
        sql,
        [
            titulo,
            categoria,
            prazo,
            prioridade,
            id
        ],
        (erro) => {

            if (erro) {

                console.log(erro);

                return res.status(500).json({
                    mensagem: 'Erro ao atualizar tarefa'
                });

            }

            res.status(200).json({
                mensagem: 'Tarefa atualizada com sucesso'
            });

        }
    );
};


export const excluirTarefa = (req, res) => {

    const { id } = req.params;

    const sql = `
        DELETE FROM tarefas
        WHERE id = ?
    `;

    connection.query(
        sql,
        [id],
        (erro) => {

            if (erro) {

                console.log(erro);

                return res.status(500).json({
                    mensagem: 'Erro ao excluir tarefa'
                });

            }

            res.status(200).json({
                mensagem: 'Tarefa excluída com sucesso'
            });

        }
    );
};


export const concluirTarefa = (req, res) => {

    const { id } = req.params;

    const sql = `
        UPDATE tarefas
        SET concluida = TRUE
        WHERE id = ?
    `;

    connection.query(
        sql,
        [id],
        (erro) => {

            if (erro) {

                console.log(erro);

                return res.status(500).json({
                    mensagem: 'Erro ao concluir tarefa'
                });

            }

            res.status(200).json({
                mensagem: 'Tarefa concluída com sucesso'
            });

        }
    );
};


export const obterEstatisticas = (req, res) => {

    const sql = `
        SELECT
            COUNT(*) AS total,
            SUM(concluida = 0) AS pendentes,
            SUM(concluida = 1) AS concluidas,
            SUM(prioridade = 'Alta') AS alta
        FROM tarefas
    `;

    connection.query(
        sql,
        (erro, resultado) => {

            if (erro) {

                console.log(erro);

                return res.status(500).json({
                    mensagem: 'Erro ao buscar estatísticas'
                });

            }

            res.status(200).json(resultado[0]);

        }
    );
};