import { CardComponent } from './components/card'
import deck from '../data/tarot-deck.json'
import './App.css'


function App() {


  return (
    <>
      <h1>Tarot Card Viewer</h1>
      <CardComponent card={deck[0]} />
    </>
  )
}

export default App
