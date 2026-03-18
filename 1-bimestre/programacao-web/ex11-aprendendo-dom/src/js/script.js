const titulo = document.getElementById("titulo")
const botao = document.getElementById("botao")
botao.addEventListener("click" , function mudarText (){
    titulo.textContent = "Texto Alterado com JavaScript"
})