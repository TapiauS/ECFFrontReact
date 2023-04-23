import { Outlet,useLoaderData } from "react-router-dom";
import { SchearchBar } from "./SearchBar";

export async function loader() {
  const result = await fetch("https://api.npoint.io/33fe536f3a3bc2f018fb");

  const gamesjson=await result.json();

  const games=await gamesjson.games;

  console.log(games);

  return { games };
};

export default function Root() {
    const { games } = useLoaderData();

    console.log(games);



    return (
        <><header id="topbanner">
            <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="src/images/icones/logo.jpg" alt="Logo" width="30" height="30" className="d-inline-block align-text-top"/>
                            La Fabrique Gobline
                        </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Accueil</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="borrow">Emprunter</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="boardgame">Plus d'info</a>
                            </li>
                        </ul>
                        <SchearchBar games={games}/>
                    </div>
                </div>
            </nav>
        </header>
        <main>
            <Outlet />
        </main>
        <footer>
                <nav className="navbar fixed-bottom navbar-expand-lg bg-body-tertiary">
                    <a className="navbar-brand" href="#">®2023,La Fabrique Gobline marque déposée de la GobCorp</a>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="index.html">Politiques de confidentialité</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.legifrance.gouv.fr/codes/texte_lc/LEGITEXT000006070719/">Informations légales</a>
                        </li>
                    </ul>
                </nav>
            </footer></>
        )
  }