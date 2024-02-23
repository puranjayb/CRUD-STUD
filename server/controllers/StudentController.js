const {modelStudent} = require('../models/StudentModel')

const controllerStudent = {
    rootPage: (req, res) => {
        res.status(200).send('Root Page Not Defined');
    },
    
    getAllStudent: (req, res) => {
        modelStudent.getAllStudent((err, results) => {
            if (err) {
                console.error(err);
                res.status(500).send('Internal Server Error');
            }
            else {
                res.status(200).send(results);
            }
        });
    },

    getStudentById: (req, res) => {
        let regno = req.params.regno;
        modelStudent.getStudentById(regno, (err, results) => {
            if (err) {
                console.error(err);
                res.status(500).send('Internal Server Error');
            }
            else {
                res.status(200).send(results);
            }
        });
    },

    getTopper: (req, res) => {
        modelStudent.getTopper((err, results) => {
            if (err) {
                console.error(err);
                res.status(500).send('Internal Server Error');
            } else {
                const topper = results.length > 0 ? results[0] : null;
                res.status(200).send(topper);
            }
        });
    },
    

    getFailedList: (req, res) => {
        modelStudent.getFailedList((err, results) => {
            if (err) {
                console.error(err);
                res.status(500).send('Internal Server Error');
            }
            else {
                res.status(200).send(results);
            }
        });
    },

    addStudent: (req, res) => {
        let {reg_no, name, age, marks, mail} = req.params;
        modelStudent.addStudent(reg_no, name, age, marks, mail, (err, results) => {
            if (err) {
                console.error(err);
                res.status(500).send('Internal Server Error');
            }
            else {
                res.status(200).send(results);
            }
        });
    },

    updateStudentMarksById: (req, res) => {
        let regno = req.params.regno;
        let marks = req.params.marks;
        modelStudent.updateStudentMarksById(regno, marks, (err, results) => {
            if (err) {
                console.error(err);
                res.status(500).send('Internal Server Error');
            }
            else {
                res.status(200).send(results);
            }
        });
    },

    deleteStudentById: (req, res) => {
        let regno = req.params.regno;
        modelStudent.deleteStudentById(regno, (err, results) => {
            if (err) {
                console.error(err);
                res.status(500).send('Internal Server Error');
            }
            else {
                res.status(200).send(results);
            }
        });
    }
}

module.exports = {controllerStudent};