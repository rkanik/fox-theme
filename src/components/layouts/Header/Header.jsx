import React from 'react'

// Components
import HeaderNavigation from "../../HeaderNavigation/HeaderNavigation"
import LogoDark from "../../../assets/images/logo-dark.svg"
import Searchbar from "./SearchBar"

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

const Header = () => {
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
                  <span
                     className="icon-feather-x icon-small uk-hidden@s"
                     uk-toggle="target: .header-widget ; cls: is-active"
                  >
                  </span>
                  <a
                     href="#"
                     className="header-widget-icon"
                     uk-tooltip="title: My Courses ; pos: bottom ;offset:21"
                  >
                     <i className="uil-youtube-alt" />
                  </a>

                  {/* <RightOther /> */}
               </HeaderRight>

            </nav>
         </div>
      </header >
   )
}


const RightOther = () => (<>

   <div uk-dropdown="pos: top;mode:click;animation: uk-animation-slide-bottom-small"
      className="dropdown-notifications my-courses-dropdown">

      <div className="dropdown-notifications-headline">
         <h4>Your Courses</h4>
         <a href="#">
            <i className="icon-feather-settings"
               uk-tooltip="title: Notifications settings ; pos: left"></i>
         </a>
      </div>

      <div className="dropdown-notifications-content" data-simplebar>

         <ul>
            <li className="notifications-not-read">
               <a href="course-intro.html">
                  <span className="notification-image">
                     <img src="../assets/images/course/1.png" alt="" /> </span>
                  <span className="notification-text">
                     <span className="course-title">Ultimate Web Designer & Web Developer
                                       </span>
                     <span className="course-number">6/35 </span>
                     <span className="course-progressbar">
                        <span className="course-progressbar-filler" style={{ width: "95%" }}></span>
                     </span>
                  </span>

                  <span className="btn-option">
                     <i className="icon-feather-more-vertical"></i>
                  </span>
                  <div className="dropdown-option-nav" uk-dropdown="pos: bottom-right ;mode : hover">
                     <ul>
                        <li>
                           <span>
                              <i className="icon-material-outline-dashboard"></i>
                                                Course Dashboard</span>
                        </li>
                        <li>
                           <span>
                              <i className="icon-feather-video"></i>
                                                Resume Course</span>
                        </li>
                        <li>
                           <span>
                              <i className="icon-feather-x"></i>
                                                Remove Course</span>
                        </li>
                     </ul>
                  </div>
               </a>

            </li>
            <li>
               <a href="course-intro.html">
                  <span className="notification-image">
                     <img src="../assets/images/course/3.png" alt="" /> </span>
                  <span className="notification-text">
                     <span className="course-title">The Complete JavaScript Course Build Real
                                          Projects !</span>
                     <span className="course-number">6/35 </span>
                     <span className="course-progressbar">
                        <span className="course-progressbar-filler" style={{ width: "95%" }}></span>
                     </span>
                  </span>

                  <span className="btn-option">
                     <i className="icon-feather-more-vertical"></i>
                  </span>
                  <div className="dropdown-option-nav" uk-dropdown="pos: bottom-right ;mode : hover">
                     <ul>
                        <li>
                           <span>
                              <i className="icon-material-outline-dashboard"></i>
                                                Course Dashboard</span>
                        </li>
                        <li>
                           <span>
                              <i className="icon-feather-video"></i>
                                                Resume Course</span>
                        </li>
                        <li>
                           <span>
                              <i className="icon-feather-x"></i>
                                                Remove Course</span>
                        </li>
                     </ul>
                  </div>

               </a>
            </li>
            <li>
               <a href="course-intro.html">
                  <span className="notification-image">
                     <img src="../assets/images/course/2.png" alt="" /></span>
                  <span className="notification-text">
                     <span className="course-title">Learn Angular Fundamentals From The
                                          Beginning</span>
                     <span className="course-number">6/35 </span>
                     <span className="course-progressbar">
                        <span className="course-progressbar-filler" style={{ width: "95%" }}></span>
                     </span>
                  </span>

                  <span className="btn-option">
                     <i className="icon-feather-more-vertical"></i>
                  </span>
                  <div className="dropdown-option-nav" uk-dropdown="pos: bottom-right ;mode : hover">
                     <ul>
                        <li>
                           <span>
                              <i className="icon-material-outline-dashboard"></i>
                                                Course Dashboard</span>
                        </li>
                        <li>
                           <span>
                              <i className="icon-feather-video"></i>
                                                Resume Course</span>
                        </li>
                        <li>
                           <span>
                              <i className="icon-feather-x"></i>
                                                Remove Course</span>
                        </li>
                     </ul>
                  </div>
               </a>
            </li>
            <li>
               <a href="course-intro.html">
                  <span className="notification-image">
                     <img src="../assets/images/course/1.png" alt="" /> </span>
                  <span className="notification-text">
                     <span className="course-title">Ultimate Web Designer & Web Developer
                                       </span>
                     <span className="course-number">6/35 </span>
                     <span className="course-progressbar">
                        <span className="course-progressbar-filler" style={{ width: "95%" }}></span>
                     </span>
                  </span>

                  <span className="btn-option">
                     <i className="icon-feather-more-vertical"></i>
                  </span>
                  <div className="dropdown-option-nav" uk-dropdown="pos: top-right ;mode : hover">
                     <ul>
                        <li>
                           <span>
                              <i className="icon-material-outline-dashboard"></i>
                                                Course Dashboard</span>
                        </li>
                        <li>
                           <span>
                              <i className="icon-feather-video"></i>
                                                Resume Course</span>
                        </li>
                        <li>
                           <span>
                              <i className="icon-feather-x"></i>
                                                Remove Course</span>
                        </li>
                     </ul>
                  </div>
               </a>
            </li>
         </ul>

      </div>
      <div className="dropdown-notifications-footer">
         <a href="#"> sell all</a>
      </div>
   </div>


   <a href="#" className="header-widget-icon" uk-tooltip="title: Notificiation ; pos: bottom ;offset:21">
      <i className="uil-bell"></i>
      <span>4</span>
   </a>

   <div uk-dropdown="pos: top-right;mode:click ; animation: uk-animation-slide-bottom-small"
      className="dropdown-notifications">

      <div className="dropdown-notifications-headline">
         <h4>Notifications </h4>
         <a href="#">
            <i className="icon-feather-settings"
               uk-tooltip="title: Notifications settings ; pos: left"></i>
         </a>
      </div>

      <div className="dropdown-notifications-content" data-simplebar>

         <ul>
            <li className="notifications-not-read" >
               <a href="#">
                  <span className="notification-icon btn btn-soft-danger disabled">
                     <i className="icon-feather-thumbs-up"></i></span>
                  <span className="notification-text">
                     <strong>Adrian Mohani</strong> Like Your Comment On Course
                                              <span className="text-primary">Javascript Introduction </span>
                     <br />
                     <span className="time-ago"> 9 hours ago </span>
                  </span>
               </a>
            </li>
            <li>
               <a href="#">
                  <span className="notification-icon btn btn-soft-primary disabled">
                     <i className="icon-feather-message-circle"></i></span>
                  <span className="notification-text">
                     <strong>Stella Johnson</strong> Replay Your Comments in
                                       <span className="text-primary">Programming for Games</span>
                     <br /> <span className="time-ago"> 12 hours ago </span>
                  </span>
               </a>
            </li>
            <li>
               <a href="#">
                  <span className="notification-icon btn btn-soft-success disabled">
                     <i className="icon-feather-star"></i></span>
                  <span className="notification-text">
                     <strong>Alex Dolgove</strong> Added New Review In Course
                                       <span className="text-primary">Full Stack PHP Developer</span>
                     <br /> <span className="time-ago"> 19 hours ago </span>
                  </span>
               </a>
            </li>
            <li className="notifications-not-read" >
               <a href="#">
                  <span className="notification-icon btn btn-soft-danger disabled">
                     <i className="icon-feather-share-2"></i></span>
                  <span className="notification-text">
                     <strong>Jonathan Madano</strong> Shared Your Discussion On Course
                                       <span className="text-primary">Css Flex Box </span>
                     <br /> <span className="time-ago"> Yesterday </span>
                  </span>
               </a>
            </li>
         </ul>

      </div>


   </div>



   <a href="#" className="header-widget-icon" uk-tooltip="title: Message ; pos: bottom ;offset:21">
      <i className="uil-envelope-alt"></i>
      <span>1</span>
   </a>

   <div uk-dropdown=" pos: top-right;mode:click" className="dropdown-notifications">

      <div className="dropdown-notifications-headline">
         <h4>Messages</h4>
         <a href="#">
            <i className="icon-feather-settings" uk-tooltip="title: Message settings ; pos: left"></i>
         </a>
      </div>

      <div className="dropdown-notifications-content" data-simplebar>

         <ul>
            <li className="notifications-not-read">
               <a href="#">
                  <span className="notification-avatar">
                     <img src="../assets/images/avatars/avatar-2.jpg" alt="" />
                  </span>
                  <div className="notification-text notification-msg-text">
                     <strong>Jonathan Madano</strong>
                     <p>Okay.. Thanks for The Answer I will be waiting for your...</p>
                     <span className="time-ago"> 2 hours ago </span>
                  </div>
               </a>
            </li>
            <li>
               <a href="#">
                  <span className="notification-avatar">
                     <img src="../assets/images/avatars/avatar-3.jpg" alt="" />
                  </span>
                  <div className="notification-text notification-msg-text">
                     <strong>Stella Johnson</strong>
                     <p> Alex will explain you how to keep the HTML structure and all
                                          that...</p>
                     <span className="time-ago"> 7 hours ago </span>
                  </div>
               </a>
            </li>
            <li>
               <a href="#">
                  <span className="notification-avatar">
                     <img src="../assets/images/avatars/avatar-1.jpg" alt="" />
                  </span>
                  <div className="notification-text notification-msg-text">
                     <strong>Alex Dolgove</strong>
                     <p> Alia Joseph just joined Messenger! Be the first to send a
                                          welcome message..</p>
                     <span className="time-ago"> 19 hours ago </span>
                  </div>
               </a>
            </li>
            <li>
               <a href="#">
                  <span className="notification-avatar">
                     <img src="../assets/images/avatars/avatar-4.jpg" alt="" />
                  </span>
                  <div className="notification-text notification-msg-text">
                     <strong>Adrian Mohani</strong>
                     <p> Okay.. Thanks for The Answer I will be waiting for your...</p>
                     <span className="time-ago"> Yesterday </span>
                  </div>
               </a>
            </li>
         </ul>

      </div>
      <div className="dropdown-notifications-footer">
         <a href="#"> sell all <i className="icon-line-awesome-long-arrow-right"></i> </a>
      </div>
   </div>

   <a href="#" className="header-widget-icon profile-icon" >
      <img src="../assets/images/avatars/avatar-2.jpg" alt="" className="header-profile-icon" />
   </a>

   <div uk-dropdown="pos: top-right ;mode:click" className="dropdown-notifications small">
      <a href="profile-1.html">

         <div className="dropdown-user-details">
            <div className="dropdown-user-avatar">
               <img src="../assets/images/avatars/avatar-2.jpg" alt="" />
            </div>
            <div className="dropdown-user-name">
               Richard Ali <span>Students</span>
            </div>
         </div>

      </a>
      <ul className="dropdown-user-menu">
         <li>
            <a href="#">
               <i className="icon-material-outline-dashboard"></i> Dashboard</a>
         </li>
         <li><a href="#">
            <i className="icon-feather-bookmark"></i> Bookmark </a>
         </li>
         <li><a href="profile-edit.html">
            <i className="icon-feather-settings"></i> Account Settings</a>
         </li>
         <li><a href="#" style={{ color: "#62d76b" }}>
            <i className="icon-feather-star"></i> Upgrade To Premium</a>
         </li>
         <li>
            <a href="#" id="night-mode" className="btn-night-mode">
               <i className="icon-feather-moon"></i> Night mode
                              <span className="btn-night-mode-switch" >
                  <span className="uk-switch-button"></span>
               </span>
            </a>
         </li>
         <li className="menu-divider" />
         <li><a href="#">
            <i className="icon-feather-help-circle"></i> Help</a>
         </li>
         <li><a href="page-login.html">
            <i className="icon-feather-log-out"></i> Sing Out</a>
         </li>
      </ul>
   </div>
</>)



export default Header
