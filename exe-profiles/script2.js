const app = document.getElementById('root');
const authors = document.createElement('div');
authors.setAttribute('class', "authors");

app.appendChild(authors);

fetch('https://randomuser.me/api/?results=10')
.then(function(response){

    return response.json();

})
.then(function(data){

    console.log('Sucesso!!!')
    console.log(data)

    data.results.forEach(colaborador => {
        const card = document.createElement('div', 'div' );
        card.setAttribute('class', 'card');

        const nome = document.createElement('h2');
        nome.textContent =  colaborador.name.first + " " + colaborador.name.last;

        let foto = document.createElement('img');
        foto.setAttribute('src', colaborador.picture.large)


        const endereco = document.createElement('h3');
        endereco.textContent = "Endereço: " + colaborador.location.street + " " + colaborador.location.city;

        const telefone = document.createElement('p');
        telefone.innerHTML = " Telefone: " + colaborador.phone;

        const email = document.createElement('p');
        email.innerHTML = " Email: " + colaborador.email;

        authors.appendChild(card);
        card.appendChild(nome);
        card.appendChild(foto);
        card.appendChild(endereco);
        card.appendChild(telefone);
        card.appendChild(email);


})
.catch(function(erro){

    console.log(erro);

})


})