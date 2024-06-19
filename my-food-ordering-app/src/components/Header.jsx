import { useState } from "react";
import { LOGO_IMG } from "../../utils/image";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [logoutbtn, setLogoutbtn] = useState("Login");
  const handleLogout = () => {
    logoutbtn === "Login" ? setLogoutbtn("Logout") : setLogoutbtn("Login");
    console.log(logoutbtn);
  };

  const items = useSelector((store) => store.cart.items);
  console.log(items);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-yellow-200  shadow-md">
      <img src={LOGO_IMG} alt="Logo" className="m-3 w-28 rounded-full" />
      <div className="flex justify-between md:space-x-10">
        <ul className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-8 p-5">
          <Link to="/">
            <li className="text-lg font-semibold hover:text-yellow-700 transition duration-200">Home</li>
          </Link>
          <Link to="/about">
            <li className="text-lg font-semibold hover:text-yellow-700 transition duration-200">About Us</li>
          </Link>
          <Link to="/contact">
            <li className="text-lg font-semibold hover:text-yellow-700 transition duration-200">Contact</li>
          </Link>
          <Link to="/cart">
            <li className="text-lg font-bold hover:text-yellow-700 transition duration-200">
              Cart 🛒-{items.length}
            </li>
          </Link>
          <button
            className="bg-white text-yellow-700 font-bold py-2 px-4 rounded-lg shadow-md hover:bg-yellow-100 transition duration-200"
            onClick={handleLogout}
          >
            {logoutbtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
