import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";
import React from "react";
import Image from "next/image";

export default function Home() {
  const { data: session } = useSession();
  return (
    <>
      <Layout>
        <div className="text-blue-900 flex justify-between">
          <h2>
            Hello, <b>{session?.user?.name ?? "Guest"}</b>
          </h2>
          <div className="flex bg-gray-300 gap-1 text-black rounded-lg overflow-hidden">
            <Image src={session?.user?.image} alt="" className="w-6 h-6" />
            <span className="px-2">{session?.user?.name}</span>
          </div>
        </div>
      </Layout>
      <footer className="my-2 flex justify-center">
        <b>
          Powered by{" "}
          <a href="https://github.com/Reyti">
            <b>Reyti</b>
          </a>{" "}
          team
        </b>
        <b className="animate-bounce ml-1">😎</b>
      </footer>
    </>
  );
}
