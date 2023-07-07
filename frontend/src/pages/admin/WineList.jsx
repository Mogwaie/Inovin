import { useState } from "react";
import DisplayWineList from "../../components/admin/DisplayWineList";
import SearchBar from "../../components/admin/SearchBar";

function WineList() {
  // use this state with the axios and delete the array wineList
  // const[wineList, setWineList]= useState([]);
  const [searchInput, setSearchInput] = useState("");

  const wineList = [
    {
      wine_id: 1,
      name: "Château Margaux",
      origin: "France",
      img_wine: "chemin/vers/image.jpg",
      description:
        "Un vin rouge exceptionnel avec des arômes de fruits rouges et une finale longue.",
    },
    {
      wine_id: 2,
      name: "Barolo",
      origin: "Italie",
      img_wine: "chemin/vers/image.jpg",
      description:
        "Un vin rouge puissant et corsé, originaire de la région du Piémont en Italie.",
    },
  ];

  const searchListFilter = wineList.filter((element) => {
    if (searchInput.length > 0) {
      const propertyValue = element.firstname.toLowerCase();
      return propertyValue.includes(searchInput.toLowerCase());
    }
    return element;
  });

  return (
    <div>
      <SearchBar setSearchInput={setSearchInput} searchInput={searchInput} />
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
