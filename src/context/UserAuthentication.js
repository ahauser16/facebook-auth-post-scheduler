import { useLocation, Navigate } from "react-router-dom";
import { createContext, useContext, useReducer } from "react";

// DATA STORE
const initialState = { auth: false };

const authContext = createContext(initialState);

export function authReducer(state, action) {
  switch (action.type) {
    case "login":
      return { auth: true };
    case "logout":
      return { auth: false };
    default:
      throw new Error();
  }
}

// AUTH PROVIDER
export function AuthProvider({ children }) {
  const [authenticated, dispatch] = useReducer(authReducer, initialState);

  return (
    <authContext.Provider value={[authenticated, dispatch]}>
      {children}
    </authContext.Provider>
  );
}

//AUTH CONSUMER
export default function AuthConsumer() {
  return useContext(authContext);
}

// REQUIRE AUTH TO ACCESS PROTECTED ROUTES

export function RequireAuth({ children }) {
  const [authenticated] = AuthConsumer();
  const location = useLocation();
  return authenticated.auth === true ? (
    children
  ) : (
    <Navigate
      to={"/login"}
      replace
      state={{ path: location.pathname }}
    ></Navigate>
  );
}
