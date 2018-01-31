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
      teacher: 'Mark Vizio',
      grade: 5,
      date: '2018-03-14T00:00:00.000Z',
      rating: 2,
      notes: 'Duty all day. No clear lesson plans. Some kids helpful but majority not.'
    })
    .then(response => {
      expect(response.statusCode).toBe(201)
      expect(response.body.assignment.school).toBe('Juniper Elementary School')
      expect(response.body.assignment.teacher).toBe('Mark Vizio')
      expect(response.body.assignment.grade).toBe(5)
      expect(response.body.assignment.date).toBe('2018-03-14T00:00:00.000Z')
      expect(response.body.assignment.rating).toBe(2)
      expect(response.body.assignment.notes).toBe('Duty all day. No clear lesson plans. Some kids helpful but majority not.')
    })
})

