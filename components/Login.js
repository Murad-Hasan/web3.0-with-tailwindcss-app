import Image from "next/image";
import React from "react";
import { useMoralis } from "react-moralis";

const Login = () => {
  const { authenticate } = useMoralis();
  return (
    <div className="relative text-white">
      <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-2">
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
          className="bg-rose-500 py-4 px-4 rounded-lg hover:scale-105 transition duration-700 ease-in-out"
        >
          Login With METAVERSE
        </button>
      </div>
      <div className="w-full h-screen">
        <Image src="/bg.jpg" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
};

export default Login;
