import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [categoriesData, setCategoriesData] = useState(null);

  return (
    <UserContext.Provider
      value={{
        loggedInUser,
        setLoggedInUser,
        categoriesData,
        setCategoriesData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
