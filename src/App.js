import React, { useState, useCallback } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Category from "./user/pages/Category";
import NewQuiz from "./category/pages/NewQuiz";
import UserQuiz from "./category/pages/UserQuiz";
import UpdateQuiz from "./category/pages/UpdateQuiz";
import Login from "./user/pages/Login"; // Import the Login component
import Signup from "./user/pages/Signup"; // Import the Signup component
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import { AuthContext } from "./shared/context/auth-context";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Category />
        </Route>
        <Route path="/:userId/category" exact>
          <UserQuiz />
        </Route>
        <Route path="/quiz/new" exact>
          <NewQuiz />
        </Route>
        <Route path="/quiz/:quizId">
          <UpdateQuiz />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Category />
        </Route>
        <Route path="/:userId/places" exact>
          <UserQuiz />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup"> {/* Add the signup route here */}
          <Signup />
        </Route>
        <Redirect to="/login" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <Router>
        <MainNavigation />
        <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
