const mysql = require('mysql2');
require('dotenv').config();

const connectToDatabase = () => {
    const connection = mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
    });

    connection.connect((error) => {
        if (error) {
        console.error('Failed to connect to the database:', error);
        return;
        }
        console.log('Connected to the database!');
    });

    return connection;
};

module.exports = connectToDatabase();
