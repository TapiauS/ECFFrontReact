import ReactDOM  from "react-dom";

export function Card(props) {

    return(
        <>
        <div className="col-6 col-md-3 mt-3">
            <div className="card" id={props.title}>
                <img src={props.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text"></p>
                    <a className="btn btn-primary" data-bs-toggle="offcanvas" href={"#"+props.index} role="button" >
                        Plus d'info
                    </a>
                </div>
            </div>
        </div>
        <div className="offcanvas offcanvas-end" tabIndex="-1" id={props.index} aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">{props.title}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <p> Date de sortie :<br/> {props.year}</p>
                    </div>
                    <div className="col-12 col-md-6">
                        <p> Genre :<br/> {props.genre}</p>
                    </div>
                    <div className="col-12 col-md-6">
                        <p> Auteur :<br/> {props.designer}</p>
                    </div>
                    <div className="col-12 col-md-6">
                        <p> Nombre de joueur :<br/> {props.players}</p>
                    </div>
                    <div className="col-12">
                        <img src={props.image} alt="..."/>
                    </div>
                    <div className="col-12">
                        <p>{props.info}</p>
                    </div>
                </div>
            </div>
        </div></>)
    };
    