export class LinkService {

    constructor(linkRepository) {
        this.linkRepository = linkRepository;
    }

    getAllLinks() {
        return this.linkRepository.findAll();
    }

    getLinkById(id) {
        return this.linkRepository.findById(id);
    }

    getLinkByCodigo(codigo) {
        return this.linkRepository.findByCodigo(codigo);
    }

    createLink(linkData) {
        const { url } = linkData
        
        function isValidUrl(url) {
            try {
                new URL(url);
                return true;
            } catch {
                return false;
            }
        }

        if (!isValidUrl(url)) {
            const error = new Error('URL_INVALIDA');
            throw error;
        }

        // No futuro, regras de negócio como "verificar email duplicado"
        // viveriam aqui, ANTES de chamar o repositório.
        return this.linkRepository.create(linkData);
    }

    updateLink(id, linkData) {
        return this.linkRepository.update(id, linkData);
    }

    deleteLink(id) {
        return this.linkRepository.remove(id);
    }
}
