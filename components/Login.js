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
          src="https://i.postimg.cc/mghJ4hTh/compleat-capman-4x.jpg"
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
        <Image
          src="https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/U7POE55VLJA3RNSBIDQYZN4AZU.png"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Login;
