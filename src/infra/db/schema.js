import { pgTable, uuid, text, varchar, integer } from 'drizzle-orm/pg-core';

// Definimos a tabela "links", espelhando a estrutura do nosso SQL
export const links = pgTable('links', {
    id: uuid('id').primaryKey(),
    legenda: text('legenda').notNull(),
    url: text('url').notNull().unique(),
    codigo: varchar('codigo', { length: 10 }).notNull().unique(),
    visualizacoes: integer('visualizacoes').default(0),
});
