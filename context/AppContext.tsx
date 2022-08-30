import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";

export interface IUser {
  [key: string]: any;
}

const defaulAppState: { [key: string]: any } = {};

export const AppContext = React.createContext({});

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState<IUser>(defaulAppState);

  useEffect(() => {
    // const localUser = JSON.parse(localStorage.getItem("user") || "");
    // setUser(localUser);
  }, []);

  const updateUser = (info) => {
    const localUser = JSON.parse(localStorage.getItem("user") || "");
    const newUser = isEmpty(user)
      ? { ...localUser, ...info }
      : { ...user, ...info };

    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
  };

  const contextDefaultValue = { user, updateUser };

  return (
    <AppContext.Provider value={contextDefaultValue}>
      {children}
    </AppContext.Provider>
  );
};
