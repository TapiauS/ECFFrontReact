import { useEffect, useState } from "react";
import {Card} from "./Card.jsx";


export default function Gameboard() {
  const [cards,setCards]=useState([]);

  useEffect(() => {
    fetch("https://api.npoint.io/33fe536f3a3bc2f018fb")
      .then(response=>response.json())
      .then(json=>setCards(json.games));
  }, []); 

  return(<>
  <div className="row" id="gamedisplayer">
  {cards.map((card, index)=><Card key={index} index={index} title={card.title} year={card.year} genre={card.genre} designer={card.designer} players={card.players} image={card.image} info={card.info}/>)}
  </div>
</>)
}
