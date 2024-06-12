const history = document.querySelector('.history');

export function mountHistoryLog({
    appointmentHistory
}) {
    history.querySelector('span').textContent = '';

    const quantidadeCortes = appointmentHistory.length;

    history.querySelector('span').textContent = `${quantidadeCortes} cortes`;

    history.querySelector('ul').innerHTML = '';

    for (let index = 0; index < quantidadeCortes; index++) {
        const { date, time } = appointmentHistory[index];

        const li = document.createElement('li');
        li.classList.add('flex');
        li.classList.add('items-center');
        li.classList.add('space-between');

        const div = document.createElement('div');
        const p = document.createElement('p');

        p.classList.add('subtitle-sm')
        p.classList.add('text-base-gray-600')
        p.textContent = date;

        const small = document.createElement('small');
        small.classList.add('text-xs')
        small.classList.add('text-base-gray-500')
        small.textContent = time;

        /**
         * <div>
         *   <p class="subtitle-sm text-base-gray-600">29/04/2024</p>
         *   <small class="text-xs text-base-gray-500">18:30</small>
         * </div>
         */
        div.append(p, small);

        const verified = document.createElement('div');
        verified.classList.add('verified')

        const img = document.createElement('img');
        img.src = './src/assets/Verificado.svg';
        img.alt = 'Ícone de verificado'

        /**
         * <div class="verified">
         *   <img 
         *     src="./src/assets/Verificado.svg" 
         *     alt="Ícone de verificado"
         *   />
         * </div>
         */
        verified.append(img)

        li.append(div, verified)

        history.querySelector('ul').append(li)
    }
}