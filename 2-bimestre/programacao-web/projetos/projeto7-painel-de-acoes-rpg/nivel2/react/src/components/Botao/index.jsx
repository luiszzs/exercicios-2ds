export default function Botao(){

    function atacar(){
        alert("Atacando o inimigo!")
    }

    function defender(){
        alert("Defendendo posição!")
    }

    function fugir(){
        alert("Fugindo da batalha!")
    }

    return(
        <>
        <div className="botoes">
                <button id="atacar" onClick={atacar}>Atacar</button>
                <button id="defender" onClick={defender}>Defender</button>
                <button id="fugir"  onClick={fugir}>Fugir</button>
        </div>
        </>
    )
}