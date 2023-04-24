import { useEffect, useState } from "react";
import { Outlet,useLoaderData,Link } from "react-router-dom";

export function SearchBar(){

    const [value,setValue]=useState("");
    const [results,setResults]=useState([]);


    const {games}=useLoaderData();
    const findRef=()=>{
        const compatibleResult=[];
        const length=value.length;
        console.log(length);
        games.map((game,index)=>{
            if(length>0&&game.title.substring(0, length)===value){
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
        setValue(newtext);
    };


    useEffect(() => {
        findRef();
      }, [value]);

    return(
        <>
        <form className="d-flex" role="search">
            <div className="row">
                <div className="col-12">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={value} onChange={updateValue}/>
                </div>
                <div className="col-12">
                    <ul className="list-group">
                        {results.map(result => <li className="list-group-item " aria-current="true"><Link to={result.index} key={result.index}>{result.game.title}</Link></li>)}
                    </ul>
                </div>
            </div>
      </form></>
    );

};