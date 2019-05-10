const botao = document.querySelector('.btn-search-sticker');


    botao.addEventListener('click', (evento) => {
        evento.preventDefault()
        const palavra = document.getElementById('sticker');
    

     fetch('https://api.giphy.com/v1/stickers/search?q=' + palavra.value + '&api_key=pabFcKvGYbhIR28163yG1bcNWh7CIbfw')

    .then ((response)=>{
        return response.json()
    })
    .then ((data)=>{
        
        console.log(data)        

        data.data.forEach( imagens => {     

        const adesivo = document.querySelector('.stickers');

        const box = document.createElement('div');
        box.setAttribute('class', 'data-id');
        adesivo.appendChild(box);

        let foto = document.createElement('img');
        foto.setAttribute('src', imagens.images.original.url);
        box.appendChild(foto);      


        });
           
        })
        .catch((erro)=>{
            console.log(erro)
        })
    })

