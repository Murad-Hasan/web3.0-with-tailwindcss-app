import Image from "next/image";
import { useMoralis } from "react-moralis";
import { Avatar } from "./Avatar";
import ChangeUserName from "./ChangeUserName";

const Header = () => {
  const { user } = useMoralis();
  return (
    <div className="sticky top-0 p-5 z-50 backdrop-brightness-200 backdrop-blur-sm bg-white/30 shadow-md rounded-lg text-gray-900 border-b-2 border-pink-500">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid mt-4">
          <Image
            src="/unnamed.gif"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <div className="col-span-4">
          <div className="relative h-48 w-48 lg:mx-auto border-pink-500 border-8 rounded-full">
            <Avatar logoutOnPress />
          </div>

          <div className="lg:text-center text-left">
            <h1 className="lg:text-3xl text-2xl font-bold  mt-2">
              Welcome To Murad Metaverse world
            </h1>
            <h2 className="lg:text-4xl text-xl font-bold truncate">
              {user?.getUsername()}
            </h2>
          </div>
          <ChangeUserName />
        </div>
      </div>
    </div>
  );
};

export default Header;
