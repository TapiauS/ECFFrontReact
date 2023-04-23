import { useEffect, useState } from "react";

export function SchearchBar(props){

    const [value,setValue]=useState("");
    const [results,setResults]=useState([]);
    const [games,setGames]=useState(props.games);

    // useEffect(() => {
    //     fetch("https://api.npoint.io/33fe536f3a3bc2f018fb")
    //       .then(response=>response.json())
    //       .then(json=>setGames(json.games));

    //   }, []);
    
    
    
    
    const findRef=()=>{
        const compatibleResult=[];
        const length=value.length;
        console.log(length);
        games.map((game,index)=>{
            const element={game:game,index:index};
            let include=false;
            results.forEach(element=>{
                if(element.index===index){
                    include=true;
                    return;
                }
            })
            if(length>0&&game.title.substring(0, length)===value&&!include){
                const element={game:game,index:index};
                compatibleResult.push(element);
            }
        });
        const wut=compatibleResult.slice();
        setResults([]);
        console.log(compatibleResult);
        setResults(wut);
        console.log(results);
    };

    const updateValue=(event)=>{
        const newtext = event.target.value;
        console.log("new text="+newtext);
        setValue(newtext);
        findRef();
    };


    return(
        <>
        <form className="d-flex" role="search">
            <div className="row">
                <div className="col-12">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={value} onChange={updateValue}/>
                </div>
                <div className="col-12">
                    <ul className="list-group">
                        {results.map(result => <li className="list-group-item " aria-current="true"><a href={"card/"+result.index} key={result.index}>{result.game.title}</a></li>)}
                    </ul>
                </div>
            </div>
      </form></>
    )

};