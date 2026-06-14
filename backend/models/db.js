import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'tarefa_web'
});

connection.connect((erro) => {
    if (erro) {
        console.log('Erro ao conectar');
        console.log(erro);
        return;
    }

    console.log('Banco conectado');
});

export default connection;