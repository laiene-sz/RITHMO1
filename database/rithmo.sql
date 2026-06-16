CREATE DATABASE rithmo;

USE rithmo;


CREATE TABLE tarefas (

    id INT AUTO_INCREMENT PRIMARY KEY,

    titulo VARCHAR(255) NOT NULL,

    categoria VARCHAR(100) NOT NULL,

    prioridade ENUM(
        'Alta',
        'Média',
        'Baixa'
    ) NOT NULL,

    prazo DATE NOT NULL,

    concluida BOOLEAN DEFAULT FALSE,

    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);


INSERT INTO tarefas
(
    titulo,
    categoria,
    prioridade,
    prazo,
    concluida
)
VALUES

(
    'Finalizar projeto RITHMO',
    'Trabalho',
    'Alta',
    '2026-06-30',
    FALSE
),

(
    'Estudar React',
    'Estudo',
    'Média',
    '2026-06-25',
    FALSE
),

(
    'Academia',
    'Rotina pessoal',
    'Baixa',
    '2026-06-20',
    TRUE
);


-- Ver todas as tarefas
SELECT * FROM tarefas;

-- Apenas pendentes
SELECT * FROM tarefas
WHERE concluida = FALSE;

-- Apenas concluídas
SELECT * FROM tarefas
WHERE concluida = TRUE;

-- Estatísticas do dashboard
SELECT
    COUNT(*) AS total,
    SUM(concluida = 0) AS pendentes,
    SUM(concluida = 1) AS concluidas,
    SUM(prioridade = 'Alta') AS alta
FROM tarefas;