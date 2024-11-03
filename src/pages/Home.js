// src/pages/Home.js
import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import ProfileCard from "../components/ProfileCard";
import "./Home.css";

function Home() {
  const users = useContext(UserContext); // Access data from context

  return (
    <div className="home">
      <h1>User Profiles</h1>
      <div className="profiles-grid">
        {users.map((user, index) => (
          <ProfileCard key={index} user={user} id={index} />
        ))}
      </div>
    </div>
  );
}

export default Home;
