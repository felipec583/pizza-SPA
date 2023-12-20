import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalProvider";
import { numberFormat } from "../utils/utils";
const NavBar = () => {
  const { total } = useContext(GlobalContext);

  return (
    <nav className="bg-nav-color text-white shadow-lg">
      <div className="container mx-auto">
        <div className="sm:flex justify-around items-center">
          <div className="flex items-center">
            <img src="/pizza.svg" alt="" className="pizza-img" />
            <Link to={"/home"} className="hover:text-red-500  font-bold text-2xl">
              Pizzería Mamma Mía!
            </Link>
          </div>
          <div className="cart-icon-container flex items-center gap-5">
            <Link to="/carrito">
              <img src="/cart.svg" alt="" />
            </Link>
            <p className="font-bold text-2xl">{numberFormat.format(total)}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
