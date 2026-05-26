import Profile from "./components/Profile"
import "./styles/ProfileCSS.css"

export default function App(){
  return(
      <div className="container">
        <div className="sidebar">
          <h1>TechVision</h1>
          <h1>Sistema Interno</h1>
        </div>

        <div className="textos">
          <h1>Usuários do Sistema</h1>
          <p>Conheça os membros da nossa equipe</p>
        </div>

        <div className="cards">
          <div className="profile-card">
            <Profile 
              foto={"https://i.pinimg.com/736x/16/e2/cb/16e2cb7cf4c8b5404a720a41f305d6cc.jpg"}
              nome={"Mariana Oliveira"}
              idade={24}
              profissao={"Desenvolvedora Frontend"}
            />
            <div className="colaboradores">
              <p>Colaboradores</p>
            </div>
          </div>

          <div className="profile-card">
            <Profile 
              foto={"https://www.otempo.com.br/content/dam/otempo/editorias/opiniao/fernando-berenguel/2026/5/role-aleatorio-ilarie-da-xuxa-ganha-versao-em-espanhol-de-cantora-do-eurovision.webp"}
              nome={"Maria Souza"}
              idade={56}
              profissao={"Analista de mercado"}
            />
            <div className="colaboradores">
              <p>Colaboradores</p>
            </div>
          </div>

          <div className="profile-card">
            <Profile 
              foto={"https://img.freepik.com/fotos-gratis/jovem-triste-com-chapeu-de-festa-azul-isolado-na-parede-verde_141793-126377.jpg?semt=ais_hybrid&w=740&q=80"}
              nome={"João Carvalho"}
              idade={18}
              profissao={"Estagiário"}
            />

            <div className="colaboradores">
              <p>Colaboradores</p>
            </div>
          </div>
        </div>

        <div className="footer">
          <p>&copy; TechVision - Todos os direitos reservados.</p>
        </div>
      </div>
  )
}