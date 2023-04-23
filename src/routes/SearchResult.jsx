import { useState,useEffect } from 'react';
import { useParams,useLoaderData } from 'react-router-dom';
import { Card } from './Card';

export function SearchResult(){
    const { cardId } = useParams();
    const {games}=useLoaderData();


    const [ref,setRef]=useState({game:"",index:0});
    
    

    
    useEffect(() => {
        games.map((game, index) => {
          if (index == cardId) {
            setRef({ game: game, index: index });
            return;
          }
        });
      }, []);


    console.log(ref);
    return(<><Card key={ref.index} index={ref.index} title={ref.game.title} year={ref.game.year} genre={ref.game.genre} designer={ref.game.designer} players={ref.game.players} image={ref.game.image} info={ref.game.info}/></>)

}