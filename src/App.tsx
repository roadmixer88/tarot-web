import { useState } from 'react'
import { CardRow } from './components/CardRow'
import type { CardDeal, Card } from './components/Card'
import deck from '../data/tarot-deck.json'
import spreads from '../data/tarot-spreads.json'
import './App.css'
import { FiveCardCross } from './components/FiveCardCross'

// Fisher-Yates Shuffle
function shuffle(deck: Card[]): Card[] {
  const shuffled = [...deck];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Draw a specified number of cards from the top of the deck and return them as CardDeal objects with random facing
function drawCards(deck: Card[], numCards: number): CardDeal[] {
  const drawnCards: CardDeal[] = [];
  for (let i = 0; i < numCards; i++) {
    const card = deck[i];
    const facing = Math.random() < 0.5 ? 'Upright' : 'Reverse';
    drawnCards.push({
      position: '', // Position will be assigned later based on the spread
      card,
      facing,
    });
  }
  return drawnCards;
}

// Draw the number of cards needed for the selected spread and assign positions based on the spread definition
function drawSpread(spread: { id: string, name: string; positions: string[] }, deck: Card[]): CardDeal[] {
  const numCards = spread.positions.length;
  const drawnCards = drawCards(deck, numCards);
  return drawnCards.map((deal, index) => ({
    ...deal,
    position: spread.positions[index],
  }));
}



function App() {
  const [selectedSpread, setSelectedSpread] = useState<(typeof spreads)[0]>(spreads[0]);
  const [spread, setSpread] = useState<CardDeal[]>(drawSpread(selectedSpread, shuffle(deck)));

  return (
    <div className="flex flex-col items-center justify-center gap-8 p-8">
      <div className="flex justify-center gap-4">
        <select className="p-1 border border-white hover:bg-gray-600 rounded text-base" name="spread" id="spread" value={selectedSpread.name} onChange={(e) => {
          const selected = spreads.find((s) => s.name === e.target.value)
          if (selected) {
            setSelectedSpread(selected)
            setSpread(drawSpread(selected, shuffle(deck)))
          }
        }}>
          {spreads.map((spread) => (
            <option className="p-1 bg-gray-900 text-white hover:bg-gray-600 text-base" key={spread.name} value={spread.name}>{spread.name}</option>
          ))}
        </select>
        <button className="p-1 border border-white hover:bg-gray-600 rounded text-base" onClick={() => setSpread(drawSpread(selectedSpread, shuffle(deck)))}>Deal</button>
      </div>

      {selectedSpread.id !== "fiveCardCross" ? (
        <CardRow spread={spread} />
      ) : (
        <FiveCardCross spread={spread} />
      )}
    </div>

  )
}

export default App
