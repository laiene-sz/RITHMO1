class Tarefa {

    constructor(id, titulo, tarefa, prazo) {
        this.id = id;
        this.titulo = titulo;
        this.tarefa = tarefa;
        this.prazo = prazo;
    }

    mostrarDetalhes() {
        console.log(
            `Titulo: ${this.titulo}, Tarefa: ${this.tarefa}, Prazo: ${this.prazo}`
        );
    }

}

export default Tarefa;