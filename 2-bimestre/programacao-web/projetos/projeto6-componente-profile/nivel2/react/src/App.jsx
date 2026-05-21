import Profile from "./components/Profile"

export default function App(){
  return(
    <>
    <Profile
            nome="Maria"
            idade={20}
            profissao="Dev"
            foto="https://via.placeholder.com/250"
          />
    </>
  )
}