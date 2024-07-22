const formulario = document.querySelector('.js-form')
const name = document.querySelector('#name')
const data_nascimento = document.querySelector('#birth-date')

formulario.addEventListener('submit', (e)=>{
    e.preventDefault()
    alert('Dados Salvos com Sucesso!!')
    console.log(name.value)
    console.log(data_nascimento.value)

    name.value = ''
    data_nascimento.value = ''
})