import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'rithmo',
    port: 3307
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