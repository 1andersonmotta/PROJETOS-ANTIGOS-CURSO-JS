//constructor Function
//criar objeto
//titulo,mensagem,autor,visualizações,comentarios,estaaovivo

function Postagem(titulo,mensagem,autor) {
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizações= 10,
    this.comentarios= [],
    this.estaAoVivo = false
}

let postagem = new Postagem('a','b','c');
console.log(postagem);