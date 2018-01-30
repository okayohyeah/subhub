const request = require('supertest');
const app = require('../app');

jest.mock('../models/assignment')

describe('App', ()=> {
  it('Tests the root path', ()=> {
    return request(app).get('/').then(response => {
      expect(response.statusCode).toBe(200);
    })
  })
})

it('Lists assignments', ()=> {
  return request(app).get('/assignments').then(response => {
    expect(response.statusCode).toBe(200);
    expect(response.body.assignments[0].school).toBe('Farr Elementary School')
  })
})

it("Creates assignments", ()=>{
  return request(app)
    .post("/assignments")
    .send({
      school: 'Orange Glen Elementary School',
      teacher: 'Bob Smith',
      grade: 5,
      date: '2018-02-22T00:00:00.000Z',
      rating: 'Bad', 
      notes: 'Lesson plans provided asked to teach complex Language Arts lesson. Multiple duty. No support for difficult students to teacher next door. Kids overall disrespectful, did not want to work. Do NOT go back!'
    })
    .then(response => {
      expect(response.statusCode).toBe(201);
      expect(response.body.assignment.school).toBe('Orange Glen Elementary School');
      expect(response.body.assignment.teacher).toBe('Bob Smith');
      expect(response.body.assignment.grade).toBe(5);
      expect(response.body.assignment.date).toBe('2018-02-22T00:00:00.000Z');
      expect(response.body.assignment.rating).toBe('Bad');
      expect(response.body.assignment.notes).toBe('Lesson plans provided asked to teach complex Language Arts lesson. Multiple duty. No support for difficult students to teacher next door. Kids overall disrespectful, did not want to work. Do NOT go back!')
    })
})