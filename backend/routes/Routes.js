import express from 'express';
import {cadastrarTarefa, listarTarefas, atualizarTarefa, excluirTarefa, concluirTarefa, obterEstatisticas} from '../controllers/controllerTarefa.js';

const router = express.Router();

router.post('/cadastrarTarefa', cadastrarTarefa);
router.get('/tarefas', listarTarefas);
router.put('/tarefas/:id', atualizarTarefa);
router.delete('/tarefas/:id', excluirTarefa);
router.get('/estatisticas', obterEstatisticas);
router.put('/tarefas/concluir/:id', concluirTarefa);
router.get('/estatisticas', obterEstatisticas);

export default router;