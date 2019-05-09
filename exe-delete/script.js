const site = document.getElementById('root');
const authors = document.querySelector('.authors');
authors.setAttribute('class', "authors");


site.appendChild(authors);

fetch('https://reqres.in/api/users')

.then((response)=>{
    return response.json();
})

.then((data)=>{

    console.log(data)
    for(let i=0; i<data.data.length ; i++){

        let documento  = data.data[i];

        const card = document.createElement('div');
        card.setAttribute('class','card');
        card.setAttribute('id', document.id)
        authors.appendChild(card);

        const nome = document.createElement('h2');
        nome.textContent = documento.first_name +" "+ documento.last_name;
        card.appendChild(nome);

        const email = document.createElement('p');
        email.textContent = documento.email;
        card.appendChild(email);

        const foto = document.createElement('img');
        foto.setAttribute('src', documento.avatar);
        card.appendChild(foto)

        const botao = document.createElement('button');
        botao.setAttribute('data-id',document.id);
        botao.textContent = ("✖");
        card.appendChild(botao);

        botao.addEventListener('click', () => {

            const cardFilho = botao.parentElement;
            const cardPai = cardFilho.parentElement;

         fetch('https://reqres.in/api/users' + documento.id,{
        
             method: "DELETE",
             headers:{
                'Accept': 'application/json', 'Conten-Type': 'application/json'
            },
            // body: JSON.stringify({
            //     'id':botao.getAttribute('data-id')
            // })
             
        })
        .then(()=>{
            cardPai.removeChild(cardFilho)

        })
        .catch((erro)=>{
            console.log(erro)

        })

        })

        }

    })
    .catch((erro)=>{

        console.log(erro)

    })
