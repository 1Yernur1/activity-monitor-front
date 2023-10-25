import { auth } from "@/config/firbaseConfig";
import { UserCredential, onAuthStateChanged } from "firebase/auth";
import { ReactNode, createContext, useEffect, useState } from "react";

interface AuthContextModel {
  user?: string;
  setUser: (user: string) => void;
}
export const AuthContext = createContext<AuthContextModel>({
  user: undefined,
  setUser: () => {},
});

interface AuthProviderModel {
  children: ReactNode;
}
export const AuthProvider = ({ children }: AuthProviderModel) => {
  const [user, setUser] = useState<string | undefined>(undefined);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser?.uid);
    });
    return () => unsubscribe();
  }, [user]);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
