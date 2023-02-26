$(document).ready(function(){

    $('#tel').mask('(00) 00000-0000', {
        placeholder: '(__) _____-____'
    })
    $('#cpf').mask('000.000.000-00', {
        placeholder: '___.___.___-__'
    })
    $('#cep').mask('00.000-000', {
        placeholder: '__.___-___'
    })
})