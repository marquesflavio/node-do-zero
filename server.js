//Servidor nativo

// import { createServer } from 'node:http'

// const server = createServer((request, response) => {
//     return response.write('Oi')
// });

// server.listen(3333)

//Servidor com Fastify

import { fastify } from "fastify";

const server = fastify()

server.get('/', () => {
    return "Hello World!"
})

server.get('/fastify', () => {
    return "Hello Fastify!"
})

server.get('/node', () => {
    return "Hello Node!"
})

server.listen({
    port: 3333
})

