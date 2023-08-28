import Image from "next/image";
import React from "react";

interface Props {
  state: boolean;
  onClick: (value: boolean) => void;
}

export default function Login({ state, onClick }: Props) {
  return (
    <div
      className={`${
        state ? "block" : "hidden"
      } fixed flex flex-col justify-center items-center w-screen h-screen backdrop-blur-sm bg-white/30 top-0 duration-150`}
    >
      <div tabIndex={-1} aria-hidden="true" className="mx-3">
        <div className="relative w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="crypto-modal"
              onClick={() => onClick(false)}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
                Login
              </h3>
            </div>
            <div className="p-6">
              <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                Connect with one of our available providers or start without any
                account.
              </p>
              <ul className="my-4 space-y-3">
                <li>
                  <a
                    href="#"
                    className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                  >
                    <Image
                      src={"/images/google.svg"}
                      alt="google"
                      width={16}
                      height={16}
                      className="hover:rotate-90 duration-150"
                    />
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Google
                    </span>

                    <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
                      Popular
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                  >
                    <Image
                      src={"/images/comet.png"}
                      alt="google"
                      width={16}
                      height={16}
                      className="hover:rotate-90 duration-150"
                    />
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Continue without an account.
                    </span>
                  </a>
                </li>
              </ul>
              <div>
                <a
                  href="#"
                  className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400"
                >
                  <svg
                    className="w-3 h-3 mr-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7.529 7.988a2.502 2.502 0 0 1 5 .191A2.441 2.441 0 0 1 10 10.582V12m-.01 3.008H10M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  Why do I need to connect with an account?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}