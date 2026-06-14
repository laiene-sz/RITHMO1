import { useState } from 'react';
import '../styles/NovaTarefa.css'; 
import axios from 'axios';

function FormularioTarefa() {

  const [titulo, setTitulo] = useState('');
  const [prazo, setPrazo] = useState('');
  const [prioridade, setPrioridade] = useState('');
  const [categoria, setCategoria] = useState('');

const adicionarTarefa = async () => {

  if (
    !titulo ||
    !prazo ||
    !prioridade ||
    !categoria
  ) {
    alert('Preencha todos os campos.');
    return;
  }

  try {

    const resposta = await axios.post(
    `${import.meta.env.VITE_API_URL}/tarefas`,
      {
        titulo,
        prazo,
        prioridade,
        categoria
      }
    );

    console.log(resposta.data);

    alert('Tarefa cadastrada com sucesso!');

    setTitulo('');
    setPrazo('');
    setPrioridade('');
    setCategoria('');

  } catch (erro) {

    console.error(erro);

    alert('Erro ao cadastrar tarefa.');

  }

};
  return (
    <div className="nova-tarefa-card">

      <h2>Nova tarefa</h2>

      <input
        type="text"
        placeholder="O que você precisa fazer?"
        className="campo-tarefa"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />

      <div className="acoes-tarefa">

        <input
          type="date"
          id="prazo"
          name="prazo"
          value={prazo}
          onChange={(e) => setPrazo(e.target.value)}
        />

        <select
          id="prioridade"
          name="prioridade"
          value={prioridade}
          onChange={(e) => setPrioridade(e.target.value)}
        >
          <option value="">Prioridade</option>
          <option value="Alta">Alta</option>
          <option value="Média">Média</option>
          <option value="Baixa">Baixa</option>
        </select>

        <select
          id="categoria"
          name="categoria"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          <option value="">Categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Estudo">Estudo</option>
          <option value="Rotina pessoal">Rotina pessoal</option>
        </select>

        <button onClick={adicionarTarefa}>
          Adicionar
        </button>

      </div>

    </div>
  );
}

export default FormularioTarefa;