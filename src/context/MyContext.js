import React, { useState } from "react";

export const MyContext = React.createContext({});
export function MyContextProvider({ children }) {
  const [result, setResult] = useState(null);
  const [file, setFile] = useState(null);
  return (
    <MyContext.Provider value={{ result, setResult, file, setFile }}>
      {children}
    </MyContext.Provider>
  );
}
