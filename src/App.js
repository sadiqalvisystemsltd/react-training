import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import './Header/header'
import Header from './Header/header';
import Home from './Home/home';
import React from 'react';
import Login from './Login/login';
import Signup from './Signup/signup';
import { BrowserRouter as Router,Routes, Route, useNavigate } from "react-router-dom";
import BlogInfo from './blog/bloginfo';
import CryptoExchangeViewer from './Crypto/exchange-dashboard';
import { Provider } from 'react-redux';
import store from './redux/store';
import TransferCoins from './Crypto/transfer-coins';

function App() {
  const [currentPage, setCurrentPage] = React.useState("login");
  const [loggedIn, setLoggedIn] = React.useState(false);
  const navigate = useNavigate();
  const updateCurrentPage = (title) => {
    setCurrentPage(title)
  }
  const [currentUsers, setCurrentUsers] = React.useState([]);

  const addUser = (username, password) => {
    for (var i = 0; i < currentUsers.length; i++) {
          if (currentUsers[i].name == username) {
              return "USERNAME ALREADY EXISTS"
          }
    }
    setCurrentUsers([...currentUsers, {"name": username, "password": password}])
  };

  const login = (username, password) => {
    for (var i = 0; i < currentUsers.length; i++) {
      if (currentUsers[i].name == username && currentUsers[i].password ==  password) {
          return "SUCCESS"
      }
    }
    return "FAILURE"
  };

  const logout = () => {
    setLoggedIn(false);
    navigate("/");
  }

  const onLoginSignupSuccess = () => {
    setLoggedIn(true);
    navigate("/");
  }
  return (
    <div className="App" id="myappelement">
      <Provider store={store}>
      <Header className="App-header" titleChangeHandler = {updateCurrentPage} loggedIn={loggedIn} logout={logout}/>
      <Routes>
          <Route path="/" element={loggedIn ? <Home currentUsers={currentUsers}/> : <p>Please log in or signup</p>} />
          <Route path="login" element={<Login onLoginHandler={login} onLoginSignupSuccess={onLoginSignupSuccess} />} />
          <Route path="signup" element={<Signup onSignupSubmitHandler={addUser}  onLoginSignupSuccess={onLoginSignupSuccess} />} />
          <Route path="blog" element={<BlogInfo />} />
          <Route path="crypto-dashboard" element={<CryptoExchangeViewer />} />
          <Route path="transfer-coins" element={<TransferCoins />} />
      </Routes>
      </Provider>
    </div>
  );
}

export default App;
