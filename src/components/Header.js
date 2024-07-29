import { useState, useContext } from "react";
import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState("Login");

  const onlineStatus = useOnlineStatus();

  function changeLogin(e) {
    loggedIn === "Login" ? setLoggedIn("Logout") : setLoggedIn("Login");
  }

  const { loggedInUser } = useContext(UserContext);
  // console.log(data.loggedInUser);

  // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  return (
    <div className="w-full flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-100 lg:bg-green-100">
      <div className="logo-container">
        <img src={CDN_URL} className="w-56" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-0 list-none">
          <li className="px-4">
            Online Status: {onlineStatus === true ? "✅" : "🔴"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/cart">🛒({cartItems.length})</Link>
          </li>

          <button className="login" onClick={(e) => changeLogin(e)}>
            {loggedIn}
          </button>

          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
