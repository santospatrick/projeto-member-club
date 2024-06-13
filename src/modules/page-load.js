const suggestion = document.querySelector('.suggestion');
const input = document.querySelector('.input')

suggestion.querySelector('button').addEventListener('click', (event) => {
    input.value = event.target.textContent
})