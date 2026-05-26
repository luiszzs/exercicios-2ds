import { Children } from "react";

export default function Card({ Children, classe, nivel }){
    return(
        <>
        <div className="card">
        <div className="imagem">
            <img src="https://cdn-icons-png.flaticon.com/512/3106/3106921.png" alt="" />
        </div>
        {/* ajeitar depois, preciso colocar o children e colocar as props*/}
        <div className="atributos">
            <h1>{Children}</h1>
            <p>Classe: <span>{classe}</span></p>
            <p>Nível: <span>{nivel}</span></p>
            <p>Vida: <span className="vidaDoUsuario">850</span> <span className="vidaTotal">/ 1000</span></p>
            <p>Experiência: <span className="experieciaDoUsuario">1250</span> <span className="experienciaTotal">/ 2000</span></p>
        </div>
        </div>
        </>
    )
}