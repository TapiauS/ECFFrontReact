export default function Root() {
    return (
        <><div className="row">
            <div className="col-12">
                <div id="topbanner">
                    <p id="presentext">Le plaisir du jeux</p>
                </div>
            </div>
            <div className="col-12">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <img src="src/images/pictures/joie.jpg" width="300"/>
                    </div>
                    <div className="col-12 col-md-6">
                        <p id="presentation">La Fabrique Gobeline est un café jeux unique en son genre, qui se distingue des autres cafés jeux par son ambiance fantastique et son décor inspiré de l'univers médiéval-fantastique. Situé dans une ruelle pittoresque, ce café est facilement identifiable grâce à sa devanture colorée et son enseigne originale.</p>
                    </div>
                </div>
            </div>
            <div className="col-12">
                <h2>Carte</h2>
                <div className="row">
                    <div className="col-12 col-md-6" id="carterigth">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Potion de santé (café noir)</li>
                            <li className="list-group-item">Potion de mana (café au lait)</li>
                            <li className="list-group-item">Thé de dragon (thé noir épicé)</li>
                            <li className="list-group-item">Breuvage des nains (bière artisanale)</li>
                            <li className="list-group-item">Sang de dragon (jus de fruit rouge)</li>
                            <li className="list-group-item"></li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-6">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Galette de boulanger (croissant)</li>
                            <li className="list-group-item">Oeuf de griffon (oeuf à la coque)</li>
                            <li className="list-group-item">Salade de la chasseresse (salade verte avec tomates, fromage de chèvre et noix)</li>
                            <li className="list-group-item">Saucisse de l'ogre (saucisse artisanale avec purée de pommes de terre et de carottes)</li>
                            <li className="list-group-item">Friandise du magicien (brownie au chocolat)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div></>
        )
  }