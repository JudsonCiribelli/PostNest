"use client";
import { useSession } from "next-auth/react";
import { ReactNode, useEffect, useState, useTransition } from "react";

import { AppContext } from "./appContext";

interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [isPending, startTransition] = useTransition();
  const [userId, setUserId] = useState("");
  const { data } = useSession();

  useEffect(() => {
    if (data?.user?.id) {
      setUserId(data.user.id); // Armazena o id do usuário na sessão
    }
  }, [data]);

  return (
    <AppContext.Provider value={{ data, isPending, startTransition, userId }}>
      {children}
    </AppContext.Provider>
  );
};
