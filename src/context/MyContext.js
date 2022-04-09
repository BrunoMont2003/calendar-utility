import React, { useState } from "react";

export const MyContext = React.createContext({});
export function MyContextProvider({ children }) {
  const [result, setResult] = useState([]);
  return (
    <MyContext.Provider value={{ result, setResult }}>
      {children}
    </MyContext.Provider>
  );
}
