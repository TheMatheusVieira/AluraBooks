let livros = []
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

getBuscarLivrosDaAPI()


async function getBuscarLivrosDaAPI(){
    const res = await fetch(endpointDaAPI)
    livros = await res.json()
    let livrosComDesconto = aplicarDesconto(livros)

    exibirOsLivrosNaTela(livrosComDesconto)
}



// let livros = []

// const endpointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

// getBuscarLivrosDaAPI()

// async function getBuscarLivrosDaAPI() {
//     const res = await fetch (endpointDaApi);
//     livros = await res.json();
//     console.table(livros);

//     exibirOsLivrosNaTela(livros)
    
// }

// const elementoParaInserirLivros = document.getElementById('livros');

// function exibirOsLivrosNaTela(listaDeLivros){
// listaDeLivros.forEach(livro => {
//     const livroDiv = `<div class="livro">
//     <img src="${livro.imagem}" alt="${livro.titulo}">
//     <h2>${livro.titulo}</h2>
//     <p>Autor: ${livro.autor}</p>
//     <p>Preço: R$${livro.preco}</p>
//     <p>Categoria: ${livro.categoria}</p>
//     </div>`;
//     elementoParaInserirLivros.innerHTML += livroDiv;
// });
// }
