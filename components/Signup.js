import { useState } from "react";
import { useMoralis } from "react-moralis";
import SignIn from "./SignIn";

function Signup() {
  const { signup } = useMoralis();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [showUp, setShowUp] = useState(true);

  return (
    <div>
      {showUp ? (
        <div className="flex flex-col items-center justify-center gap-4 mt-4 bg-cyan-600 p-6 rounded-xl">
          <input
            required
            type="text"
            className="bg-transparent border-gray-600 border-2 p-2 outline-none placeholder-slate-300 rounded-md hover:scale-105 transition duration-200"
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.currentTarget.value)}
          />
          <input
            required
            type="email"
            className="bg-transparent border-gray-600 border-2 p-2 outline-none placeholder-slate-300 rounded-md hover:scale-105 transition duration-200"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.currentTarget.value)}
          />
          <input
            required
            type="password"
            className="bg-transparent border-gray-600 border-2 p-2 outline-none placeholder-slate-300 rounded-md hover:scale-105 transition duration-200"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.currentTarget.value)}
          />
          <button
            className="bg-green-500 py-2 px-4 rounded-lg hover:scale-105 transition duration-200"
            onClick={() => signup(username, password, email)}
          >
            Sign up
          </button>
          <p>Already Have a account ?</p>
          <button
            className=" bg-red-800 py-2 px-5 rounded-md hover:scale-105 transition duration-200"
            onClick={() => setShowUp(false)}
          >
            Sign in
          </button>
        </div>
      ) : (
        <SignIn />
      )}
    </div>
  );
}

export default Signup;
