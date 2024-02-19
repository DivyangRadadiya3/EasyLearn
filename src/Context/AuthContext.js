import { useState, useContext, createContext, useEffect } from "react";
// import {
//   signOut,
//   onAuthStateChanged,
// } from "firebase/auth";
// import { auth } from "../Firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  // const logOut = () => {
  //   signOut(auth);
  // };

  // useEffect(() => {
  //   onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
  //   });
  // }, []);
  return (
    <>
      <AuthContext.Provider value={{ logOut, user }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

// export const UserAuth = () => {
//   return useContext(AuthContext);
// };
