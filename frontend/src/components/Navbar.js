import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  return (
    <nav className="fixed top-0 right-0 left-0 h-12 shadow-sm bg-[#40414f] flex px-5 text-lg items-center space-x-2 text-white">
      <Link
        href="/"
        className={`${
          router.route === "/" && "bg-gray-500"
        } hover:bg-gray-500 px-2 rounded-md`}
      >
        Chat
      </Link>
      <Link
        href="/imageCreation"
        className={`${
          router.route === "/imageCreation" && "bg-gray-500"
        } hover:bg-gray-500 px-2 rounded-md`}
      >
        Image Creation
      </Link>
    </nav>
  );
}
