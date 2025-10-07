import { randomUUID } from 'node:crypto';
import db from '../../infra/database.js';
import { eq } from 'drizzle-orm';
import { links } from '../../infra/db/schema.js';

// Classe responsável por acessar e manipular os dados da tabela de links
export class LinkRepository {
    constructor() {
        // Guarda a instância do banco de dados para uso nos métodos
        this.db = db;
    }

    // Retorna todos os links cadastrados no banco
    async findAll() {
        return this.db.select().from(links);
    }

    // Busca um link pelo seu ID único
    async findById(id) {
        const result = await this.db.select().from(links).where(eq(links.id, id));
        // Retorna o primeiro resultado ou null se não encontrar
        return result[0] || null;
    }

    // Cria um novo link no banco de dados
    // Gera um ID único e insere os dados recebidos
    async create(linkData) {
        const id = randomUUID()
        const result = await this.db.insert(links).values({
            id, // ID gerado automaticamente
            ...linkData, // Demais campos vindos do parâmetro
        }).returning(); // Retorna o registro inserido
        return result[0];
    }

    // Atualiza os dados de um link existente pelo ID
    async update(id, linkData) {
        const result = await this.db.update(links)
            .set(linkData) // Define os novos valores
            .where(eq(links.id, id)) // Filtra pelo ID
            .returning(); // Retorna o registro atualizado
        return result[0] || null;
    }

    // Remove um link do banco pelo ID
    // Retorna true se algum registro foi deletado, false caso contrário
    async remove(id) {
        const result = await this.db.delete(links)
            .where(eq(links.id, id))
            .returning({ id: links.id }); // Pede o ID do item deletado de volta

        return result.length > 0;
    }
}
