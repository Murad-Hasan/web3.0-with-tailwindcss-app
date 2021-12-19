import { useMoralis } from "react-moralis";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const ChangeUserName = () => {
  const { setUserData, isUserUpdating, userError, user } = useMoralis();
  const MySwal = withReactContent(Swal);
  const setUsername = () => {
    MySwal.fire({
      title: "Enter your new username",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Confirm",
      showLoaderOnConfirm: true,
      preConfirm: (username) => {
        if (username === "") {
          return MySwal.fire("Please enter a username");
        }
        return setUserData({
          username,
        });
      },
    });
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
