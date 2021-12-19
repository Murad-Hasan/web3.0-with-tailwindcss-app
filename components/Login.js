import Image from "next/image";
import React from "react";
import { useMoralis } from "react-moralis";
import Signup from "./Signup";

const Login = () => {
  const { authenticate, isAuthenticating } = useMoralis();
  return (
    <div className="relative text-white w-screen h-screen">
      <div className="flex flex-col absolute z-50 h-full w-full items-center justify-center space-y-2 backdrop-blur-sm">
        {/* LOGO for Metaverse */}
        <Image
          src="/unnamed.gif"
          className="object-cover rounded-full"
          height={200}
          width={200}
        />
        {/* Button For Login */}
        <button
          onClick={authenticate}
          className=" bg-pink-500 border-2 border-pink-800 py-4 px-4 rounded-lg hover:scale-105 transition duration-700 ease-in-out"
        >
          {isAuthenticating ? (
            <>
              <div className="flex items-center justify-center ">
                <div className="w-10 h-10 border-b-2 border-white rounded-full animate-spin"></div>
              </div>
              <p className="text-white animate-pulse">Authenticating...</p>
            </>
          ) : (
            <>
              <p className="text-xl font-bold">Login with</p>
              <div className="h-8 w-44 bg-no-repeat bg-[url('https://metamask.io/images/mm-logo.svg')] animate-pulse" />
            </>
          )}
        </button>
        <Signup />
      </div>
      <div className="">
        <Image
          src="/bg.jpg"
          layout="fill"
          className="object-cover lg:object-fill"
        />
      </div>
    </div>
  );
};

export default Login;
