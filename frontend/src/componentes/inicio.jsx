import { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Inicio.css';

function Inicio() {

    const [dados, setDados] = useState({
        total: 0,
        pendentes: 0,
        concluidas: 0,
        alta: 0
    });

    useEffect(() => {
        carregarEstatisticas();
    }, []);

    const carregarEstatisticas = async () => {

        try {

            const resposta = await axios.get(
                'http://localhost:3000/estatisticas'
            );

            setDados(resposta.data);

        } catch (erro) {

            console.error(erro);

        }

    };

    return (

        <div className="dashboard">

            <h2>
                Bem-vindo ao RITHMO 🚀
            </h2>

            <p>
                Acompanhe o andamento das suas tarefas.
            </p>

            <div className="cards-dashboard">

                <div className="card-dashboard">
                    <h3>📋 Total</h3>
                    <span>{dados.total}</span>
                </div>

                <div className="card-dashboard">
                    <h3>⏳ Pendentes</h3>
                    <span>{dados.pendentes}</span>
                </div>

                <div className="card-dashboard">
                    <h3>✅ Concluídas</h3>
                    <span>{dados.concluidas}</span>
                </div>

                <div className="card-dashboard">
                    <h3>🔴 Prioridade Alta</h3>
                    <span>{dados.alta}</span>
                </div>

            </div>

        </div>

    );
}

export default Inicio;