import React, { createContext, useContext } from "react";

// Create a context
const AppContext = createContext();

// Create a provider component
const AppProvider = ({ children }) => {
  const userData = {
    name: "vinod",
    age: 28,
  };

  return (
    <AppContext.Provider value={userData}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
