import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import axios from 'axios';

import 'react-calendar/dist/Calendar.css';
import '../styles/Calendario.css';

function Calendario() {

    const [dataSelecionada, setDataSelecionada] =
        useState(new Date());

    const [tarefas, setTarefas] =
        useState([]);

    useEffect(() => {

        buscarTarefas();

    }, []);

    const buscarTarefas = async () => {

        try {

            const resposta =
                await axios.get(
                    'http://localhost:3000/tarefas'
                );

            setTarefas(resposta.data);

        } catch (erro) {

            console.error(erro);

        }

    };

    const tarefasDoDia =
        tarefas.filter((tarefa) => {

            const dataTarefa =
                new Date(tarefa.prazo)
                    .toISOString()
                    .split('T')[0];

            const dataAtual =
                dataSelecionada
                    .toISOString()
                    .split('T')[0];

            return dataTarefa === dataAtual;

        });

    return (

        <div className="calendario-container">

            <h2>
                📅 Calendário de Tarefas
            </h2>

            <Calendar
                onChange={setDataSelecionada}
                value={dataSelecionada}
            />

            <div className="tarefas-dia">

                <h3>
                    Tarefas do dia
                </h3>

                {
                    tarefasDoDia.length === 0 ? (

                        <p>
                            Nenhuma tarefa para esta data.
                        </p>

                    ) : (

                        tarefasDoDia.map(
                            (tarefa) => (

                                <div
                                    key={tarefa.id}
                                    className="evento"
                                >

                                    <strong>
                                        {tarefa.titulo}
                                    </strong>

                                    <p>
                                        {tarefa.categoria}
                                    </p>

                                    <p>
                                        {tarefa.prioridade}
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

        </div>

    );

}

export default Calendario;