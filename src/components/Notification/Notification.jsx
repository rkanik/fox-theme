// Imports
import React from 'react'
import "./_NotificationDropDown.scss"

const Notification = ({ show }) => {
   return (
      <div className={`notify-dd dropdown-notifications uk-dropdown uk-animation-slide-bottom-small ${show ? 'uk-open' : ''}`}>
         <div className="dropdown-notifications-headline">
            <h4>Notifications </h4>
            <a href="#">
               <i className="icon-feather-settings" />
            </a>
         </div>
         <div className="dropdown-notifications-content" data-simplebar>
            <ul className='notify-ul'>
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
                        <br /> <span className="time-ago">12 hours ago </span>
                     </span>
                  </a>
               </li>
               <li>
                  <a href="#">
                     <span className="notification-icon btn btn-soft-success disabled">
                        <i className="icon-feather-star"></i></span>
                     <span className="notification-text">
                        <strong>Alex Dolgove</strong>Added New Review In Course
                         <span className="text-primary">Full Stack PHP Developer</span>
                        <br /> <span className="time-ago">19 hours ago </span>
                     </span>
                  </a>
               </li>
               <li className="notifications-not-read" >
                  <a href="#">
                     <span className="notification-icon btn btn-soft-danger disabled">
                        <i className="icon-feather-share-2"></i></span>
                     <span className="notification-text">
                        <strong>Jonathan Madano</strong>
                        Shared Your Discussion On Course
                        <span className="text-primary">Css Flex Box</span>
                        <br /><span className="time-ago">Yesterday</span>
                     </span>
                  </a>
               </li>
            </ul>
         </div>
      </div>
   )
}
export default Notification