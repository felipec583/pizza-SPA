import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
function App() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/home");
    }
  }, [navigate, location.pathname]);
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;

