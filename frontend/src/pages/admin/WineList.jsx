import { useState, useEffect } from "react";
import axios from "axios";
import DisplayWineList from "../../components/admin/DisplayWineList";
import SearchBar from "../../components/admin/SearchBar";

function WineList() {
  // use this state with the axios and delete the array wineList
  const [wineList, setWineList] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/wines`)
      .then((response) => {
        setWineList(response.data);
      });
  }, []);

  const searchListFilter = wineList.filter((element) => {
    if (searchInput.length > 0) {
      const propertyValue = element.name.toLowerCase();
      return propertyValue.includes(searchInput.toLowerCase());
    }
    return element;
  });

  return (
    <div className="wine-list-page-container">
      <div className="search-bar-and-button-create">
        <SearchBar setSearchInput={setSearchInput} searchInput={searchInput} />
        <button type="button" className="secondary-button">
          Créer
        </button>
      </div>
      <ul>
        {searchListFilter.map((wine) => {
          return (
            <li key={wine.wine_id}>
              <DisplayWineList wine={wine} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default WineList;
