import { APP_NAME } from "@/constants";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="bg-background brightness-125 flex justify-between items-center p-3 w-full border-b border-purple-500/50 transition-all hover:border-purple-500/90">
      <Link href="/" className="flex items-center gap-x-2 font-bold">
        <h1 className="font-bold hidden md:block text-2xl text-gradient bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:brightness-75 ">
          {APP_NAME}
        </h1>
      </Link>
    </nav>
  );
}
