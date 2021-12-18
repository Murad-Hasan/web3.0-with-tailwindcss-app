import { useState } from "react";
import { useMoralis } from "react-moralis";

function SendMessage({ endOfMessagesRef }) {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (!message) return;
    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();
    messages
      .save({
        message: message,
        username: user.get("username"),
        ethAddress: user.get("ethAddress"),
      })
      .then((message) => {
        console.log("Message sent successfully", message);
      }),
      (error) => {
        console.log("Error sending message", error);
      };
    endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    setMessage("");
  };

  return (
    <form className="flex fixed bottom-10 bg-black w-11/12 opacity-80 px-6 py-4 rounded-full border-pink-600 border-2 max-w-2xl">
      <input
        className="flex-grow outline-none bg-transparent text-white placeholder-gray-500 pr-5"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={`Enter a Message ${user.getUsername()}...`}
      />
      <button
        onClick={sendMessage}
        type="submit"
        className="font-bold text-pink-500"
      >
        Send
      </button>
    </form>
  );
}

export default SendMessage;
