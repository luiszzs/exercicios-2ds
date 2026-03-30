const nome = document.getElementById("nome")
const idade = document.getElementsById("idade")
const resultado = document.getElementById("resultado")

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    resultado.textContent = "Olá, " + nome.value + "você tem " + idade.value + "anos"
}
)