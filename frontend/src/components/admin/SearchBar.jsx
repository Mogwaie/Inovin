import PropTypes from "prop-types";
import { useState } from "react";

export default function SearchBar({
  searchList,
  propertyName,
  onSearchListFilter,
}) {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value.toLowerCase());
  };

  const searchListFilter = searchList.filter((element) => {
    if (searchInput.length > 0) {
      const propertyValue = element[propertyName].toLowerCase();
      return propertyValue.includes(searchInput.toLowerCase());
    }
    return element;
  });

  onSearchListFilter(searchListFilter);

  return (
    <div className="search-bar-conatiner-admin">
      <input
        type="text"
        placeholder="Recherche"
        onChange={handleChange}
        value={searchInput}
      />
    </div>
  );
}

SearchBar.propTypes = {
  propertyName: PropTypes.string.isRequired,
  onSearchListFilter: PropTypes.func.isRequired,
  searchList: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};
