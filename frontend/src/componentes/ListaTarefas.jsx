import { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/ListaTarefas.css';

function ListaTarefas() {

    const [tarefas, setTarefas] = useState([]);

    const [editando, setEditando] = useState(null);

    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [prioridade, setPrioridade] = useState('');
    const [prazo, setPrazo] = useState('');

    useEffect(() => {
        buscarTarefas();
    }, []);

    const buscarTarefas = async () => {

        try {

            const resposta = await axios.get(
                'http://localhost:3000/tarefas'
            );

            setTarefas(resposta.data);

        } catch (erro) {

            console.error(erro);

        }

    };

    const editarTarefa = (tarefa) => {

        setEditando(tarefa.id);

        setTitulo(tarefa.titulo);
        setCategoria(tarefa.categoria);
        setPrioridade(tarefa.prioridade);

        setPrazo(
            tarefa.prazo.substring(0, 10)
        );

    };

    const salvarEdicao = async () => {

        try {

            await axios.put(
                `http://localhost:3000/tarefas/${editando}`,
                {
                    titulo,
                    categoria,
                    prioridade,
                    prazo
                }
            );

            alert('Tarefa atualizada com sucesso!');

            setEditando(null);

            buscarTarefas();

        } catch (erro) {

            console.error(erro);

            alert('Erro ao atualizar tarefa.');

        }

    };

    const excluirTarefa = async (id) => {

        const confirmar = window.confirm(
            'Deseja realmente excluir esta tarefa?'
        );

        if (!confirmar) return;

        try {

            await axios.delete(
                `http://localhost:3000/tarefas/${id}`
            );

            buscarTarefas();

        } catch (erro) {

            console.error(erro);

            alert('Erro ao excluir tarefa.');

        }

    };

    const concluirTarefa = async (id) => {

        try {

            await axios.put(
                `http://localhost:3000/tarefas/concluir/${id}`
            );

            buscarTarefas();

        } catch (erro) {

            console.error(erro);

            alert('Erro ao concluir tarefa.');

        }

    };

    return (

        <div className="lista-container">

            <h2 className="lista-titulo">
                📋 Minhas Tarefas
            </h2>

            {editando && (

                <div className="tarefa-card">

                    <div className="tarefa-info">

                        <h3>Editar tarefa</h3>

                        <input
                            type="text"
                            value={titulo}
                            onChange={(e) =>
                                setTitulo(e.target.value)
                            }
                        />

                        <input
                            type="date"
                            value={prazo}
                            onChange={(e) =>
                                setPrazo(e.target.value)
                            }
                        />

                        <select
                            value={prioridade}
                            onChange={(e) =>
                                setPrioridade(e.target.value)
                            }
                        >
                            <option value="Alta">Alta</option>
                            <option value="Média">Média</option>
                            <option value="Baixa">Baixa</option>
                        </select>

                        <select
                            value={categoria}
                            onChange={(e) =>
                                setCategoria(e.target.value)
                            }
                        >
                            <option value="Trabalho">Trabalho</option>
                            <option value="Estudo">Estudo</option>
                            <option value="Rotina pessoal">
                                Rotina pessoal
                            </option>
                        </select>

                        <button
                            className="btn-editar"
                            onClick={salvarEdicao}
                        >
                            💾 Salvar
                        </button>

                    </div>

                </div>

            )}

            {tarefas.length === 0 ? (

                <p>Nenhuma tarefa cadastrada.</p>

            ) : (

                tarefas.map((tarefa) => (

                    <div
                        key={tarefa.id}
                        className={
                            tarefa.concluida
                                ? 'tarefa-card tarefa-concluida'
                                : 'tarefa-card'
                        }
                    >

                        <div className="tarefa-info">

                            <h3>{tarefa.titulo}</h3>

                            <p>
                                Categoria: {tarefa.categoria}
                            </p>

                            <p>
                                Prazo:{' '}
                                {new Date(
                                    tarefa.prazo
                                ).toLocaleDateString(
                                    'pt-BR'
                                )}
                            </p>

                            <span
                                className={`prioridade ${
                                    tarefa.prioridade === 'Alta'
                                        ? 'alta'
                                        : tarefa.prioridade === 'Média'
                                        ? 'media'
                                        : 'baixa'
                                }`}
                            >
                                {tarefa.prioridade}
                            </span>

                            <br />
                            <br />

                            {tarefa.concluida ? (

                                <span className="status-concluida">
                                    ✅ Concluída
                                </span>

                            ) : (

                                <span className="status-pendente">
                                    ⏳ Pendente
                                </span>

                            )}

                        </div>

                        <div className="tarefa-acoes">

                            {!tarefa.concluida && (

                                <button
                                    className="btn-concluir"
                                    onClick={() =>
                                        concluirTarefa(
                                            tarefa.id
                                        )
                                    }
                                >
                                    ✅ Concluir
                                </button>

                            )}

                            <button
                                className="btn-editar"
                                onClick={() =>
                                    editarTarefa(
                                        tarefa
                                    )
                                }
                            >
                                ✏️ Editar
                            </button>

                            <button
                                className="btn-excluir"
                                onClick={() =>
                                    excluirTarefa(
                                        tarefa.id
                                    )
                                }
                            >
                                🗑 Excluir
                            </button>

                        </div>

                    </div>

                ))

            )}

        </div>

    );

}

export default ListaTarefas;