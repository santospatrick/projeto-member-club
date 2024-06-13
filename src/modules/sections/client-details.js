const profile = document.querySelector('.profile');

export function mountClientDetails({
    name,
    clientSince,
    image: userImageURL
}) {
    // limpar conteudo antes de inserir novo html
    profile.innerHTML = ''

    /**
     * Conteúdo da imagem
     * <div class="image">
     *   <img src="" alt="Imagem de Perfil">
     * </div>
     */
    const image = document.createElement('div');
    image.classList.add('image');
    
    const img = document.createElement('img');
    img.src = userImageURL;

    image.append(img)

    /**
     * Estrutura de detalhes do cliente
     * <div class="flex flex-column">
     *   <h2 class="title-sm text-base-gray-600">Usuário</h2>
     *   <p class="text-xs text-base-gray-500">Cliente desde 18/09/2023</p>
     * </div>
     */
    const details = document.createElement('div');
    details.classList.add('flex');
    details.classList.add('flex-column');

    const title = document.createElement('h2');
    title.classList.add('title-sm');
    title.classList.add('text-base-gray-600');
    title.textContent = name;

    const paragraph = document.createElement('p');
    paragraph.classList.add('text-xs');
    paragraph.classList.add('text-base-gray-500');
    paragraph.textContent = `Cliente desde ${clientSince}`;

    details.append(title, paragraph)

    profile.append(image, details);
}