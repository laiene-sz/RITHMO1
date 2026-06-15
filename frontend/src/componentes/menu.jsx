import '../styles/menu.css';
import { useState } from 'react';

import FormularioTarefa from './NovaTarefa.jsx';
import Calendario from './Calendario.jsx';
import Categoria from './Categoria.jsx';
import Inicio from './Inicio.jsx';
import ListaTarefas from './ListaTarefas.jsx';
import Topo from './topo.jsx';
import Rodape from './rodape.jsx';

function Menu() {

    const [secao, setSecao] = useState('Inicio');

    return (
        <>
            <Topo />

            <div className="layout">

                <aside className="sidebar">

                    <button
                        className={secao === 'Inicio' ? 'ativo' : ''}
                        onClick={() => setSecao('Inicio')}
                    >
                        🏠 Início
                    </button>

                    <button
                        className={secao === 'lista' ? 'ativo' : ''}
                        onClick={() => setSecao('lista')}
                    >
                        📋 Tarefas
                    </button>

                    <button
                        className={secao === 'NovaTarefa' ? 'ativo' : ''}
                        onClick={() => setSecao('NovaTarefa')}
                    >
                        ➕ Nova tarefa
                    </button>

                    <button
                        className={secao === 'Calendario' ? 'ativo' : ''}
                        onClick={() => setSecao('Calendario')}
                    >
                        📅 Calendário
                    </button>

                    <button
                        className={secao === 'Categoria' ? 'ativo' : ''}
                        onClick={() => setSecao('Categoria')}
                    >
                        📂 Categoria
                    </button>

                </aside>

                <main className="conteudo">

                    {secao === 'Inicio' && <Inicio />}

                    {secao === 'lista' && <ListaTarefas />}

                    {secao === 'NovaTarefa' && (
                        <FormularioTarefa />
                    )}

                    {secao === 'Calendario' && (
                        <Calendario />
                    )}

                    {secao === 'Categoria' && (
                        <Categoria />
                    )}

                </main>

            </div>

            <Rodape />
        </>
    );
}

export default Menu;