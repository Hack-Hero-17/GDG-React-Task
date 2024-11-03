// src/UserContext.js
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data once when the app loads
    axios
      .get("https://randomuser.me/api?results=5")
      .then((response) => setUsers(response.data.results))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <UserContext.Provider value={users}>
      {children}
    </UserContext.Provider>
  );
}
