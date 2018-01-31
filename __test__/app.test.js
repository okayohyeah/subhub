const request = require('supertest');
const app = require('../app');

// MOCKS
jest.mock('../models/assignment');

// TESTING ROUTES
// ** root ** ROUTE
describe('App', ()=> {
  it('Tests the root path', ()=> {
    return request(app).get('/').then(response => {
      expect(response.statusCode).toBe(200)
    })
  })
})

// ** assignments ** GET ** ROUTE
it('Lists assignments', ()=> {
  return request(app).get('/assignments').then(response => {
    expect(response.statusCode).toBe(200)
    expect(response.body.assignments[0].school).toBe('Orange Glen Elementary School')
  })
})

// ** assignments ** POST ** ROUTE
it('Creates assignments', ()=> {
  return request(app)
    .post('/assignments')
    .send({
      school: 'Juniper Elementary School',
      teacher: 'Sam Silas',
      grade: 4,
      date: '2018-03-14T00:00:00.000Z', 
      rating: 4,
      notes: 'Great administration. Lesson plans provided. Kids good for the most part.'
    })
    .then(response => {
      expect(response.statusCode).toBe(201)
      expect(response.body.assignment.school).toBe('Juniper Elementary School')
      expect(response.body.assignment.teacher).toBe('Sam Silas')
      expect(response.body.assignment.grade).toBe(4),
      expect(response.body.assignment.date).toBe('2018-03-14T00:00:00.000Z'),
      expect(response.body.assignment.rating).toBe(4),
      expect(response.body.assignment.notes).toBe('Great administration. Lesson plans provided. Kids good for the most part.')
    })
})

// ** assignments - SCHOOL ** VALIDATE POST
it('Validates school when creating assignment', () => {
  return request(app)
    .post('/assignments')
    .send({
      teacher: 'Sam Silas',
      grade: 4,
      date: '2018-03-14T00:00:00.000Z', 
      rating: 4,
      notes: 'Great administration. Lesson plans provided. Kids good for the most part.'
    })
    .then(response => {
      expect(response.statusCode).toBe(400)
      const error = response.body.errors.validations[0]
      expect(error.param).toBe('school')
      expect(error.msg).toBe('Is required')
    })
})

