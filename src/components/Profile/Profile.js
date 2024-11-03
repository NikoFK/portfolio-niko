import React from 'react';
import './Profile.css';
import profileImage from '../../assets/profile-image.png'; // Ubah ke .png

const Profile = () => {
  return (
    <section className="profile-section">
      <div className="profile-content">
        <div className="profile-image">
          <img src={profileImage} alt="Niko Fauza" />
        </div>
        <div className="profile-text">
          <h1>Niko Fauza Kurniawan</h1>
          <h2>Full Stack Developer & Filmmaker</h2>
          <p>
         I am a creative enthusiast deeply passionate about visual storytelling through cinematography, photography, and digital media production. Currently thriving as an LPDP Fully Funded Scholarship awardee and a resident at Asrama Mahasiswa Nusantara, I channel my curiosity into exploring emerging technologies like AI and blockchain, despite not being a coding expert. My adventures in traveling constantly fuel my creative vision, inspiring fresh perspectives in my projects. While my heart lies in visual arts, I actively pursue knowledge in investment markets, particularly in cryptocurrency and traditional trading instruments. I believe in continuous growth and embrace every opportunity to expand my horizons.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;