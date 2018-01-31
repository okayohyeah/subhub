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
    school: req.body.school,
    teacher: req.body.teacher,
    grade: req.body.grade,
    date: req.body.date,
    rating: req.body.rating,
    notes: req.body.notes
  }).then((assignment) => {
    res.status(201)
    res.json({assignment: assignment})
  })
})

module.exports = app