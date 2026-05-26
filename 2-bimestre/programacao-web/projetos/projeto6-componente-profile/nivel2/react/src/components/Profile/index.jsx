export default function Profile ({ foto, nome, profissao, idade }){
    return(
        <>
            <div className="cima">
                <img src={foto} />
                <h1>{nome}</h1>
            </div>

            <div className="meio">
                <p><strong>Idade:</strong> {idade} anos</p>
                <p><strong>Profissão:</strong> {profissao}</p>
            </div>
        </>
    )
}