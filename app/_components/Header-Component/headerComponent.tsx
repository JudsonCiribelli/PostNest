"use client";
import { LogInIcon } from "lucide-react";
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";
import { useContext } from "react";

import { AppContext } from "@/app/Context/appContext";

import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

const HeaderComponent = () => {
  const { data } = useContext(AppContext);
  return (
    <header className="flex items-center justify-between p-8">
      <div>
        <Link href="/">
          <h1 className="text-2xl font-semibold">Login</h1>
        </Link>
      </div>
      <nav>
        <div className="flex items-center justify-between">
          {!data?.user ? (
            <Button className="cursor-pointer gap-x-2" onClick={() => signIn()}>
              <LogInIcon />
              Sign in
            </Button>
          ) : (
            <div className="flex items-center gap-2">
              <Link href={`/`}>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
              </Link>
              <p>{data.user.name}</p>
              <Button onClick={() => signOut()} className="cursor-pointer">
                Sign Out
              </Button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;
