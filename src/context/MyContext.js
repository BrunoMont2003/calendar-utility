import React, { useState } from "react";

export const MyContext = React.createContext({});
export function MyContextProvider({ children }) {
  const [result, setResult] = useState(null);
  const [file, setFile] = useState(null);
  const [time, setTime] = useState(0);
  return (
    <MyContext.Provider
      value={{ result, setResult, file, setFile, time, setTime }}
    >
      {children}
    </MyContext.Provider>
  );
}
