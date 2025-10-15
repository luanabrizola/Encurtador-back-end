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

    async createLink(linkData) {
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


        // Função para gerar código alfanumérico curto e unico
        function gerarCodigo(tamanho = 6) {
            const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let codigo = '';
            for (let i = 0; i < tamanho; i++) {
                codigo += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
            }
            return codigo;
        }

        let codigo;
        let existente;

        do {
            codigo = gerarCodigo(6);
            existente = await this.linkRepository.findByCodigo(codigo);
        } while (existente);
        linkData.codigo = codigo;

        return this.linkRepository.create(linkData);
    }

    updateLink(id, linkData) {
        return this.linkRepository.update(id, linkData);
    }

    deleteLink(id) {
        return this.linkRepository.remove(id);
    }
}