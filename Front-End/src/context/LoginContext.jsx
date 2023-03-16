import { createContext } from "react";

export const LoginContext = createContext();

export default function LoginProvider({ children }) {
  return <LoginContext.Provider>{children}</LoginContext.Provider>;
}
