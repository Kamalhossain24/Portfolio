import React from 'react';
import { Link } from 'react-router-dom'
import './Profile.css'


const Profile = () => {
  return <div className='profile-container'>
    <div className='profile-profile-parent'>
      <div className="profile-details">
        <div className="colz">

          <div className="colz-icon">
            <Link to=""><i class="fab fa-facebook-square"></i></Link>
            <Link to=""><i class="fab fa-instagram-square"></i></Link>
            <Link to=""><i class="fab fa-youtube-square"></i></Link>
            <Link to=""><i class="fab fa-linkedin"></i></Link>
          </div>

        </div>
        <div className="profile-detail-name">
          <span className="primary-text">{''}</span>
          Hello, i'm <span className="highlight-txt">Kamal</span>
        </div>
        <div className="profile-details-roles">
          <span className="primary-text">{''}
            <h1>{''}
            Mearn Stack devoloper
            </h1>
            <span className="proflie-role-tagline">
              Knock Of Building Web Applications With Front and Back End Operations!
            </span>
          </span>
        </div>
        <div className="profile-options">
          <button className="btn primary-btn">{''}know me</button>
          <a href="../../assets/img/kamal.jpeg" download><button className="btn highlighted-btn">Get CV</button></a>
        </div>
      </div>
      <div className="profile-picture">
        <div className="profile-picture-bg">

        </div>
      </div>
    </div>
  </div>;
};

export default Profile;
