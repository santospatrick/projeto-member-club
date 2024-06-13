const fidelity = document.querySelector('.fidelity');

export function mountFidelityPoints({
    id,
    totalCuts
}) {
    fidelity.querySelector('.tag').innerHTML = '';

    fidelity.querySelector('.tag').textContent = `ID: ${id}`;

    for (let index = 0; index < 9; index++) {
        fidelity.querySelector(`.gray-box:nth-child(${index + 1})`).innerHTML = '';
    }

    for (let index = 0; index < totalCuts; index++) {
        const iconeVerificado = document.createElement('img');
        iconeVerificado.src = './src/assets/PinCheck.png';
        iconeVerificado.alt = 'Ícone de verificado verde com sombra';

        fidelity.querySelector(`.gray-box:nth-child(${index + 1})`).appendChild(iconeVerificado)
    }
}