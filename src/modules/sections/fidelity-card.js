const fidelity = document.querySelector('.fidelity');

export function mountFidelityPoints({
    id,
    cutsNeeded,
    totalCuts
}) {
    fidelity.querySelector('.tag').innerHTML = '';

    fidelity.querySelector('.tag').textContent = `ID: ${id}`;

    const boxList = fidelity.querySelector('div:last-child')
    boxList.innerHTML = ''

    for (let index = 0; index < cutsNeeded; index++) {
        const grayBox = document.createElement('div');
        grayBox.classList.add('gray-box');

        if (cutsNeeded - 1 === index && cutsNeeded > totalCuts) {
            const img = document.createElement('img');
            img.src = './src/assets/GrayGift.svg';
            img.alt = 'Ícone de presente cinza, parecendo desabilitado';
            grayBox.append(img)
        }

        boxList.append(grayBox)
    }

    for (let index = 0; index < totalCuts; index++) {
        const iconeVerificado = document.createElement('img');
        iconeVerificado.src = './src/assets/PinCheck.png';
        iconeVerificado.alt = 'Ícone de verificado verde com sombra';

        if (index === cutsNeeded - 1 && cutsNeeded >= totalCuts) {
            iconeVerificado.classList.add('achievement')
        }

        fidelity.querySelector(`.gray-box:nth-child(${index + 1})`).appendChild(iconeVerificado)
    }
}