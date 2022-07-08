import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Layout/Header";
import About from "./pages/About";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import SingleUser from "./pages/SingleUser";
import { withAuthenticator, Button, Heading } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useEffect } from "react";

function App({ signOut, user }) {
  console.log('user', user)
  useEffect(() => {
    if (user) {
      localStorage.setItem("username", user.username);
    }
  }, []);
  return (
    <div>
      <Header signOut={signOut} user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<SingleUser />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default withAuthenticator(App);
