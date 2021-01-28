// Imports
import React from 'react'
import "./_SettingsDropdown.scss"
import Avatar from "../../assets/images/avatars/avatar-2.jpg"

const SettingsDropdown = ({ show }) => {


   const changeTheme = () => {
      document.documentElement.classList.toggle('night-mode');
      if (document.documentElement.classList.contains('night-mode')) {
         return localStorage.setItem('gmtNightMode', true);
      }
      localStorage.removeItem('gmtNightMode');
   }

   return (
      <div className={`settings-dd dropdown-notifications uk-dropdown small uk-animation-slide-bottom-small ${show ? 'uk-open' : ''}`}>
         <a href="profile-1.html">
            <div className="dropdown-user-details">
               <div className="dropdown-user-avatar">
                  <img src={Avatar} alt="" />
               </div>
               <div className="dropdown-user-name">
                  Richard Ali <span>Students</span>
               </div>
            </div>
         </a>
         <ul className="dropdown-user-menu">
            <li>
               <a href="#">
                  <i className="icon-material-outline-dashboard"></i>
                  Dashboard
               </a>
            </li>
            <li><a href="#">
               <i className="icon-feather-bookmark"></i>Bookmark</a>
            </li>
            <li><a href="profile-edit.html">
               <i className="icon-feather-settings"></i>Account Settings</a>
            </li>
            <li><a href="#" style={{ color: "#62d76b" }}>
               <i className="icon-feather-star"></i>Upgrade To Premium</a>
            </li>
            <li>
               <a onClick={changeTheme} href="#" id="night-mode" className="btn-night-mode">
                  <i className="icon-feather-moon"></i>
                  Night mode
                  <span className="btn-night-mode-switch" >
                     <span className="uk-switch-button" />
                  </span>
               </a>
            </li>
            <li className="menu-divider" />
            <li><a href="#">
               <i className="icon-feather-help-circle"></i>Help</a>
            </li>
            <li><a href="page-login.html">
               <i className="icon-feather-log-out"></i>Sing Out</a>
            </li>
         </ul>
      </div>
   )
}

export default SettingsDropdown
