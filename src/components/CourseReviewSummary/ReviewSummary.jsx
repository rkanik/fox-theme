import React from 'react'

const ReviewSummary = () => {
   return (
      <>
         <div className="review-summary">
            <h4 className="review-summary-title">Student feedback</h4>
            <div className="review-summary-container">
               <div className="review-summary-avg">
                  <div className="avg-number">4.8</div>
                  <div className="review-star">
                     <div className="star-rating"><span className="star"></span><span className="star"></span><span
                        className="star"></span><span className="star"></span><span className="star half"></span>
                     </div>
                  </div>
                  <span>Course Rating</span>
               </div>
               <div className="review-summary-rating">
                  <div className="review-summary-rating-wrap">
                     <div className="review-bars">
                        <div className="full_bar">
                           <div className="bar_filler" style={{ width: "95%" }}></div>
                        </div>
                     </div>
                     <div className="review-stars">
                        <div className="star-rating"><span className="star"></span><span
                           className="star"></span><span className="star"></span><span
                              className="star"></span><span className="star"></span></div>
                     </div>
                     <div className="review-avgs">95 %</div>
                  </div>
                  <div className="review-summary-rating-wrap">
                     <div className="review-bars">
                        <div className="full_bar">
                           <div className="bar_filler" style={{ width: "80%" }}></div>
                        </div>
                     </div>
                     <div className="review-stars">
                        <div className="star-rating"><span className="star"></span><span
                           className="star"></span><span className="star"></span><span
                              className="star"></span><span className="star empty"></span>
                        </div>
                     </div>
                     <div className="review-avgs">80 %</div>
                  </div>
                  <div className="review-summary-rating-wrap">
                     <div className="review-bars">
                        <div className="full_bar">
                           <div className="bar_filler" style={{ width: "60%" }}></div>
                        </div>
                     </div>
                     <div className="review-stars">
                        <div className="star-rating"><span className="star"></span><span
                           className="star"></span><span className="star"></span><span
                              className="star empty"></span><span className="star empty"></span>
                        </div>
                     </div>
                     <div className="review-avgs">60 %</div>
                  </div>
                  <div className="review-summary-rating-wrap">
                     <div className="review-bars">
                        <div className="full_bar">
                           <div className="bar_filler" style={{ width: "45%" }}></div>
                        </div>
                     </div>
                     <div className="review-stars">
                        <div className="star-rating"><span className="star"></span><span
                           className="star"></span><span className="star empty"></span><span
                              className="star empty"></span><span className="star empty"></span>
                        </div>
                     </div>
                     <div className="review-avgs">45 %</div>
                  </div>
                  <div className="review-summary-rating-wrap">
                     <div className="review-bars">
                        <div className="full_bar">
                           <div className="bar_filler" style={{ width: "25%" }}></div>
                        </div>
                     </div>
                     <div className="review-stars">
                        <div className="star-rating"><span className="star"></span><span
                           className="star empty"></span><span className="star empty"></span><span
                              className="star empty"></span><span className="star empty"></span>
                        </div>
                     </div>
                     <div className="review-avgs">25 % </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
export default ReviewSummary
