function Cartao(props) {
    return (
        <div className="cartao">
            <p>Título: {props.titulo}</p>
            <p>Prazo: {props.prazo}</p>
            <p>Prioridade: {props.prioridade}</p>
            <p>Categoria: {props.categoria}</p>
        </div>
    );
}

export default Cartao;