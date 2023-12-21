import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function App() {
  const navigate = useNavigate();
/*   useEffect(() => navigate("/home"), []); */
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;

