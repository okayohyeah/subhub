var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var Assignment = require('./models').Assignment;

app.use(express.static('public'));
app.use(bodyParser.json());

// ROUTES
// **root ** ROUTE 
app.get('/', (req, res) => {
  res.json({message: 'API Example App'});
});

// **assignments ** GET ** ROUTE 
app.get('/assignments', (req, res) => {
  Assignment.findAll().then( (assignments) => {
    res.json({assignments: assignments});
  })
});

// **assignments ** POST ** ROUTE 
app.post('/assignments', (req, res) => {
  Assignment.create({
    school: req.body.assignment.school,
    teacher: req.body.assignment.teacher,
    grade: req.body.assignment.grade,
    date: req.body.assignment.date,
    rating: req.body.assignment.rating,
    notes: req.body.assignment.notes
  }).then((assignment)=> {
    res.status(201)
    res.json({assignment: assignment})
  })
})

module.exports = app