"use client";
import { useState } from "react";

import Image from "next/image";
import SpinIcon from "../icons/spinIcon";



export const GoogleSignBTN = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const LoginwithGoogle = async () => {
    try {
      setIsLoading(true);
      //await signIn("google", { callbackUrl: "http://localhost:3000" });
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    } catch (error) {
      setIsLoading(false);
    } /* finally {
      setIsLoading(false);
    }  */
  };

  return (
    <button
      disabled={isLoading}
      onClick={LoginwithGoogle}
      className="my-5 px-5 py-2 font-title lg:text-lg flex w-full items-center justify-center rounded-md  bg-gray-500 text-white hover:bg-gray-400 transition-transform duration-300 ease-in-out transform hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-md"
    >
      {isLoading && <SpinIcon />}
      {!isLoading && <Image
        src={'/google-icon-2025.svg'}
        alt="Google Icon"
        width={24}
        height={24}
        className="mr-3"
      />}
      Google
    </button>
  );
};
