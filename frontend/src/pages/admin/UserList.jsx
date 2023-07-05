import SearchBar from "../../components/admin/SearchBar";

function UserList() {
  const searchList = [
    { id: 1, lol: "Belgium", continent: "Europe" },
    { id: 2, lol: "India", continent: "Asia" },
    { id: 2, lol: "Japan", continent: "Asia" },
    { id: 3, lol: "Canada", continent: "North America" },
    { id: 4, lol: "Australia", continent: "Australasia" },
  ];

  const propertyName = "lol";

  const handleSearchListFilter = (filteredList) => {
    console.info(filteredList);
  };

  return (
    <SearchBar
      searchList={searchList}
      propertyName={propertyName}
      onSearchListFilter={handleSearchListFilter}
    />
  );
}
export default UserList;
