import { useEffect, useState } from "react";
import {Card} from "./Card.jsx";
import { Outlet,useLoaderData,Link } from "react-router-dom";
import { Footer } from "./Footer.jsx";

export default function Gameboard() {
  
  const {games} = useLoaderData();

  return(<>
  <div className="row" id="gamedisplayer">
  {games.map((card, index)=><Card key={index} index={index} title={card.title} year={card.year} genre={card.genre} designer={card.designer} players={card.players} image={card.image} info={card.info}/>)}
  </div>
  <Footer class="navbar navbar-expand-lg bg-body-tertiary" brand="®2023,La Fabrique Gobline marque déposée de la GobCorp"></Footer>
</>)
}
