import { useState } from "react";

type UserAuth = {
  name: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<UserAuth>({} as UserAuth);
  const handleLogin = () => {
    setUser({
      name: "burhan",
      email: "bc@gmail.com",
    });
  };
  //   const handleLogout = () => {
  //     setUser(null);
  //   };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      {/* <button onClick={handleLogout}>Logout</button> */}
      <div>User name is {user.name}</div>
      <div>User email is {user.email}</div>
    </div>
  );
};
