export default function FormularioMensagem(){


  function enviarFormulario(event){
    event.preventDefault()
    const nome = document.getElementById("nome").value
    const mensagem = document.getElementById("mensagem").value
    alert(`Olá ${nome}, ${mensagem}`) 
  }

    return(
        <>
        <div className="formulario">
        <label>Formulário de Mensagem</label>
        <form onSubmit={enviarFormulario}>
            <label>Nome:</label>
            <input type="text" placeholder="Digite seu nome" id="nome"  />
            <label>Mensagem:</label>
            <textarea type="text" placeholder="Digite sua mensagem..." id="mensagem"></textarea>
            <button type="submit">Enviar Mensagem</button>
        </form>
        </div>
        </>
    )
}