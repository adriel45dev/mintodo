"use client";
import Image from "next/image";
import Link from "next/link";
import Login from "./Login";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

export default function Navbar() {
  const [dropDownLogin, setDropDownLogin] = useState(false);

  return (
    <>
      {dropDownLogin && (
        <Login state={dropDownLogin} onClick={setDropDownLogin} />
      )}
      <header className="bg-slate-800 text-white rounded-lg shadow mx-8 my-4">
        <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
          <div id="logo">
            <Link href={"/"}>
              <Image
                src={"/images/loading.gif"}
                alt="Minimalist TODO"
                width={24}
                height={24}
              />
            </Link>
          </div>

          <div id="user">
            <button
              type="button"
              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2 "
              onClick={() => setDropDownLogin(true)}
            >
              Login
            </button>

            {false && <button>Profile</button>}
          </div>
        </nav>
      </header>
    </>
  );
}
