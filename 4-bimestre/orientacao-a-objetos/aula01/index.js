const projeto = {
    nome: "aula01",
    scripts: [ "test", "start", "dev"],


    rodar(script){
        return `Executando: npm run ${script}`
    },
    temScript(script){
        if(script === "test" || script === "start" || script === "dev"){
            return true
        }else{
            return false
        }
    }
}

module.exports = projeto