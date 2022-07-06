import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Layout/Header";
import About from "./pages/About";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import SingleUser from "./pages/SingleUser";

function App() {
  return (
    <div>
      <Header />
      <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<SingleUser />} />
      </Route>
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
