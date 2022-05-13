import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuth: false,
    token: '',
    user: '',
  });

  useEffect(() => {
    setAuth({
      isAuth: JSON.parse(localStorage.getItem('AUTH_TOKEN')) ? true : false,
      token: JSON.parse(localStorage.getItem('AUTH_TOKEN')),
      user: JSON.parse(localStorage.getItem('username')),
    });
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
