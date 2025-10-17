import fastify from 'fastify';
import cors from '@fastify/cors';
import { config } from 'dotenv';
import { linkRoutes } from './modules/links/link.routes.js'; 

config();

const server = fastify({ logger: true });
const port = process.env.PORT || 3000;

await server.register(cors, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
});

await server.register(linkRoutes);

server.listen({ port, host: '0.0.0.0' }, (error) => {
    if (error) {
        console.error("Erro ao iniciar o servidor:", error);
        process.exit(1);
    }
    console.log("Servidor executando na porta ", port);
});
