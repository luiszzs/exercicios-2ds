import Profile from "./components/Profile"
import cara1 from "./assets/cara1.png"
import mulher1 from "./assets/mulher1.png"
import mulher2 from "./assets/mulher2.png"


export default function App(){
  return(
    <>
    <div className="navbar">
      <h1>TechVision</h1>
      <h1>Sistema interno</h1>
    </div>


    <div className="titulo">
    <h1>Usuários do Sistema</h1>
    <h2>Conheça os membros da nossa equipe</h2>
    </div>
    <div className="container">
    <div className="card">
    <Profile
            nome="Maria"
            idade={20}
            profissao="Dev"
            foto={mulher1}
          />
          </div>

          <div className="card">
          <Profile
            nome="Maria"
            idade={20}
            profissao="Dev"
            foto={mulher2}
          />

          </div>

          <div className="card">
          <Profile
            nome="Pedro"
            idade={20}
            profissao="Dev"
            foto={cara1}
          />
          </div>
          </div>
    </>
  )
}