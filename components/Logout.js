import { useMoralis } from "react-moralis";

const Logout = () => {
  const { logout, isAuthenticating, user } = useMoralis();

  return (
    <div className="backdrop-sepia-0 bg-white/50 shadow-lg p-6 rounded-xl">
      <h1 className="text-xl text-center font-bold text-black mb-2">
        Welcome Dude, <br /> Your Wallet Address is: {user?.get("ethAddress")}
      </h1>
      <div className="relative">
        <button
          className="w-full bg-orange-600 p-4 rounded-xl hover:bg-orange-800 transition duration-500 ease-in"
          onClick={() => logout()}
          disabled={isAuthenticating}
        >
          Logout From METAVERSE
        </button>
      </div>
    </div>
  );
};

export default Logout;
