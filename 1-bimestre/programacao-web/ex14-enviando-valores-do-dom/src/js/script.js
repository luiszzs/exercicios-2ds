const input = document.getElementById("nome")
const botao = document.getElementById("mostrar")
const resultado = document.getElementById("resultado")
const valor =  input.value 

botao.addEventListener("click", () => {
    resultado.textContent = "Olá," + input.value
})