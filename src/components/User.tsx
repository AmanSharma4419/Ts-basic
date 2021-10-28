import { useState } from "react";
type UserInfo = {
  name: string;
  email: string;
};
export const User = () => {
  const [user, setUserData] = useState<UserInfo | null>(null);
  const handleLogin = () => {
    setUserData({ name: "Aman", email: "Sharmaaman4419@gmail.com" });
  };
  const handleLogout = () => {
    setUserData(null);
  };
  return (
    <>
      <button onClick={() => handleLogin()}>GetInfo</button>
      <button
        onClick={() => {
          handleLogout();
        }}
      >
        Logout
      </button>
      {user ? (
        <>
          <div>User name {user?.name}</div>
          <div>User email {user?.email}</div>
        </>
      ) : (
        ""
      )}
    </>
  );
};
