const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'your_username',
    password: 'your_password',
    database: 'existing_db_name'
});

connection.connect((err) => { 
    if (err) {
        console.log(`Database Error: ${err}`);
        return;
    }
    else{
        console.log(`Database connection Successfull`);
    }
});

module.exports = {connection};
