import { useNavigate } from "react-router-dom";

import SliderUser from "../../components/SliderUser";
import Button from "../../components/Button";

function TastingSheetModif() {
  const navigateTo = useNavigate();

  const navigateToUserListPage = async () => {
    navigateTo("/user-list");
  };
  return (
    <div className="tasting-sheet-admin-conatainer ">
      <h2>Fiche dégustation</h2>
      <h3>Quels sont vos goûts ?</h3>
      <div className="slider-degustation-wine">
        <div className="taste-slider">
          <SliderUser tasteName="Châteauneuf-du-Pape" />
        </div>
        <div className="taste-slider">
          <SliderUser tasteName="Château Margaux" />
        </div>
        <div className="taste-slider">
          <SliderUser tasteName="Beaujolais Nouveau" />
        </div>
        <div className="taste-slider">
          <SliderUser tasteName="Domaine de la Romanée" />
        </div>
        <div className="taste-slider">
          <SliderUser tasteName="Châteauneuf-du-Pape" />
        </div>
        <div className="taste-slider">
          <SliderUser tasteName="Château Margaux" />
        </div>
        <div className="taste-slider">
          <SliderUser tasteName="Beaujolais Nouveau" />
        </div>
        <div className="taste-slider">
          <SliderUser tasteName="Domaine de la Romanée" />
        </div>
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
