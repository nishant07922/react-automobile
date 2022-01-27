import React,{useState , useCallback} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Index  from './user/pages/Index';
import Cart from './user/pages/Cart';
import Update from './user/pages/UpdatePlace';
import Header from './shared/components/Navigation/Header';
import AdminIndex from './user/pages/AdminIndex';
import LoginUser from './user/pages/LoginUser';
import RegisterUser from './user/pages/RegisterUser';
import UserEdit from './user/pages/UserEdit';
import { AuthContext } from './shared/context/auth-context';

const App = () => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggedInAsAdmin, setIsLoggedInAsAdmin] = useState(false);
  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);
  const adminLogin = useCallback(() => {
    setIsLoggedInAsAdmin(true);
    setIsLoggedIn(true);
  }, []);
  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);
  const  adminLogout= useCallback(() => {
    setIsLoggedInAsAdmin(false);
    setIsLoggedIn(false);
  }, []);
  
  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, isLoggedInAsAdmin: isLoggedInAsAdmin, login: login,adminLogin: adminLogin, logout: logout,adminLogout: adminLogout }}
    >
    <Router>
    <Header></Header>
    <Switch>
    
    <Route path="/" exact>
      <Index />
    </Route>
    <Route path="/cart" exact>
      <Cart />
    </Route>
    <Route path="/login" exact>
      <LoginUser />
    </Route>
    <Route path="/register" exact>
      <RegisterUser />
    </Route>
    <Route path="/useredit/:userId" exact>
      <UserEdit />
    </Route>
    <Route path="/admin" exact>
      <AdminIndex />
    </Route>
    <Route path="/update/:placeId" exact>
      <Update />
    </Route>
    
    <Redirect to="/" />
  </Switch>
  </Router>
  </AuthContext.Provider>
  );
};

export default App;
