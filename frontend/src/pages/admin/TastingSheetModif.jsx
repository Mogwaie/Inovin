import { useNavigate } from "react-router-dom";

import SliderUser from "../../components/SliderUser";
import Button from "../../components/Button";

function TastingSheetModif() {
  const navigateTo = useNavigate();

  const navigateToUserListPage = async () => {
    navigateTo("/user-list");
  };

  const wineListTasting = [
    "Châteauneuf-du-Pape",
    "Château Margaux",
    "Beaujolais Nouveau",
    "Domaine de la Romanée",
    "Le Sancerre Blanc",
    "Pouilly-Fuissé",
    "Châteauneuf-du-Pape Blanc",
    "Château Yquem",
  ];

  return (
    <div className="tasting-sheet-admin-conatainer ">
      <h2>Fiche dégustation</h2>
      <h3>Quels sont vos goûts ?</h3>
      <div className="slider-degustation-wine">
        {wineListTasting.map((wine) => (
          <SliderUser key={wine} tasteName={wine} />
        ))}
      </div>
      <div className="button-end-tasting">
        <Button
          text="Terminer"
          onClick={navigateToUserListPage}
          id="degutation-page-btn"
        />
      </div>
    </div>
  );
}
export default TastingSheetModif;
