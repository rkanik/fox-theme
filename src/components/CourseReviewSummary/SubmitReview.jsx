import React from 'react'

const SubmitReview = () => {
   return (
      <div className="comments">
         <h3>Submit Review </h3>
         <ul>
            <li>
               <div className="comments-avatar"><img src="../assets/images/avatars/avatar-2.jpg" alt="" />
               </div>
               <div className="comment-content">
                  <form className="uk-grid-small uk-grid">
                     <div className="uk-width-1-2@s">
                        <label className="uk-form-label">Name</label>
                        <input className="uk-input" type="text" placeholder="Name" />
                     </div>
                     <div className="uk-width-1-2@s">
                        <label className="uk-form-label">Email</label>
                        <input className="uk-input" type="text" placeholder="Email" />
                     </div>
                     <div className="uk-width-1-1@s">
                        <label className="uk-form-label">Comment</label>
                        <textarea className="uk-textarea" placeholder="Enter Your Comments her..."
                           style={{ height: "160px" }}></textarea>
                     </div>
                     <div className="uk-grid-margin">
                        <input type="submit" value="submit" className="btn btn-default" />
                     </div>
                  </form>

               </div>
            </li>
         </ul>
      </div>
   )
}
export default SubmitReview