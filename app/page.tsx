"use client";
import Image from "next/image";
import Login from "./components/Login";
import { useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

export default function Home() {
  const [dropDownLogin, setDropDownLogin] = useState(false);

  return (
    <>
      <Login state={dropDownLogin} onClick={setDropDownLogin} />
      <main className="flex flex-col justify-center items-center h-[calc(100vh-175px)] bg-slate-900 text-white">
        <div>
          <Image src="/images/loading.gif" alt="" width={32} height={32} />
        </div>

        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight  md:text-5xl lg:text-6xl text-white">
          Minimalist
          <span className="text-green-500">TODO.</span>{" "}
        </h1>
        <p className="text-lg font-normal text-gray-400 p-6 text-center md:max-w-2xl">
          Keep track of your daily tasks and goals with our simple, no-frills
          to-do list app. Minimalist TODO helps you focus on getting things done
          without the clutter and distractions.
        </p>

        <button
          className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:ring-green-900"
          onClick={() => setDropDownLogin(true)}
        >
          Ready to go
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
        {/* <Login state={false} onClick={(value:boolean)=>void}/> */}
      </main>
    </>
  );
}
