import './App.css';
// import React from 'react';
import Blackjack from './Blackjack.js';
// const axios = require('axios');
import axios from 'axios';
const GET_DECK_URL = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'

async function App() {
  console.debug('App');
  const deck = await axios.get(GET_DECK_URL);
  const deck_id = deck.data.deck_id
  console.log('deck', deck.data.deck_id);
  return (
    <div className="App">
      <Blackjack id={deck_id}/>
    </div>
  );
}

export default App;

// App
  // make api call to get deck
//Blackjack game - takes in deck_id
  // make 2 api calls to draw card
  // add values together
  // show blackjack if 21
  // or show you lose if not
//Card - takes in image
