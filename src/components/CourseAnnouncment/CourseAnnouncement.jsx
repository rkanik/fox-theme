import React, { useState } from 'react'

import Avatar from "../../assets/images/avatars/avatar-2.jpg"

const Course = () => {

   const [user] = useState({
      name: "Stella Johnson",
      designation: "Instructor",
      postedAt: "1 year ago",
      thumbnail: Avatar,
      description: {
         title: "Nam liber tempor cum soluta nobis eleifend option congue",
         subtitles: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Ut wisi  enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."
         ]
      }
   })

   return (
      <>
         <h4>Announcement</h4>
         <div className="user-details-card">
            <div className="user-details-card-avatar">
               <img src={user.thumbnail} alt="Dummy profile avatar" />
            </div>
            <div className="user-details-card-name">
               {user.name} <span>{user.designation}<span>{user.postedAt}</span> </span>
            </div>
         </div>
         <article className="uk-article">
            <p className="lead">{user.description.title}</p>
            {user.description.subtitles.map((st, i) => (<p key={i}>{st}</p>))}
         </article>
      </>
   )
}

export default Course