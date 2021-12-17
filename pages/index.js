import Head from "next/head";
import { useMoralis } from "react-moralis";
import Login from "../components/Login";

export default function Home() {
  const { isAuthenticated } = useMoralis();
  if (!isAuthenticated) return <Login />;

  return (
    <div className="h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login />
    </div>
  );
}
