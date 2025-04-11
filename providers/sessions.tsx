import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
const SessionsProvider = ({ children }: { children: ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default SessionsProvider;
