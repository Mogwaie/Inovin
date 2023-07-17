import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "../../components/Button";
import SliderAdmin from "../../components/admin/SliderAdmin";

function TastingSheetModif() {
  const navigateTo = useNavigate();

  const [wineListTasting, setWineListTasting] = useState([]);
  const [nameListTaste, setNameListTaste] = useState([
    { taste_id: 1, name: "" },
    { taste_id: 2, name: "" },
    { taste_id: 3, name: "" },
    { taste_id: 4, name: "" },
  ]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/tastes`)
      .then((response) => {
        setWineListTasting(response.data);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    for (let i = 0; i < nameListTaste.length; i += 1) {
      if (!(nameListTaste[i].name === "")) {
        const body = nameListTaste[i];
        try {
          const response = axios.put(
            `${import.meta.env.VITE_BACKEND_URL}/api/tastes/${
              nameListTaste[i].taste_id
            }`,
            body
          );
          if (response) {
            navigateTo("/admin");
          }
        } catch (error) {
          console.error(error);
        }
      }
    }
  };

  return (
    <form
      className="tasting-sheet-admin-conatainer"
      onSubmit={(e) => handleSubmit(e)}
    >
      <h2>Fiche dégustation</h2>
      <h3>Quels sont vos goûts ?</h3>
      <div className="slider-degustation-wine">
        {wineListTasting.map((wine) => (
          <SliderAdmin
            key={wine.taste_id}
            id={wine.taste_id}
            tasteName={wine.name}
            nameListTaste={nameListTaste}
            setNameListTaste={setNameListTaste}
          />
        ))}
      </div>
      <div className="button-end-tasting">
        <Button type="submit" text="Terminer" />
      </div>
    </form>
  );
}
export default TastingSheetModif;
