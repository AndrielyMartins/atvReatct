import './App.css'
import Mensagem from "./Mensagem"
import Saudacao from "./Saudacao"

function App() {
  return (
    <>
    <div>
      <h1>Mensagem solicitada</h1>
      <Mensagem texto="Mensagem especial para você professor, olha só!" />

      <h4>Saudações Personalizadas</h4>
      <Saudacao nome="Carlos" idade={25} />
      <Saudacao nome="Jimin" idade={17} />
    </div>
    </>
  )
}

export default App
