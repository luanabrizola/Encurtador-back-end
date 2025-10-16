import fastify from 'fastify';
import cors from '@fastify/cors';
import { config } from 'dotenv';
import { linkRoutes } from './modules/links/link.routes.js'; 

config();

const server = fastify({ logger: true });
const port = process.env.PORT;

await server.register(cors, {
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
});

await server.register(linkRoutes);

server.listen({ port }, (error) => {
    if (error) {
        console.error("Erro ao iniciar o servidor:", error);
        process.exit(1);
    }
    console.log("Servidor executando na porta ", port);
});
