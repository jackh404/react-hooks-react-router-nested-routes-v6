import { useState, useEffect } from "react";
import UserCard from "../components/UserCard";
import { Outlet, useOutlet, useOutletContext } from "react-router-dom";

function Home() {
  
  const users = useOutletContext()
  const userList = users.map(user =><UserCard key={user.id} user={user}/>)

  return (
    <>
      <main>
        <h1>Home!</h1>
        <Outlet />
        {userList}
      </main>
    </>
  );
};

export default Home;