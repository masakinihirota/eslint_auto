import { type NextPage } from "next";
import { Head } from "next/document";
import Link from "next/link";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Link href="/">Home</Link>
    </>
  );
};

export default Home;
