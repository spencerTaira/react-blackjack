import Card from './Card.js';
import axios from 'axios';


async function Blackjack(id) {
  console.debug('Blackjack')
  const DRAW_2CARDS_URL = `https://deckofcardsapi.com/api/deck/${id}/draw/?count=2`

  const cards = (await axios.get(DRAW_2CARDS_URL)).cards
  const score = cards[0].value + cards[1].value;

  return (
    <div>
      <div>
        <Card img={cards[0].image}/>
        <Card img={cards[1].image}/>
      </div>
      <div>
        <p>Score: {score}</p>
        {score === 21 ? <p>BLACKJACK!!!</p> : <p>YOU LOSE!</p>}
      </div>
    </div>
  )
}

export default Blackjack;