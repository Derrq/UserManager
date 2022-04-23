import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
import "./App.css";
import AddUserForm from "./components/add-user.component";
import User from "./components/user.component";
import UsersList from "./components/users-list.component";

class App extends Component {
  

  render() {

    return(
    <Router>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            User Management App
          </Link>
        </nav>
        <div className="container mt-3">
          <Routes>
            <Route exact path="/" element={<UsersList/>} />
            <Route exact path="/add" element={<AddUserForm/>} />
            <Route path="/user/:id" element={<User/>} />
          </Routes>
        </div>

    </Router>
    
    ); }
}
export default App;