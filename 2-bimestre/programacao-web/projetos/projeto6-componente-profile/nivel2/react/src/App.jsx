import Profile from "./components/Profile"
import cara1 from "./assets/cara1.png"
import mulher1 from "./assets/mulher1.png"
import mulher2 from "./assets/mulher2.png"


export default function App(){
  return(
    <>

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
            foto={mulher1}
          />
          </div>
    </>
  )
}