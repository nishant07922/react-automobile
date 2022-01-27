import { createContext } from 'react';

export const AuthContext = createContext({
  isLoggedIn: false,
  isLoggedInAsAdmin: false,

  login: () => {},
  adminLogin: ()=> {},
  logout: () => {},
  adminLogout: ()=> {},
});