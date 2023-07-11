import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import SliderUser from "../../components/SliderUser";
import Button from "../../components/Button";

function TastingSheetModif() {
  const navigateTo = useNavigate();

  const navigateToUserListPage = async () => {
    navigateTo("/user-list");
  };

  const [wineListTasting, setWineListTasting] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:4242/api/tastes`).then((response) => {
      setWineListTasting(response.data);
    });
  }, []);

  return (
    <div className="tasting-sheet-admin-conatainer ">
      <h2>Fiche dégustation</h2>
      <h3>Quels sont vos goûts ?</h3>
      <div className="slider-degustation-wine">
        {wineListTasting.map((wine) => (
          <SliderUser key={wine.taste_id} tasteName={wine.name} />
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
