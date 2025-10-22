import fastify from 'fastify';
import {fastifyCors} from '@fastify/cors';
import { config } from 'dotenv';
import { linkRoutes } from './modules/links/link.routes.js'; 

config();

const server = fastify({ logger: true });
const port = process.env.PORT || 3000;

await server.register(fastifyCors, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
});

await server.register(linkRoutes);

// rota raiz simples para evitar 404 em GET /
server.get('/', async (request, reply) => {
    return reply.send({ status: 'ok', message: 'API Encurtador rodando' });
});

// Iniciar servidor usando async/await para consistência
try {
    await server.listen({ port, host: '0.0.0.0' });
    console.log('Servidor executando na porta', port);
} catch (error) {
    server.log.error('Erro ao iniciar o servidor:', error);
    process.exit(1);
}
