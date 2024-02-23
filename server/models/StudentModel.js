const {connection} = require('../\database/DatabaseConfig');

const modelStudent = {
    getAllStudent: (callback) => {
        connection.query(`SELECT * FROM student`, (err, results) => {
            if (err) {
                console.error(err);
                callback(err);
            } else {
                callback(null, results);
            }
        });
    },
    
    getStudentById: (regno, callback) => {
        connection.query(`SELECT * FROM student WHERE reg_no = ?`, [regno], (err, results) => {
            if (err) {
                console.error(err);
                callback(err);
            } else {
                callback(null, results);
            }
        });
    },
    
    getTopper: (callback) => {
        connection.query(`SELECT * FROM student ORDER BY marks DESC LIMIT 1`, (err, results) => {
            if (err) {
                console.error(err);
                callback(err);
            } else {
                callback(null, results);
            }
        });
    },
    
    getFailedList: (callback) => {
        connection.query(`SELECT * FROM student WHERE marks < 50`, (err, results) => {
            if (err) {
                console.error(err);
                callback(err);
            } else {
                callback(null, results);
            }
        });
    },
    

    addStudent: (reg_no, name, age, marks, mail, callback) => {
        connection.query(`INSERT INTO student (reg_no, name, age, marks, mail, created_at) VALUES (?, ?, ?, ?, ?, CURRENT_TIMESTAMP)`, [reg_no, name, age, marks, mail], (err, results) => {
            if (err) {
                console.error(err);
                callback(err);
            } else {
                callback(null, results);
            }
        });
    },
    
    updateStudentMarksById: (regno, marks, callback) => {
        connection.query(`UPDATE student SET marks = ? WHERE reg_no = ?`, [marks, regno], (err, results) => {
            if (err) {
                console.error(err);
                callback(err);
            } else {
                callback(null, results);
            }
        });
    },

    deleteStudentById: (regno, callback) => {
        connection.query(`DELETE FROM student WHERE reg_no = ?`, [regno], (err, results) => {
            if (err) {
                console.error(err);
                callback(err);
            } else {
                callback(null, results);
            }
        });
    }
};

module.exports = {modelStudent};
