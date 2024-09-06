/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn({ email, password }) {

    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@food_explorer:user", JSON.stringify(user));
      localStorage.setItem("@food_explorer:token", token);

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({ user, token });

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Ocorreu um erro ao realizar o login.");
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@food_explorer:user");
    localStorage.removeItem("@food_explorer:token");
    api.defaults.headers.common["Authorization"] = null;
    setData({});
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("@food_explorer:user"));
    const token = localStorage.getItem("@food_explorer:token");

    if (user && token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({ user, token });
    }
  }, []);

  return (
    <AuthContext.Provider value={{
      signIn,
      signOut,
      user: data.user
    }}>
      {children}
    </AuthContext.Provider>
  )

}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}


export { AuthProvider, useAuth }
