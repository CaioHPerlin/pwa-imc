window.onload = () => {
    'use strict';
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js');
    }
}

const form = document.getElementById('calc')
const output = document.getElementsByClassName('output')[0]

form.addEventListener('submit', e => {
    e.preventDefault()

    const imc = (form.weight.value / ((form.height.value/100)**2)).toFixed(2)

    document.getElementById('out-imc').innerHTML = imc;
    document.getElementById('out-name').innerHTML = form.name.value;

    let result = ''
    if(imc < 18.5) result = 'Abaixo do peso normal'; else
    if(imc < 24.9) result = 'Peso normal'; else
    if(imc < 29.9) result = 'Excesso de peso'; else
    if(imc < 34.9) result = 'Obesidade classe I'; else
    if(imc < 39.9) result = 'Obesidade classe II'; else result = 'Obesidade classe III';
    document.getElementById('out-result').innerHTML = result;

    output.style.display = 'block'
});