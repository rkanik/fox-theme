// Imports
import React, { useState } from 'react'
import Avatar from "../../assets/images/avatars/avatar-2.jpg"
import { Link } from "react-router-dom"

const CourseReviews = ({ mapStars }) => {

   const [review] = useState({
      total: 4610,
      reviews: [
         {
            name: 'Stella Johnson',
            userType: "Student",
            comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
            rating: 5,
            thumbnail: Avatar
         },
         {
            name: 'Adrian Mohani',
            userType: "Instructor",
            comment: "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.Nam liber tempor cum soluta nobis eleifend",
            rating: 4.5,
            thumbnail: Avatar
         },
         {
            name: 'Stella Johnson',
            userType: "Student",
            comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
            rating: 3,
            thumbnail: Avatar
         },
         {
            name: 'Adrian Mohani',
            userType: "Instructor",
            comment: "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.Nam liber tempor cum soluta nobis eleifend",
            rating: 5,
            thumbnail: Avatar
         }
      ]
   })

   return (
      <div className="comments">
         <h4>Reviews <span className="comments-amount">({review.total})</span> </h4>
         <ul>
            {review.reviews.map((r, i) => (
               <li key={i}>
                  <div className="comments-avatar"><img src={r.thumbnail} alt="User thumbnail" />
                  </div>
                  <div className="comment-content">
                     <div className="comment-by">{r.name}<span>{r.userType}</span>
                        <div className="comment-stars">
                           <div className="star-rating">{mapStars(r.rating, 5)}</div>
                        </div>
                     </div>
                     <p>{r.comment}</p>
                     <div className="comment-footer">
                        <span>Was this review helpful?</span>
                        <button>Yes</button>
                        <button>No</button>
                        <Link to="#"> Report</Link>
                     </div>
                  </div>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default CourseReviews
