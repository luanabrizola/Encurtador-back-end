import { LinkService } from './link.service.js';

export class LinkController {

    constructor(linkService) {
        this.linkService = linkService;
    }

    async getLinks(request, reply) {
        const links = await this.linkService.getAllLinks();
        return reply.send(links);
    }

    async getLinkByCodigo(request, reply) {
        const { codigo } = request.params;
        const link = await this.linkService.getLinkByCodigo(codigo);

        if (!link) {
            return reply.code(404).send({ message: 'Link não encontrado' });
        }
        return reply.send(link);
    }

    async getLinkById(request, reply) {
        const { id } = request.params;
        const link = await this.linkService.getLinkById(id);

        if (!link) {
            return reply.code(404).send({ message: 'Link não encontrado' });
        }
        return reply.send(link);
    }

    async createLink(request, reply) {
        const novoLink = await this.linkService.createLink(request.body);

        if (!novoLink) {
            return reply.code(400).send({ message: 'Não foi possível criar o link' });
        }
        return reply.code(201).send(novoLink);
    }

    async updateLink(request, reply) {
        const { id } = request.params;
        const linkAtualizado = await this.linkService.updateLink(id, request.body);

        if (!linkAtualizado) {
            return reply.code(404).send({ message: 'Link não encontrado' });
        }
        return reply.send(linkAtualizado);
    }

    async deleteLink(request, reply) {
        const { id } = request.params;
        const sucesso = await this.linkService.deleteLink(id);

        if (!sucesso) {
            return reply.code(404).send({ message: 'Link não encontrado' });
        }
        return reply.code(204).send();
    }
}
