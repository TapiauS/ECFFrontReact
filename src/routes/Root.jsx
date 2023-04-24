import { Outlet,useLoaderData,Link } from "react-router-dom";
import { SearchBar } from "./SearchBar.jsx";

export async function loader() {
  const result = await fetch("https://api.npoint.io/33fe536f3a3bc2f018fb");

  const gamesjson=await result.json();

  const games=await gamesjson.games;

  console.log(games);

  return { games };
};

export default function Root() {
    const { games } = useLoaderData();

    return (
        <>
        <header id="topbanner">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to ="#">
                        <img src="src/images/icones/logo.jpg" alt="Logo" width="30" height="30" className="d-inline-block align-text-top"/>
                            La Fabrique Gobline
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to ="/">Accueil</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to ="borrow">Emprunter</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to ="boardgame">Plus d'info</Link>
                            </li>
                        </ul>
                        <SearchBar games={games}/>
                    </div>
                </div>
            </nav>
        </header>
        <Outlet />
        </>
        );
  };