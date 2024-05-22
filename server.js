import { createServer } from 'node:http'

const server = createServer((request, response) => {
    return response.write('Oi')
});

server.listen(3333)