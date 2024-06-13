const suggestion = document.querySelector('.suggestion');
const input = document.querySelector('.input')

suggestion.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', (event) => {
        input.value = event.target.textContent;
    });
});