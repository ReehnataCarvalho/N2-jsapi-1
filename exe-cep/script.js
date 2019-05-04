let cep = document.getElementById('cep')

fetch('https://viacep.com.br/ws/' + cep + '/json/')


.then(function(response){

    return response.json();

})
.then(function(data){

    console.log("sucesso")
    console.log(data)


    data.forEach(enderecos => {


    const estado = document.getElementById('estado');
    estado.innerHTML = " estado: " + enderecos.estado;

    const cidade = document.getElementById('cidade');
    cidade.innerHTML = " estado: " + enderecos.cidade;

    const bairro = document.getElementById('bairro');
    bairro.innerHTML = " estado: " + enderecos.bairro;

    const endereco = document.getElementById('endereco');
    endereco.innerHTML = " estado: " + enderecos.estado;  

})
.catch(function(erro){

    console.log(erro);

})

})