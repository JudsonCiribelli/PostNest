"use client";

import { useContext } from "react";

import FormComponent from "./_components/Form-Component/formComponent";
import { Avatar, AvatarImage } from "./_components/ui/avatar";
import { AppContext } from "./Context/appContext";

const Home = () => {
  const { data } = useContext(AppContext);

  if (!data) {
    return <FormComponent />;
  }

  return (
    <div className="flex w-full flex-col items-center justify-center bg-white">
      {/* Card com informações do perfil */}
      <div className="my-10 flex w-[80%] justify-between gap-x-6 rounded-2xl border bg-black p-6">
        <div className="flex">
          <Avatar className="h-[200px] w-[200px]">
            <AvatarImage src="https://github.com/shadcn.png" />
          </Avatar>
          <div className="j m-5 flex flex-col items-start text-start">
            <div className="gap-5">
              <h1 className="text-2xl font-semibold">{data.user?.name}</h1>
              <h1 className="text-xl font-semibold">{data.user?.email}</h1>
              <h1>{data.user?.id}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
