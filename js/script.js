const form = document.getElementById('calc')

const inputName = document.getElementById('in-name')
const inputAge = document.getElementById('in-age')
const inputSexM = document.getElementById('masc')
const inputSexF = document.getElementById('fem')
const inputHeight = document.getElementById('in-height')
const inputWeight = document.getElementById('in-weight')

const outName = document.getElementById('out-name')
const outResult = document.getElementById('out-result')
const outImc = document.getElementById('out-imc')

form.addEventListener('submit', e => {
    e.preventDefault()
    const imc = inputWeight.value / ((inputHeight.value/100)**2)
    console.log(imc)
    outImc.innerHTML = imc
    outName.innerHTML = inputName.value
    let result = ''
    if(imc < 18.5) result = 'Abaixo do peso normal'; else
    if(imc < 24.9) result = 'Peso normal'; else
    if(imc < 29.9) result = 'Excesso de peso'; else
    if(imc < 34.9) result = 'Obesidade classe I'; else
    if(imc < 39.9) result = 'Obesidade classe II'; else result = 'Obesidade classe III';
    outResult.innerHTML = result;
});