import Foto from "./elements/Foto"
import Idade from "./elements/Idade"
import Nome from "./elements/Nome"
import Profissao from "./elements/Profissao"

export default function Profile ({ foto, nome, profissao, idade }){
    return(
        <>
        <Foto foto={foto}/>
        <Nome nome={nome}/>
        <Idade idade={idade}/>
        <Profissao profissao={profissao}/>
        </>
    )
}