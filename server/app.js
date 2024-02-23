const express = require('express');
const bodyParser = require('body-parser');
const {controllerStudent} = require('./controllers/StudentController');

const app = express();
app.use(bodyParser.json());

const port = 3000;

app.get(`/`, controllerStudent.rootPage);
app.get('/students', controllerStudent.getAllStudent);
app.get('/students/:regno', controllerStudent.getStudentById);
app.get('/getTopper', controllerStudent.getTopper);
app.get('/getFailedList', controllerStudent.getFailedList);
app.post('/addStudent/:reg_no/:name/:age/:marks/:mail', controllerStudent.addStudent);
app.put('/updateMarks/:regno/:marks', controllerStudent.updateStudentMarksById);
app.delete('/deleteStudent/:regno', controllerStudent.deleteStudentById);

app.listen(port, () => {    
  console.log(`Server listening at http://localhost:${port}`);
});