// src/components/ProfileCard.js
import React from "react";
import { Link } from "react-router-dom";
import "./ProfileCard.css";

function ProfileCard({ user, id }) {
  return (
    <div className="profile-card">
      <img src={user.picture.medium} alt={`${user.name.first} ${user.name.last}`} />
      <h3>{user.name.first} {user.name.last}</h3>
      <p>{user.location.city}, {user.location.country}</p>
      <Link to={`/profile/${id}`} className="details-link">View Details</Link>
    </div>
  );
}

export default ProfileCard;
