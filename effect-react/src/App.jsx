import './App.css'
import Count from './components/Count'
import EffectOnLoad from './components/EffectOnLoad'
import EffectUnmount from './components/EffectUnmount'

function App() {

  return (
    <div className='App'>

      <h1>Bienvenida de vuelta</h1>

      <EffectOnLoad name="Miguel" />
      <EffectUnmount />
      <Count />
    </div>
  )
}

export default App
