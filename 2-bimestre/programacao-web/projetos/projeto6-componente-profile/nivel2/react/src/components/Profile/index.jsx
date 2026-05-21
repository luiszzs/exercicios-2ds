import Foto from "./elements/Foto"
import Idade from "./elements/Idade"
import Nome from "./elements/Nome"
import Profissao from "./elements/Profissao"

export default function Profile (){
    return(
        <>
        <Foto />
        <Nome />
        <Idade />
        <Profissao/>
        </>
    )
}