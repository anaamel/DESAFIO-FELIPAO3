class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

        atacar() {
        let ataque
        if(this.tipo == "mago"){
            ataque = "magia"
        }else if(this.tipo == "guerreiro"){
            ataque = "espada"
        }else if(this.tipo == "monge"){
            ataque = "artes marciais"
        }else if(this.tipo == "ninja"){
            ataque = "shuriken"
        }else{
            ataque = "ataque mistério"
        }

        console.log(`o ${this.tipo} atacou usando ${ataque}`)
    
    }
}


let heroiEu = new heroi("Namel", 20, "ninja")
let heroiParceiro = new heroi("Juni", 19, "guerreiro")


heroiEu.atacar()
heroiParceiro.atacar()