import { useEffect, useState } from 'react';
import axios from 'axios';

import '../styles/Categoria.css';

function Categoria() {

    const [tarefas, setTarefas] = useState([]);

    const [categoriaSelecionada,
        setCategoriaSelecionada] =
        useState('');

    useEffect(() => {

        buscarTarefas();

    }, []);

    const buscarTarefas = async () => {

        try {

            const resposta =
                await axios.get(
    `${import.meta.env.VITE_API_URL}/tarefas`
                );

            setTarefas(resposta.data);

        } catch (erro) {

            console.error(erro);

        }

    };

    const tarefasFiltradas =
        categoriaSelecionada === ''
            ? []
            : tarefas.filter(
                  (tarefa) =>
                      tarefa.categoria ===
                      categoriaSelecionada
              );

    return (

        <div className="categoria-container">

            <h2>
                📂 Categorias
            </h2>

            <div className="categorias">

                <button
                    onClick={() =>
                        setCategoriaSelecionada(
                            'Trabalho'
                        )
                    }
                >
                    Trabalho
                </button>

                <button
                    onClick={() =>
                        setCategoriaSelecionada(
                            'Estudo'
                        )
                    }
                >
                    Estudo
                </button>

                <button
                    onClick={() =>
                        setCategoriaSelecionada(
                            'Rotina pessoal'
                        )
                    }
                >
                    Rotina pessoal
                </button>

            </div>

            {categoriaSelecionada && (

                <div className="resultado">

                    <h3>
                        Categoria:
                        {' '}
                        {categoriaSelecionada}
                    </h3>

                    {
                        tarefasFiltradas.length === 0 ? (

                            <p>
                                Nenhuma tarefa
                                encontrada.
                            </p>

                        ) : (

                            tarefasFiltradas.map(
                                (tarefa) => (

                                    <div
                                        key={tarefa.id}
                                        className="card-tarefa"
                                    >

                                        <h4>
                                            {
                                                tarefa.titulo
                                            }
                                        </h4>

                                        <p>
                                            Prioridade:
                                            {' '}
                                            {
                                                tarefa.prioridade
                                            }
                                        </p>

                                        <p>
                                            Prazo:
                                            {' '}
                                            {
                                                new Date(
                                                    tarefa.prazo
                                                )
                                                    .toLocaleDateString(
                                                        'pt-BR'
                                                    )
                                            }
                                        </p>

                                        <p>
                                            {
                                                tarefa.concluida
                                                    ? '✅ Concluída'
                                                    : '⏳ Pendente'
                                            }
                                        </p>

                                    </div>

                                )
                            )

                        )
                    }

                </div>

            )}

        </div>

    );

}

export default Categoria;