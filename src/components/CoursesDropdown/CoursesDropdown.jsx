// Imports
import React, { useState } from 'react'
import "./_CoursesDropdown.scss"

// Thumbs
import _1 from "../../assets/images/course/1.png"

const ContextMenu = () => {
   const [options] = useState([
      { label: "Course Dashboard", icon: "material-outline-dashboard" },
      { label: "Resume Course", icon: "feather-video" },
      { label: "Course Dashboard", icon: "feather-x" },
   ])
   return (
      <div className="dropdown-option-nav uk-dropdown uk-dropdown-bottom-right" >
         <ul>{options.map((option, i) => (
            <li key={i}><span><i className={"icon-" + option.icon}></i>{option.label}</span></li>
         ))}</ul>
      </div >
   )
}

const MenuToggler = () => (
   <span className="btn-option">
      <i className="icon-feather-more-vertical" />
   </span>
)

const CoursesDropdown = ({ show }) => {

   const [courses] = useState([
      { title: "Ultimate Web Designer & Web Developer", current: 6, total: 35 },
      { title: "The Complete JavaScript Course Build Real Projects !", current: 10, total: 22 },
      { title: "Learn Angular Fundamentals From The Beginning", current: 9, total: 12 },
      { title: "Ultimate Web Designer & Web Developer", current: 1, total: 19 }
   ])

   return (
      <div className={`courses-dd dropdown-notifications my-courses-dropdown 
      uk-dropdown uk-animation-slide-bottom-small ${show ? 'uk-open' : ''}`}>
         {/* <!-- notivication header --> */}
         <div className="dropdown-notifications-headline" >
            <h4>Your Courses</h4>
            <a href="#">
               <i className="icon-feather-settings" uk-tooltip="title: Notifications settings ; pos: left" />
            </a>
         </div>

         {/* <!-- notification contents --> */}
         <div className="dropdown-notifications-content" data-simplebar >

            {/* <!-- notiviation list --> */}
            <ul>{courses.map((course, i) => (
               <li key={i} className="notifications-not-read">
                  <a href="#">
                     <span className="notification-image"><img src={_1} alt={course.title} /></span>
                     <span className="notification-text">
                        <span className="course-title">{course.title}</span>
                        <span className="course-number">{course.current}/{course.total} </span>
                        <span className="course-progressbar">
                           <span className="course-progressbar-filler" style={{ width: "95%" }}></span>
                        </span>
                     </span>
                     <MenuToggler />
                     <ContextMenu />
                  </a>
               </li>
            ))}</ul>
         </div>
         <div className="dropdown-notifications-footer">
            <a href="#"> sell all</a>
         </div>
      </div >
   )
}

export default CoursesDropdown
