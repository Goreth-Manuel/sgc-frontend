import { createContext, useState, useEffect } from "react";
import {
  LOCAL_STORAGE_TOKEN_KEY,
  LocalStorage,
} from "../../utils/localStorage";

const initialValues = {
    isAuth: false,
};

export const AuthContext = createContext(initialValues);

export default function AuthContexPprovider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const token = LocalStorage.get(LOCAL_STORAGE_TOKEN_KEY);

    if (token) {
      setIsAuth(true);
    }
  }, []);

  return (
    <>
      <AuthContext.Provider
        values={{ isAuth, setIsAuth, userData, setUserData }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
}
