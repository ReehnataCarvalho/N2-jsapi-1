let cep = document.getElementById('cep') // para pegar o input da pag

cep.addEventListener("focusout",() =>{
    console.log(cep.value)
    console.log('https://viacep.com.br/ws/' + cep.value + '/json')

    fetch('https://viacep.com.br/ws/' + cep.value + '/json')
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data)

            const estado = document.getElementById('estado');
            estado.value =  data.uf; // valor do html = valor da API 

            // Document.getElementById('estado'). value = data.uf   que é basicamente a mesma coisa que esta na linha de baixo 

            const cidade = document.getElementById('cidade');
            cidade.value =  data.localidade;

            const bairro = document.getElementById('bairro');
            bairro.value =  data.bairro;

            const endereco = document.getElementById('endereco');
            endereco.value =  data.logradouro;  

        })
        .catch(function(erro){
            console.log(erro);
        })
        
    })