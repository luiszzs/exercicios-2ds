class Livro {
    disponivel = true
    constructor(titulo, autor, ano){
        this.titulo = titulo
        this.autor = autor
        this.ano = ano
    }

    emprestar(){
        if(this.disponivel == true){
            this.disponivel = false
        }
        
    }

    devolver(){
        if(this.disponivel == false ){
            this.disponivel = true
        }
    }
    

    estaDisponivel(){
        if(this.disponivel == true){
            return true
        } else{
            return false
        }
    }

}


module.exports = Livro