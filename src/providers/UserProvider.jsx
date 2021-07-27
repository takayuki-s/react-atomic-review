import { createContext } from "react";

export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;
  const contextName = "てけ";
  return (
    <UserContext.Provider value={{ contextName }}>
      { children }
    </UserContext.Provider>
  )
}