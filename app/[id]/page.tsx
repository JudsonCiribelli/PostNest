"use client";
import { useContext } from "react";

import { AppContext } from "../Context/appContext";

const UserPage = () => {
  const { data } = useContext(AppContext);
  if (!data) {
    return <h1>Carregando</h1>;
  }
  return (
    <div>
      <h1>{data.user?.name}</h1>
      <h2>{data.user?.email}</h2>
    </div>
  );
};

export default UserPage;
