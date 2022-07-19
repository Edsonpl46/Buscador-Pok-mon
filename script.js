var formulario = document.querySelector('form')

formulario.addEventListener('submit', function(e){
    //Block de refresh no buscador
    e.preventDefault()
    //Url de pesquisa
    let urlForm =  "https://pokeapi.co/api/v2/pokemon/" ;

    //Valor do input name
    let nome = document.getElementById("name")
    //Concatena p url com o inputname
    urlForm = urlForm + this.name.value
    // Transforma o valor em minusculo
    urlForm = urlForm.toLocaleLowerCase()

    //ID content
    let resposta = document.getElementById('content')

    //ID imgpokemon
    let imagem = document.getElementById('imgpokemon')

    //Resposta em HTML
    let html = ''

    fetch(urlForm)
    .then(resposta => resposta.json())
    .then(function (data) {
        
        html = 'Nome: ' + maiuscula(data.name) + '<br>'
        html = html + 'Type: ' + maiuscula(data.types[0].type.name)
        resposta.innerHTML = html

        imagem.innerHTML = "<img src='" + data.sprites.front_default + "'><img src='" + data.sprites.back_default + "'>"
    })
     
    .catch(function (err) {
        if(err == 'SyntaxError: Unexpected token N in JSON at position 0'){
            html = 'Pokémon não encontrado! 😒'
        } else {
            html = err
        }
        resposta.innerHTML = html
    })
});

function maiuscula(val){
return val[0].toUpperCase() + val.substr(1)
}