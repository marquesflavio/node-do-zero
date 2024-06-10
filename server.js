//Servidor nativo

// import { createServer } from 'node:http'

// const server = createServer((request, response) => {
//     return response.write('Oi')
// });

// server.listen(3333)

//Servidor com Fastify

import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";

const server = fastify()
const database = new DatabaseMemory()

///criar vídeos
server.post('/videos', (request, reply) => {
    database.create({
        title: 'Video 01',
        description: 'Esse é o vídeo 01',
        duration: 180,
    })

    return reply.status(201).send()
})

server.get('/videos', () => {
    return "Hello Fastify!"
})

//atualizar vídeos
server.put('/videos/:id', () => {
    return "Hello Node!"
})

server.delete('/videos/:id', () => {
    return "Hello Node!"
})

server.listen({
    port: 3333
})

