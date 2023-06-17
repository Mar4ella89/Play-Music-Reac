import { useContext, createContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(null);

  const loginIn = () => {
    setIsLoggedIn(true);
    setUsername('Marat');
  };

  const loginOut = () => {
    setIsLoggedIn(false);
    setUsername(null);
  };

  return (
    <UserContext.Provider value={{ loginIn, loginOut, isLoggedIn, username }}>
      {children}
    </UserContext.Provider>
  );
};
