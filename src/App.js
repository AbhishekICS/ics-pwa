import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Layout/Header";
import About from "./pages/About";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import SingleUser from "./pages/SingleUser";
import { gapi, loadClientAuth2 } from "gapi-script";
import { useEffect } from "react";
import { loadGapiInsideDOM } from "gapi-script";

function App() {
  const clientId =
    "263115005580-qc352fj605l9tv6lu9bo1c8ac85i8qfd.apps.googleusercontent.com";

  useEffect(() => {
    const start = async () => {
      const gapi = await loadGapiInsideDOM();
    };
    loadClientAuth2({ gapi, clientId, scopes: "" });
  }, []);

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
