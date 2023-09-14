import React, { createContext, useContext, useState } from "react";

// Create an IPPT Context
const AppContext = createContext();

// Create a custom hook to access the IPPT Context
export const useAppContext = () => {
  return useContext(AppContext);
};

// Create a provider component to wrap your app with
export const AppContextProvider = ({ children }) => {
  const [ipptRecords, setIPPTRecords] = useState([]);

  // Function to add an IPPT record to the context
  const addIPPTRecord = (record) => {
    setIPPTRecords([...ipptRecords, record]);
  };

  return (
    <AppContext.Provider value={{ ipptRecords, addIPPTRecord }}>
      {children}
    </AppContext.Provider>
  );
};
