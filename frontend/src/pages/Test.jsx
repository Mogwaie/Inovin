import { useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Test() {
  const user = useContext(UserContext);

  useEffect(() => {
    console.error(user);
  }, []);

  return <p>test</p>;
}
