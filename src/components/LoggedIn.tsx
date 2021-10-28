import { useState } from "react";
export const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <>
      <button onClick={() => handleLogin()}>LogIn</button>
      <button
        onClick={() => {
          handleLogout();
        }}
      >
        Logout
      </button>
      <div>User is {isLoggedIn ? "LoggedIn" : "Logout"}</div>
    </>
  );
};
