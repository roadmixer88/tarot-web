import { CardRow } from './components/CardRow'
import { type CardDeal } from './components/Card'
import deck from '../data/tarot-deck.json'
import './App.css'


const spread: CardDeal[] = [
  { position: 'Past', card: deck[63], facing: 'Reverse' },
  { position: 'Present', card: deck[22], facing: 'Upright' },
  { position: 'Future', card: deck[44], facing: 'Upright' },
]

function App() {


  return (
    <>
      <CardRow spread={spread} />
    </>
  )
}

export default App
