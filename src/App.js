import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import './Header/header'
import Header from './Header/header';
import Home from './Home/home';
import React from 'react';
import Login from './Login/login';
import Signup from './Signup/signup';

function App() {
  const [currentPage, setCurrentPage] = React.useState("login");
  const [loggedIn, setLoggedIn] = React.useState(false);
  const updateCurrentPage = (title) => {
    setCurrentPage(title)
  }
  const [currentUsers, setCurrentUsers] = React.useState([]);
    React.useEffect(() => {
        setCurrentUsers([{"name": "alvi", "password": "test"}])
    }, []);

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
  }

  const onLoginSignupSuccess = () => {
    setLoggedIn(true);
    setCurrentPage("Home")
  }
  return (
    <div className="App">
      <Header className="App-header" titleChangeHandler = {updateCurrentPage} loggedIn={loggedIn} logout={logout}/>
      {loggedIn && currentPage == "Home" ? <Home currentUsers={currentUsers}/> : !loggedIn && currentPage == "Home" ? <p>Please log in or signup</p>: <></>}
      {currentPage == "Login" && <Login onLoginHandler={login} onLoginSignupSuccess={onLoginSignupSuccess} />}
      {currentPage == "Signup" && <Signup onSignupSubmitHandler={addUser}  onLoginSignupSuccess={onLoginSignupSuccess} />}
    </div>
  );
}

export default App;
