import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import InicioComponent from './components/InicioComponent'
import ProyectoComponent from './components/ProyectoComponent'


function App() {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <main className="main-content">
        <InicioComponent></InicioComponent>
        <ProyectoComponent></ProyectoComponent>
      </main>
      <FooterComponent></FooterComponent>
    </>
  )
}

export default App
