import React, { useState } from 'react'
import { Link } from "react-router-dom"

const CourseDetails = ({ mapStars }) => {

   const [course] = useState({
      title: "Learn JavaScript From Scratch",
      description: "Master JavaScript with the most complete course! Projects Excellent course. we explain the core concepts in javascript that are usually glossed over in other courses",
      createdBy: "Jonathan Madano",
      enrolled: 1200,
      lastUpdated: "12/03/2020",
      rating: 4.5
   })

   return (
      <div className="course-details">
         <h1>{course.title}</h1>
         <p>{course.description}</p>
         <div className="course-details-info mt-4">
            <ul>
               <li>
                  <div className="star-rating">
                     <span className="avg">{course.rating}</span>
                     {mapStars(course.rating)}
                  </div>
               </li>
               <li><i className="icon-feather-users"></i>{course.enrolled}Enrolled</li>
            </ul>
         </div>

         <div className="course-details-info">
            <ul>
               <li>Created by <Link to="#">{course.createdBy}</Link></li>
               <li>Last updated {course.lastUpdated}</li>
            </ul>
         </div>
      </div>
   )
}

export default CourseDetails