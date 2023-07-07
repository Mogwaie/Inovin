import { useState } from "react";
import DisplayDegustationProfil from "../../components/admin/DisplayDegustationProfil";
import SearchBar from "../../components/admin/SearchBar";

function DegustationProfil() {
  // put the taste profil from the back in the useState
  //   const [tasteProfileList, setTasteProfileList] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const tasteProfiles = [
    {
      wine_id: 1,
      name: "Vin Blanc",
      description: "Profil de goût pour le vin blanc",
    },
    {
      wine_id: 2,
      name: "Vin Rouge",
      description: "Profil de goût pour le vin rouge",
    },
    {
      wine_id: 3,
      name: "Vin Rosé",
      description: "Profil de goût pour le vin rosé",
    },
  ];

  // filter of the list of profils
  const searchListFilter = tasteProfiles.filter((element) => {
    if (searchInput.length > 0) {
      const propertyValue = element.name.toLowerCase();
      return propertyValue.includes(searchInput.toLowerCase());
    }
    return element;
  });

  return (
    <div>
      <SearchBar setSearchInput={setSearchInput} searchInput={searchInput} />
      <ul>
        {searchListFilter.map((profil) => {
          return (
            <li key={profil.wine_id}>
              <DisplayDegustationProfil profil={profil} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default DegustationProfil;
