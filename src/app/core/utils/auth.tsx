import { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "shared/hooks/useLocalStorage";



const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: any) => {

  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate()

  // call this function when you want to authenticate the user
  const login = async (user: string) => {
    setUser(user);
    navigate("/dashboard")
  };

  // call this function to sign out logged in user
  const logout = (): void => {
    setUser(null);
    navigate("/", { replace: true })
  };

  // Memoised (Cache) the value until the dependency change
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const value = useMemo(() => ({ user, login, logout }), [user])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};


export const useAuth = () => {
  return useContext(AuthContext)
}