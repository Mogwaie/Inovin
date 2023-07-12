import { useState, useEffect } from "react";
import axios from "axios";
import DisplayDegustationProfil from "../../components/admin/DisplayDegustationProfil";
import SearchBar from "../../components/admin/SearchBar";

function DegustationProfil() {
  // put the taste profil from the back in the useState
  const [tasteProfileList, setTasteProfileList] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  // call all taste profil from bd
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/taste-profile`)
      .then((response) => {
        setTasteProfileList(response.data);
      });
  }, []);

  // filter of the list of profils
  const searchListFilter = tasteProfileList.filter((element) => {
    if (searchInput.length > 0) {
      const propertyValue = element.name.toLowerCase();
      return propertyValue.includes(searchInput.toLowerCase());
    }
    return element;
  });

  return (
    <div className="degustation-profil-list-container">
      <div className="search-bar-and-button-create">
        <SearchBar setSearchInput={setSearchInput} searchInput={searchInput} />
      </div>
      <ul>
        {searchListFilter.map((profil) => {
          return (
            <li key={profil.taste_profil_id}>
              <DisplayDegustationProfil profil={profil} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default DegustationProfil;
