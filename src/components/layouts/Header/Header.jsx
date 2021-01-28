// imports
import React, { useState } from 'react'
import Avatar from "../../../assets/images/avatars/avatar-2.jpg"

// Components
import HeaderNavigation from "../../HeaderNavigation/HeaderNavigation"
import LogoDark from "../../../assets/images/logo-dark.svg"
import Searchbar from "./SearchBar"

import NotificationDropdown from "../../Notification/Notification"
import CoursesDropdown from "../../CoursesDropdown/CoursesDropdown"
import MessagesDropdown from "../../MessagesDropdown/MessagesDropdown"
import SettingsDropdown from "../../Settings/SettingsDropdown"


const Header = () => {

   const [activeDropdown, setActiveDropdown] = useState(null)

   const handleClick = dd => {
      if (activeDropdown && activeDropdown !== dd) setActiveDropdown(dd)
      else if (!activeDropdown) setActiveDropdown(dd)
      else setActiveDropdown(null)
   }

   return (
      <header className="header header-horizontal">
         <div className="container">
            <nav uk-navbar='true' className="uk-navbar">
               <HeaderLeft >
                  <MenuToggler />
                  <BrandLogo />
                  <HeaderNavigation />
               </HeaderLeft>
               <HeaderRight>

                  <Searchbar />

                  {/* Icons */}
                  <IconWrapper
                     icon="uil-youtube-alt"
                     onClick={() => handleClick('COURSES')}
                  />
                  <IconWrapper
                     icon="uil-bell"
                     onClick={() => handleClick('NOTIFICATION')}
                     badge='4'
                  />
                  <IconWrapper
                     icon="uil-envelope-alt"
                     onClick={() => handleClick('MESSAGE')}
                     badge='1'
                  />
                  <IconWrapper
                     src={Avatar}
                     onClick={() => handleClick('SETTINGS')}
                     className="profile-icon"
                  />

                  {/* Dropdowns */}
                  <CoursesDropdown show={activeDropdown === 'COURSES'} />
                  <NotificationDropdown show={activeDropdown === 'NOTIFICATION'} />
                  <MessagesDropdown show={activeDropdown === 'MESSAGE'} />
                  <SettingsDropdown show={activeDropdown === 'SETTINGS'} />

               </HeaderRight>

            </nav>
         </div>
      </header >
   )
}

const IconWrapper = ({ icon, badge, src, className, onClick }) => (
   <a onClick={() => onClick()} to="#" className={`header-widget-icon ${className}`}>
      {icon && <i className={icon} />}
      {badge && <span>{badge}</span>}
      {src && <img src={src} className={`header-${className}`} alt="" />}
   </a>
)

const MenuToggler = () => (
   <span className="mmenu-trigger" >
      <button className="hamburger hamburger--collapse" type="button">
         <span className="hamburger-box">
            <span className="hamburger-inner" />
         </span>
      </button>
   </span >
)

const BrandLogo = () => (
   <a href="dashboard.html" className="logo" >
      <img src={LogoDark} alt="Brand logo" />
      <span> Courseplus</span>
   </a >
)
const HeaderLeft = ({ children }) => (
   <div className="uk-navbar-left">{children}</div>
)

const HeaderRight = ({ children }) => (
   <div className="uk-navbar-right">
      <div className="header-widget">
         {children}
      </div>
      <a className="uk-navbar-toggle uk-hidden@s" uk-toggle="target: .nav-overlay; animation: uk-animation-fade"
         href="#">
         <i className="uil-search icon-small"></i>
      </a>
      <a href="#" className="uil-user icon-small uk-hidden@s"
         uk-toggle="target: .header-widget ; cls: is-active">
      </a>
   </div>
)

export default Header
