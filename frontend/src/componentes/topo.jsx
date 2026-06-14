import '../styles/Topo.css';
import logo from '../assets/logo.png';

function Topo() {

    const hoje = new Date().toLocaleDateString(
        'pt-BR',
        {
            weekday: 'long',
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        }
    );

    return (
        <header className="topo">

            <div className="topo-conteudo">

                <div className="logo-area">

                    <img
                        src={logo}
                        alt="RITHMO"
                        className="logo-rithmo"
                    />

                </div>

                <div className="topo-data">
                    <span>{hoje}</span>
                </div>

            </div>

        </header>
    );
}

export default Topo;