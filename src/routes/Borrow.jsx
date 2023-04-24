import { useState,useEffect } from "react";
import { Outlet,useLoaderData } from "react-router-dom";
import "./Borrow.css";

export function Borrow(){
    const [start,setStart]=useState("2018-07-22");
    const [end,setEnd]=useState("2018-07-22");
    const {games} = useLoaderData();
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
        }
        if(!datevalide){
            success=false;
            setTimeAlertVisibility("block");
        }
        else{
            success=true;
            setTimeAlertVisibility("none");
        }
        if(!toofar){
            success=false;
            setToofarAlertVisibility("block");
        }
        if(success){
            alert("Jeu loué avec succés");
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
                        {games.map((game, index) => <option value={index} key={index}>{game.title}</option>)}
                    </select>
                </div>
                <div className="col-12">
                    <div className="row">
                        <div className="col-6">
                            <label htmlFor="start">Date d'emprunt:</label>
                            <input type="date" id="start" name="trip-start"
                                value={start}
                                onChange={handleStartDateChange}
                                min="1900-00-00" />
                        </div>
                        <div className="col-6">
                            <label htmlFor="return">Date de retour prévu:</label>
                            <input type="date" id="return" name="trip-start"
                                value={end}
                                onChange={handleEndDateChange}
                                min="1900-00-00" />
                        </div>
                    </div>
                </div>
                <label className="alert" id="timealert" style={{ 'display': timeAlertVisibility }}>La  date de début doit être antérieure a la date de fin</label>
                <label className="alert" id="toofaralert" style={{ 'display': tooFarAlertVisibility }}>La durée d'emprunt doit être inférieure a 1 ans</label>
                <label className="alert" id="selectalert" style={{ 'display': selectAlertVisibility }}>Vous devez avoir selectionné un jeu</label>
                <button type="submit" className="btn btn-primary" id="validation" onClick={submitBorrow}>Valider</button>
            </form>
        </div>
        <Footer class="navbar navbar-expand-lg fixed-bottom bg-body-tertiary" brand="®2023,La Fabrique Gobline marque déposée de la GobCorp"></Footer>
        </>  
    );
}