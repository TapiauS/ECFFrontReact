import { Outlet,useLoaderData,Link } from "react-router-dom";

export function Footer(props){


    return(
        <footer>
            <nav className={props.class}>
                <Link className="navbar-brand" to="#">{props.brand}</Link>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="index.html">Politiques de confidentialité</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="https://www.legifrance.gouv.fr/codes/texte_lc/LEGITEXT000006070719/">Informations légales</Link>
                    </li>
                </ul>
            </nav>
        </footer>
    );
};