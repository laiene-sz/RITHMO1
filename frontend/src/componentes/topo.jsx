import '../styles/Topo.css';
import logo from '../assets/logo.png';

function Topo({ abrirMenu }) {

    const hoje = new Date().toLocaleDateString(
        'pt-BR',
        {
            weekday: 'long',
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        }
    );

    const dataFormatada =
        hoje.charAt(0).toUpperCase() +
        hoje.slice(1);

    return (
        <header className="topo">

            <button
                className="btn-menu-topo"
                onClick={abrirMenu}
            >
                ☰
            </button>

            <div className="topo-data">
                {dataFormatada}
            </div>

            <div className="logo-area">

                <img
                    src={logo}
                    alt="RITHMO"
                    className="logo-rithmo"
                />

            </div>

        </header>
    );
}

export default Topo;