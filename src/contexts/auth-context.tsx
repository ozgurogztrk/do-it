import { createContext, useEffect, useState } from "react";
import { auth } from "src/utils/firebase-config";
import { PageLoader } from "src/components/page-loader";

// Create an authentication context
const AuthContext = createContext({} as any);

// Create a provider component for authentication context
type AuthContextProviderProps = {
  children: React.ReactNode;
};

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  // Create reactive variables for user and loading state
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  // Check the user authentication before the page loads
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
};

export { AuthContextProvider, AuthContext };
