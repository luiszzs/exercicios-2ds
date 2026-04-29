import { Home } from './pages/Home'
import { Contato } from './pages/Contato'
import { Sobre } from './pages/Sobre'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

export default function App(){
  return(
    <div>
      <main>
        <Home />
        <Sobre />
        <Contato />
      </main>

      <Footer />
    </div>
  )
}