"use client";

import userAvatar from "@/assets/user.png";
import Image from "next/image";
import NavLink from "./NavLink";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm container mx-auto">
      {/* mobile menu */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            ☰
          </div>

          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href="/about-us">About</NavLink>
            </li>
            <li>
              <NavLink href="/career">Career</NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* desktop menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/about-us">About</NavLink>
          </li>
          <li>
            <NavLink href="/career">Career</NavLink>
          </li>
        </ul>
      </div>

      {/* right side */}
      <div className="navbar-end">
        <div className="w-10 mr-2">
          <Image
            src={userAvatar}
            alt="user Avatar"
            width={60}
            height={60}
            className="rounded-full"
          />
        </div>
        <button className="btn bg-[#403F3F] px-8 text-xl text-white">
          Login
        </button>
      </div>
    </div>
  );
};

export default NavBar;
