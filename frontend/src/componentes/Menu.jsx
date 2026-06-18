import { useState, useEffect } from 'react';

import FormularioTarefa from './NovaTarefa.jsx';
import Calendario from './Calendario.jsx';
import Categoria from './Categoria.jsx';
import Inicio from './Inicio.jsx';
import ListaTarefas from './ListaTarefas.jsx';
import Topo from './topo.jsx';
import Rodape from './rodape.jsx';

import '../styles/menu.css';

function Menu() {

    const [secao, setSecao] = useState('Inicio');

    const [tema, setTema] = useState(
        localStorage.getItem('tema') || 'light'
    );

    const [menuAberto, setMenuAberto] = useState(false);

    useEffect(() => {

        document.documentElement.setAttribute(
            'data-theme',
            tema
        );

        localStorage.setItem(
            'tema',
            tema
        );

    }, [tema]);

    const alternarTema = () => {

        setTema(prev =>
            prev === 'light'
                ? 'dark'
                : 'light'
        );

    };

    const toggleMenu = () => {

        setMenuAberto(prev => !prev);

    };

    const trocarSecao = (novaSecao) => {

        setSecao(novaSecao);

        setMenuAberto(false);

    };

    return (
        <>
            <Topo
                abrirMenu={toggleMenu}
            />

            {menuAberto && (
                <div
                    className="overlay"
                    onClick={() =>
                        setMenuAberto(false)
                    }
                />
            )}

            <div className="layout">

                <aside
                    className={`sidebar ${
                        menuAberto
                            ? 'aberto'
                            : ''
                    }`}
                >

                    <button
                        onClick={alternarTema}
                    >
                        {tema === 'light'
                            ? '🌙 Modo Escuro'
                            : '☀️ Modo Claro'}
                    </button>

                    <button
                        className={
                            secao === 'Inicio'
                                ? 'ativo'
                                : ''
                        }
                        onClick={() =>
                            trocarSecao('Inicio')
                        }
                    >
                        🏠 Início
                    </button>

                    <button
                        className={
                            secao === 'lista'
                                ? 'ativo'
                                : ''
                        }
                        onClick={() =>
                            trocarSecao('lista')
                        }
                    >
                        📋 Tarefas
                    </button>

                    <button
                        className={
                            secao === 'NovaTarefa'
                                ? 'ativo'
                                : ''
                        }
                        onClick={() =>
                            trocarSecao('NovaTarefa')
                        }
                    >
                        ➕ Nova tarefa
                    </button>

                    <button
                        className={
                            secao === 'Calendario'
                                ? 'ativo'
                                : ''
                        }
                        onClick={() =>
                            trocarSecao('Calendario')
                        }
                    >
                        📅 Calendário
                    </button>

                    <button
                        className={
                            secao === 'Categoria'
                                ? 'ativo'
                                : ''
                        }
                        onClick={() =>
                            trocarSecao('Categoria')
                        }
                    >
                        📂 Categoria
                    </button>

                </aside>

                <main className="conteudo">

                    {secao === 'Inicio' &&
                        <Inicio />
                    }

                    {secao === 'lista' &&
                        <ListaTarefas />
                    }

                    {secao === 'NovaTarefa' &&
                        <FormularioTarefa />
                    }

                    {secao === 'Calendario' &&
                        <Calendario />
                    }

                    {secao === 'Categoria' &&
                        <Categoria />
                    }

                </main>

            </div>

            <Rodape />
        </>
    );
}

export default Menu;