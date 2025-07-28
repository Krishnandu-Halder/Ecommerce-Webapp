import React from "react";
import "../../index.css";
import { useState } from "react";
import logo from "../../assets/logo.png";
import cart_icon from "../../assets/cart_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const handleMenu = () => {
    setMenu(menu);
  };

  const [counter, setCounter] = useState(0);
  const handleCartAdder = () => {
    setCounter(counter + 1);
  };

  return (
    <div id="navbar" className="flex font-poppins justify-around p-[16px] shadow-sm">
      <div id="nav-logo" className="flex items-center gap-[10px]">
        <img
          src={logo}
          alt="Logo"
          className="w-[50px] h-[50px] cursor-pointer"
        />
        <p className="text-xl font-bold text-[#171717] cursor-pointer">
          SHOPPER
        </p>
      </div>
      <ul
        id="nav-menu"
        className="flex items-center text-[#626262] space-x-12 text-lg"
      >
        <li
          onClick={() => {
            setMenu("Shop");
          }}
          className="cursor-pointer flex flex-col items-center justify-center gap"
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>{" "}
          {menu === "Shop" ? (
            <hr className="border-none w-[80%] h-1 rounded-lg bg-[#FF4141]" />
          ) : (
            <></>
          )}
        </li>
        <li
          onClick={() => {
            setMenu("Men");
          }}
          className="cursor-pointer flex flex-col items-center justify-center gap"
        >
          <Link style={{ textDecoration: "none" }} to="/mens">
            Men
          </Link>{" "}
          {menu === "Men" ? (
            <hr className="border-none w-[80%] h-1 rounded-lg bg-[#FF4141]" />
          ) : (
            <></>
          )}
        </li>
        <li
          onClick={() => {
            setMenu("Women");
          }}
          className="cursor-pointer flex flex-col items-center justify-center gap"
        >
          <Link style={{ textDecoration: "none" }} to="/women">
            Women
          </Link>{" "}
          {menu === "Women" ? (
            <hr className="border-none w-[80%] h-1 rounded-lg bg-[#FF4141]" />
          ) : (
            <></>
          )}
        </li>
        <li
          onClick={() => {
            setMenu("Kids");
          }}
          className="cursor-pointer flex flex-col items-center justify-center gap"
        >
          <Link style={{ textDecoration: "none" }} to="/kids">
            Kids
          </Link>
          {menu === "Kids" ? (
            <hr className="border-none w-[80%] h-1 rounded-lg bg-[#FF4141]" />
          ) : (
            <></>
          )}
        </li>
      </ul>
      <div id="nav-login-cart" className="flex items-center space-x-4">
        <Link style={{ textDecoration: "none" }} to="/login">
          <button
            className={`border-solid active:bg-[#f3f3f3] text-[#515151] text-[20px] cursor-pointer  border-[1px] border-[#7a7a7a] px-4 py-1 rounded-[75px]`}
          >
            Login
          </button>
        </Link>
        <div>
          <Link style={{ textDecoration: "none" }} to="/cart ">
            <img
              src={cart_icon}
              onClick={handleCartAdder}
              alt="Cart "
              className="w-6 h-6"
            />
          </Link>
          <div
            id="counter"
            className="text-sm w-[25px] h-[25px] flex items-center bg-red-500 mt-[-39px] ml-[18px] rounded-[15px] justify-center text-white"
          >
            {counter}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
