import { useState } from "react";
import SearchBar from "../../components/admin/SearchBar";
import DisplayUserList from "../../components/admin/DisplayUserList";

function UserList() {
  const [searchInput, setSearchInput] = useState("");

  const searchList = [
    {
      user_id: 1,
      firstname: "John",
      lastname: "Doe",
      email: "john.doe@example.com",
      address: "123 Main St",
      zip_code: "12345",
      city: "New York",
      job: "Software Engineer",
      hashedPassword: "12345",
      is_admin: true,
    },
    {
      user_id: 2,
      firstname: "Lane",
      lastname: "Smith",
      email: "jane.smith@example.com",
      address: "456 Elm St",
      zip_code: "54321",
      city: "Los Angeles",
      job: "Product Manager",
      hashedPassword: "67890",
      is_admin: false,
    },
  ];

  const searchListFilter = searchList.filter((element) => {
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
        {searchListFilter.map((user) => {
          return (
            <li key={user.user_id}>
              <DisplayUserList user={user} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default UserList;
