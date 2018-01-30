'use strict'
var SequelizeMock = require('sequelize-mock');
var dbMock = new SequelizeMock();

module.exports = function(sequelize, DataTypes) {
  return dbMock.define('Assignment', {
    school: 'Farr Elementary School',
    teacher: 'Sarah Rodriguez',
    grade: 3,
    date: '2018-03-14T00:00:00.000Z',
    rating: 'Good', 
    notes: 'Lesson plans easy to follow. No duty. Instructions: send difficult students to teacher next door. Kids overall good. No complaints. Would do again.'
  })
}