import Image from "next/image";
import { useMoralis } from "react-moralis";
import ReactTooltip from "react-tooltip";

export const Avatar = ({ username, logoutOnPress }) => {
  const { user, logout } = useMoralis();
  return (
    <>
      <Image
        className="rounded-full bg-black cursor-pointer"
        src={`https://avatars.dicebear.com/api/personas/${
          username || user.get("username")
        }.svg`}
        layout="fill"
        data-tip="Click to Logout"
        data-for="test"
        onClick={() => logoutOnPress && logout()}
      />
      <ReactTooltip id="test" place="right" type="dark" effect="solid" />
    </>
  );
};
