import { createContext, useEffect, useState } from "react";
import { auth } from "src/utils/firebase-config";
import PageLoader from "src/components/page-loader";

export const AuthContext = createContext({} as any);

export default function AuthContextProvider({ children }: any) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: any) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {!loading ? children : <PageLoader />}
    </AuthContext.Provider>
  );
}
