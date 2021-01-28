import React, { useState } from 'react'

const ReviewSummary = ({ mapStars }) => {

   const [rating] = useState({
      average: 4.8,
      details: [
         { star: 5, percentange: "95%" },
         { star: 4, percentange: "60%" },
         { star: 3, percentange: "85%" },
         { star: 2, percentange: "45%" },
         { star: 1, percentange: "25%" }
      ]
   })
   return (
      <>
         <div className="review-summary">
            <h4 className="review-summary-title">Student feedback</h4>
            <div className="review-summary-container">
               <div className="review-summary-avg">
                  <div className="avg-number">{rating.average}</div>
                  <div className="review-star">
                     <div className="star-rating">
                        {mapStars(rating.average)}
                     </div>
                  </div>
                  <span>Course Rating</span>
               </div>
               <div className="review-summary-rating">
                  {rating.details.map((d, i) => (
                     <div key={i} className="review-summary-rating-wrap">
                        <div className="review-bars">
                           <div className="full_bar">
                              <div className="bar_filler" style={{ width: d.percentange }}></div>
                           </div>
                        </div>
                        <div className="review-stars">
                           <div className="star-rating">
                              {mapStars(d.star, 5)}
                           </div>
                        </div>
                        <div className="review-avgs">{d.percentange}</div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </>
   )
}
export default ReviewSummary
