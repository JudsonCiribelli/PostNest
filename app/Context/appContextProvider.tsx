"use client";
import { useSession } from "next-auth/react";
import { ReactNode, useTransition } from "react";

import { AppContext } from "./appContext";

interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [isPending, startTransition] = useTransition();
  const { data } = useSession();
  return (
    <AppContext.Provider value={{ data, isPending, startTransition }}>
      {children}
    </AppContext.Provider>
  );
};
