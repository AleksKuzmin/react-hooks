import { useState, createContext } from "react";
import User from "./User";
import Login from "./Login";

export const AppContext = createContext(null);

function ContextHook() {
  const [username, setUsername] = useState("");

  return (
    <AppContext.Provider value={{username, setUsername}}>
      <Login /> <User />
    </AppContext.Provider>
  );
}

export default ContextHook;
