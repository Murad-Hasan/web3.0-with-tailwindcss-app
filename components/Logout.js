import { useMoralis } from "react-moralis";

const Logout = () => {
  const { logout, isAuthenticating } = useMoralis();

  return (
    <div className="relative">
      <button
        className="w-full bg-orange-600 p-4 rounded-xl hover:bg-orange-800 transition duration-500 ease-in"
        onClick={() => logout()}
        disabled={isAuthenticating}
      >
        Logout From METAVARSE
      </button>
    </div>
  );
};

export default Logout;
