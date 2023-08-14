const form = document.getElementById('calc');

const inputName = document.getElementById('in-name')
const inputAge = document.getElementById('in-age')
const inputSexM = document.getElementById('masc')
const inputSexF = document.getElementById('fem')
const inputHeight = document.getElementById('in-height')
const inputWeight = document.getElementById('in-weight')

form.addEventListener('onsubmit', e => {
    e.preventDefault();
    form.reset();
});