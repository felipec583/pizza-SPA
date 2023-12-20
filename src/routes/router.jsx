import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Pizza from "../pages/Pizza";
import ErrorPage from "../pages/ErrorPage";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route element={<Home />} path="home"/>
      <Route path="carrito" element={<Cart />} />
      <Route path="pizza/:id" element={<Pizza />} />
    </Route>
  )
);

export default router;
