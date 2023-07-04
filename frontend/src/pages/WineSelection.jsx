// import { useState } from "react";
import { Link } from "react-router-dom";
import CardWine from "../components/CardWine";

export default function WineSelection() {
  // const [wineListShop, setwineListShop] = useState([]);

  const wineListShop = [
    {
      id: 1,
      name: "Chateau Margaux",
      origin: "Bordeaux",
      img_wine:
        "https://images.pexels.com/photos/774455/pexels-photo-774455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "Dominant sans grand mal toute l’appellation Margaux et d'une remarquable constance, Château Margaux produit des vins devenus mythiques tant le mariage rare de la finesse dans la densité et de la fraîcheur dans l’opulence est réussi. Ce millésime 2009 fait partie des très grands millésimes du cru, un monument de la nature où le terroir exceptionnel de Margaux se révèle à merveille.. Sublime, d'une noblesse inégalable et d'une longueur mémorable, ce Château Margaux 2009 est d'une élégance sans pareil!",
    },
    {
      id: 2,
      name: "Chateau coco",
      origin: "Bordeaux",
      img_wine:
        "https://images.pexels.com/photos/774455/pexels-photo-774455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "Dominant sans grand mal toute l’appellation Margaux et d'une remarquable constance, Château Margaux produit des vins devenus mythiques tant le mariage rare de la finesse dans la densité et de la fraîcheur dans l’opulence est réussi. Ce millésime 2009 fait partie des très grands millésimes du cru, un monument de la nature où le terroir exceptionnel de Margaux se révèle à merveille.. Sublime, d'une noblesse inégalable et d'une longueur mémorable, ce Château Margaux 2009 est d'une élégance sans pareil!",
    },
    {
      id: 3,
      name: "Chateau toto",
      origin: "Bordeaux",
      img_wine:
        "https://images.pexels.com/photos/774455/pexels-photo-774455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "Dominant sans grand mal toute l’appellation Margaux et d'une remarquable constance, Château Margaux produit des vins devenus mythiques tant le mariage rare de la finesse dans la densité et de la fraîcheur dans l’opulence est réussi. Ce millésime 2009 fait partie des très grands millésimes du cru, un monument de la nature où le terroir exceptionnel de Margaux se révèle à merveille.. Sublime, d'une noblesse inégalable et d'une longueur mémorable, ce Château Margaux 2009 est d'une élégance sans pareil!",
    },
  ];

  return (
    <div className="wine-selection-container">
      <h2>Sélectionné pour vous</h2>
      <ul className="card-list-container-wine-shop">
        {wineListShop.map((wineBottle) => {
          return (
            <Link to={`/wine/${wineBottle.id}`}>
              <li key={wineBottle.id} className="card-list-wine-shop">
                <CardWine wineBottle={wineBottle} />
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
