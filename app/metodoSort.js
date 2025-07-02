let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco)

function ordenarLivrosPorPreco(){
let livrosOrdenardos = livros.sort((a, b) => a.preco - b.preco)
exibirOsLivrosNaTela(livrosOrdenardos)
}