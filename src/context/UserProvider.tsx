import {
  AuthError,
  User,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { firebaseAuth } from "../service/firebase.config";

export interface IAuthContext {
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  user?: User;
  loading: boolean;
  error?: Error | AuthError;
}

const initialAuthContext: IAuthContext = {
  login: () => {
    throw new Error("IAuthContext:login is not initiated");
  },
  logout: () => {
    throw new Error("IAuthContext:logout is not initiated");
  },
  loading: true,
};

const AuthContext = createContext(initialAuthContext);
AuthContext.displayName = "Auth";

type AuthProviderProps = {
  children: React.ReactNode;
};

function AuthProvider(props: AuthProviderProps) {
  const { children } = props;
  const [user, setUser] = useState<User | undefined>();
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      firebaseAuth,
      (currentUser: User) => {
        setUser(currentUser);
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    await signInWithEmailAndPassword(firebaseAuth, email, password);
    setLoading(true);
  }, []);

  const logout = useCallback(async () => {
    setUser(undefined);
    navigate("/logout");
    await signOut(firebaseAuth);
  }, [navigate]);

  const context = useMemo(
    () => ({
      user: user,
      login,
      logout,
      loading,
    }),
    [user, login, logout, loading]
  );

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
}

function useAuth(): IAuthContext {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
}

export { AuthProvider, AuthContext, useAuth };
