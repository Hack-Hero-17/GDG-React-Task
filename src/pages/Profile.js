// src/pages/Profile.js
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../UserContext";
import ProfileDetail from "../components/ProfileDetail";
import "./Profile.css";

function Profile() {
  const { id } = useParams();
  const users = useContext(UserContext); // Access data from context

  const user = users[id]; // Find the user by the index

  if (!user) return <p>Profile not found</p>;

  return (
    <div className="profile-page">
      <h1>Profile Details</h1>
      <ProfileDetail user={user} />
    </div>
  );
}

export default Profile;
