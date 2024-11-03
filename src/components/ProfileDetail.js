// src/components/ProfileDetail.js
import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendarAlt, FaUser } from "react-icons/fa";
import "./ProfileDetail.css";

function ProfileDetail({ user }) {
  return (
    <div className="profile-detail">
      <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} className="profile-image" />
      <h2>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h2>
      
      <div className="profile-info">
        <div className="profile-item">
          <FaUser className="icon" />
          <p><strong>Gender:</strong> {user.gender}</p>
        </div>
        
        <div className="profile-item">
          <FaCalendarAlt className="icon" />
          <p><strong>Date of Birth:</strong> {new Date(user.dob.date).toLocaleDateString()}</p>
        </div>
        
        <div className="profile-item">
          <FaEnvelope className="icon" />
          <p><strong>Email:</strong> {user.email}</p>
        </div>

        <div className="profile-item">
          <FaPhone className="icon" />
          <p><strong>Phone:</strong> {user.phone}</p>
        </div>

        <div className="profile-item">
          <FaPhone className="icon" />
          <p><strong>Cell:</strong> {user.cell}</p>
        </div>

        <div className="profile-item">
          <FaMapMarkerAlt className="icon" />
          <p>
            <strong>Address:</strong> {user.location.street.number} {user.location.street.name}, {user.location.city}, {user.location.state}, {user.location.country}, {user.location.postcode}
          </p>
        </div>

        <div className="profile-item">
          <FaMapMarkerAlt className="icon" />
          <p>
            <strong>Timezone:</strong> {user.location.timezone.description} (Offset: {user.location.timezone.offset})
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetail;
