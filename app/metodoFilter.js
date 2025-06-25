const btnFiltrarLivrosDeFront = document.getElementById('btnFiltrarLivrosFront');
    
btnFiltrarLivrosDeFront.addEventListener('click', filtrarLivrosDeFront);
 

 function filtrarLivrosDeFront(){
    let livrosFiltrados = livros.filter(livro => livro.categoria == 'dados')
    console.table(livrosFiltrados)
 }