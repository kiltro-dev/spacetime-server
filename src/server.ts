import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastify()
const Prisma = new PrismaClient()

app.get('/users', async () => {
  const users = await Prisma.user.findMany()
  return users
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('😎 HTTP server running on http://localhost:3333')
  })
