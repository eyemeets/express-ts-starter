import request from 'supertest'
import { describe, it, expect } from 'vitest'
import app from '../src/app' // Use .ts extension explicitly

describe('GET /', () => {
  it('should return hello world', async () => {
    const res = await request(app).get('/')
    expect(res.status).toBe(200)
    expect(res.body).toEqual({ hello: 'world' }) // Update to match the actual response
  })
})

