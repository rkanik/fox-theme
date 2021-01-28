// Imports
import React, { useState } from 'react'
import "./_MessagesDropdown.scss"

// Avatars
import Avatar1 from "../../assets/images/avatars/avatar-1.jpg"
import Avatar2 from "../../assets/images/avatars/avatar-2.jpg"
import Avatar3 from "../../assets/images/avatars/avatar-3.jpg"
import Avatar4 from "../../assets/images/avatars/avatar-4.jpg"

const MessagesDropdown = ({ show }) => {

   const [messages] = useState([
      {
         name: "Jonathan Madano",
         message: "Okay.. Thanks for The Answer I will be waiting for your...",
         sentAt: "2 hours ago",
         thumbnail: Avatar2
      },
      {
         name: "Stella Johnson",
         message: "Alex will explain you how to keep the HTML structure and all that...",
         sentAt: "7 hours ago",
         thumbnail: Avatar3
      },
      {
         name: "Alex Dolgove",
         message: "Alia Joseph just joined Messenger! Be the first to send a welcome message..",
         sentAt: "19 hours ago",
         thumbnail: Avatar1
      },
      {
         name: "Adrian Mohani",
         message: "Okay.. Thanks for The Answer I will be waiting for your...",
         sentAt: "Yesterday",
         thumbnail: Avatar4
      }
   ])

   return (
      <div className={`messages-dd dropdown-notifications uk-dropdown uk-animation-slide-bottom-small ${show ? 'uk-open' : ''}`}>
         <div className="dropdown-notifications-headline">
            <h4>Messages</h4>
            <a href="#">
               <i className="icon-feather-settings" uk-tooltip="title: Message settings ; pos: left"></i>
            </a>
         </div>
         <div className="dropdown-notifications-content">
            <ul className='messages'>
               {messages.map((message, index) => (
                  <li key={index} className={`${index == 0 ? 'notifications-not-read' : ''}`}>
                     <a href="#">
                        <span className="notification-avatar">
                           <img src={message.thumbnail} alt={message.name} />
                        </span>
                        <div className="notification-text notification-msg-text">
                           <strong>{message.name}</strong>
                           <p>{message.message}</p>
                           <span className="time-ago">{message.sentAt}</span>
                        </div>
                     </a>
                  </li>
               ))}
            </ul>
         </div>
         <div className="dropdown-notifications-footer">
            <a href="#">Sell all<i className="icon-line-awesome-long-arrow-right"></i> </a>
         </div>
      </div>
   )
}

export default MessagesDropdown
