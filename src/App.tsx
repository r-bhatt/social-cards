import React from 'react';
import './App.scss';
import Card from './Atoms/Card/Card';
import { CardTypes } from './API/Formats/CardTypes';

const database: CardTypes = {
  avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
  content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut architecto labore ullam neque optio eaque enim!" +
  "Mollitia temporibus consequuntur, quidem voluptatem sint ullam quasi, tempora, inventore odio molestiae voluptas atque?",
  contentImg: "https://images.unsplash.com/photo-1590180958028-adf3b169f83b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
  uname: "emilia jones",
}

function App() {
  return (
    <div id="app" className="app">
      <h2>My Card</h2>
      <Card
        cardData={database}
      />
      <h3>Card ends</h3>
    </div>
  );
}

export default App;
