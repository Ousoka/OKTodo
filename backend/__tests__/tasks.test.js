import request from 'supertest';
import mongoose from 'mongoose';
import app from '../server.js';
import { Task } from '../models/Task.js';

beforeAll(async () => {
  await mongoose.connect(process.env.MONGODB_URI);
});

afterEach(async () => {
  await Task.deleteMany();
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Tasks API', () => {
  it('should create a new task', async () => {
    const res = await request(app)
      .post('/api/tasks')
      .send({
        title: 'Test task'
      });
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('Test task');
  });

  it('should get all tasks', async () => {
    await Task.create({ title: 'Test task 1' });
    await Task.create({ title: 'Test task 2' });

    const res = await request(app).get('/api/tasks');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(2);
  });
});