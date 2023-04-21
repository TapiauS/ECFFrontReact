import { useState,useEffect } from "react";

export function Borrow(){
    const [start,setStart]=useState("2018-07-22");
    const [end,setEnd]=useState("2018-07-22");
    const [gamelist,setGameList]=useState([]);
    const [timeAlertVisibility,setTimeAlertVisibility]=useState("none");
    const [tooFarAlertVisibility,setToofarAlertVisibility]=useState("none");
    const [selectAlertVisibility,setSelectAlertVisibility]=useState("none");
    const [selection,setSelection]=useState("");

    
    const handleStartDateChange=event=>{
        const newvalue=event.target.value;
        setStart(newvalue);
    };

    const handleEndDateChange=event=>{
        const newvalue=event.target.value;
        setEnd(newvalue);
    };

    useEffect(() => {
        fetch("https://api.npoint.io/33fe536f3a3bc2f018fb")
          .then(response=>response.json())
          .then(json=>setGameList(json.games));
      }, []);

    const submitBorrow=(click)=>{
        click.preventDefault();
        const ONE_YEAR_IN_MILLISECONDS = 31536000000;
        let success=true;
        const startddate=new Date(start);
        const enddate=new Date(end);
        const datevalide=(Date.parse(startddate)-Date.parse(enddate)<0);
        const toofar=enddate-startddate<ONE_YEAR_IN_MILLISECONDS;
        if(gamedropdown.value===""){
            success=false;
            setSelectAlertVisibility("block");
            //gamedropdown.style.border="1px solid red";
        }
        if(!datevalide){
            success=false;
            // borrowstart.style.border="1px solid red";
            // borrowend.style.border="1px solid red";
            setTimeAlertVisibility("block");
        }
        else{
            success=true;
            // borrowstart.style.border=startdefaultstyle;
            // borrowend.style.border=enddefaultstyle;
            setTimeAlertVisibility("none");
        }
        if(!toofar){
            success=false;
            // borrowstart.style.border="1px solid red";
            // borrowend.style.border="1px solid red";
            setToofarAlertVisibility("block");
        }
        if(success){
            alert("Jeu loué avec succés");
            // borrowstart.style=startdefaultstyle;
            // borrowend.style=enddefaultstyle;
            // gamedropdown.style=gamedropdowndefaultstyle;
            setSelectAlertVisibility("none");
            setTimeAlertVisibility("none");
            setToofarAlertVisibility("none");
        }
    };

    const updateSel=event=>{
        const newValue=event.target.value;
        setSelection(newValue);
    }

    return(
        <><div className="row">
            <h1>Emprunter un jeu</h1>
            <form>
                <div className="col-12">
                    <select name="borrow" id="gamedropdown" value={selection} onChange={updateSel}>
                        <option value="">Emprunter un jeu</option>
                        {gamelist.map((game,index)=><option value={index} key={index}>{game.title}</option>)}
                    </select>
                </div>
                <div className="col-12">
                    <div className="row">
                        <div className="col-6">
                            <label htmlFor="start">Date d'emprunt:</label>
                            <input type="date" id="start" name="trip-start"
                                value={start}
                                onChange={handleStartDateChange}
                                min="1900-00-00"/>
                        </div>
                        <div className="col-6">
                            <label htmlFor="return">Date de retour prévu:</label>
                            <input type="date" id="return" name="trip-start"
                                value={end}
                                onChange={handleEndDateChange}
                                min="1900-00-00"/>
                        </div>
                    </div>
                </div>
                <label className="alert" id="timealert" style={{'display':timeAlertVisibility}}>La  date de début doit être antérieure a la date de fin</label> 
                <label className="alert" id="toofaralert" style={{'display':tooFarAlertVisibility}}>La durée d'emprunt doit être inférieure a 1 ans</label>
                <label className="alert" id="selectalert" style={{'display':selectAlertVisibility}}>Vous devez avoir selectionné un jeu</label> 
                <button type="submit" className="btn btn-primary" id="validation" onClick={submitBorrow}>Valider</button>
            </form>
        </div></>
    )
}