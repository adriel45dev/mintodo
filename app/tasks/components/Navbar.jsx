"use client";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <header className="bg-slate-800 text-white rounded-lg shadow mx-8 my-4">
        <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
          <div id="logo">
            <Link href={"/tasks"}>
              <Image
                src={"/images/loading.gif"}
                alt="Minimalist TODO"
                width={24}
                height={24}
              />
            </Link>
          </div>

          <div>
            <Link
              href={"/"}
              className="focus:outline-none text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2 "
            >
              Logout
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
