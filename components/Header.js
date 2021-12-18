import Image from "next/image";
import { useMoralis } from "react-moralis";
import { Avatar } from "./Avatar";
import ChangeUserName from "./ChangeUserName";

const Header = () => {
  const { user } = useMoralis();
  return (
    <div className="text-pink-500">
      <div className="">
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
          <Image
            src="/unnamed.gif"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <div>
          <div className="relative h-48 w-48 lg:mx-auto border-pink-500 border-8 rounded-full">
            <Avatar logoutOnPress />
          </div>

          <div className="text-center">
            <h1 className="text-3xl font-bold  mt-2">
              Welcome to Your Own Metaverse World
            </h1>
            <h2 className="text-4xl font-bold truncate">
              {user.get("username")}
            </h2>
          </div>
          <ChangeUserName/>
        </div>
      </div>
    </div>
  );
};

export default Header;
