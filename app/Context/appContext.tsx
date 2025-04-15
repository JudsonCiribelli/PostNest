import { Session } from "next-auth"; // Tipo da sessão do NextAuth
import { createContext } from "react";

interface AppContextType {
  data: Session | null;
  isPending: boolean;
  startTransition: React.TransitionStartFunction;
  userId: string | null;
}

// Criar o contexto já com valor inicial
export const AppContext = createContext<AppContextType>({
  data: null,
  isPending: false,
  startTransition: () => {},
  userId: "",
});
