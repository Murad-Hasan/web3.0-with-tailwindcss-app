import { useMoralis } from "react-moralis";

const ChangeUserName = () => {
  const { setUserData, isUserUpdating, userError, user } = useMoralis();

  const setUsername = () => {
    const username = prompt(
      `Enter your new Username (Current: ${user.get("username")})`
    );
    if (!username) return;
    setUserData({ username });
  };

  return (
    <div className="text-mb absolute top-14 right-5 lg:top-5">
      <button
        disabled={isUserUpdating}
        onClick={setUsername}
        className="hover:text-gray-700 font-bold mr-2 p-2 text-black rounded-xl bg-green-500"
      >
        Edit Profile
      </button>
    </div>
  );
};

export default ChangeUserName;
