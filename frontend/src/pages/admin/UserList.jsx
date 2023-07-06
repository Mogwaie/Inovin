import { useState } from "react";
import SearchBar from "../../components/admin/SearchBar";
import DisplayUserList from "./DisplayUserList";

function UserList() {
  const [searchInput, setSearchInput] = useState("");

  const searchList = [
    { id: 1, lol: "Belgium", continent: "Europe" },
    { id: 2, lol: "India", continent: "Asia" },
    { id: 2, lol: "Japan", continent: "Asia" },
    { id: 3, lol: "Canada", continent: "North America" },
    { id: 4, lol: "Australia", continent: "Australasia" },
  ];

  const propertyName = "lol";

  const searchListFilter = searchList.filter((element) => {
    if (searchInput.length > 0) {
      const propertyValue = element[propertyName].toLowerCase();
      return propertyValue.includes(searchInput.toLowerCase());
    }
    return element;
  });

  return (
    <div>
      <SearchBar setSearchInput={setSearchInput} searchInput={searchInput} />
      <ul>
        {searchListFilter.map((user) => {
          return (
            <li key={user.id}>
              <DisplayUserList country={user} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default UserList;
