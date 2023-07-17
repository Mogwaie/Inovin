import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/admin/SearchBar";
import DisplayUserList from "../../components/admin/DisplayUserList";

function UserList() {
  const [searchInput, setSearchInput] = useState("");
  const [searchList, setSearchList] = useState([]);

  const navigateTo = useNavigate();

  const goToCreateUser = async () => {
    await navigateTo("/admin/create-user");
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/users`)
      .then((response) => {
        setSearchList(response.data);
      })
      .catch((error) => {
        console.error(error);
        navigateTo("/page-500");
      });
  }, []);

  // const searchList = [
  //   {
  //     user_id: 1,
  //     firstname: "John",
  //     lastname: "Doe",
  //     email: "john.doe@example.com",
  //     address: "123 Main St",
  //     zip_code: "12345",
  //     city: "New York",
  //     job: "Software Engineer",
  //     hashedPassword: "12345",
  //     is_admin: true,
  //   },
  //   {
  //     user_id: 2,
  //     firstname: "Lane",
  //     lastname: "Smith",
  //     email: "jane.smith@example.com",
  //     address: "456 Elm St",
  //     zip_code: "54321",
  //     city: "Los Angeles",
  //     job: "Product Manager",
  //     hashedPassword: "67890",
  //     is_admin: false,
  //   },
  //   {
  //     user_id: 3,
  //     firstname: "David",
  //     lastname: "Johnson",
  //     email: "david.johnson@example.com",
  //     address: "789 Oak St",
  //     zip_code: "54321",
  //     city: "Chicago",
  //     job: "Accountant",
  //     hashedPassword: "54321",
  //     is_admin: false,
  //   },
  //   {
  //     user_id: 4,
  //     firstname: "Sarah",
  //     lastname: "Williams",
  //     email: "sarah.williams@example.com",
  //     address: "321 Pine St",
  //     zip_code: "98765",
  //     city: "San Francisco",
  //     job: "Graphic Designer",
  //     hashedPassword: "98765",
  //     is_admin: false,
  //   },
  //   {
  //     user_id: 5,
  //     firstname: "Michael",
  //     lastname: "Brown",
  //     email: "michael.brown@example.com",
  //     address: "654 Cedar St",
  //     zip_code: "23456",
  //     city: "Seattle",
  //     job: "Project Manager",
  //     hashedPassword: "23456",
  //     is_admin: false,
  //   },
  // ];

  const searchListFilter = searchList.filter((element) => {
    if (searchInput.length > 0) {
      const propertyValue = element.firstname.toLowerCase();
      return propertyValue.includes(searchInput.toLowerCase());
    }
    return element;
  });

  return (
    <div className="user-list-page-container">
      <div className="search-bar-and-button-create">
        <SearchBar setSearchInput={setSearchInput} searchInput={searchInput} />
        <button
          type="button"
          className="secondary-button"
          onClick={goToCreateUser}
        >
          Créer
        </button>
      </div>
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
