import React, { useState } from 'react'

const SubmitReview = () => {

   const [review, setReview] = useState({
      name: "", email: "", comment: ''
   })

   const handleChange = ({ target: { name, value } }) => setReview({ ...review, [name]: value })
   const onSubmit = () => console.log(review)

   return (
      <div className="comments">
         <h3>Submit Review </h3>
         <ul>
            <li>
               <div className="comments-avatar"><img src="../assets/images/avatars/avatar-2.jpg" alt="" />
               </div>
               <div className="comment-content">
                  <div className="form uk-grid-small uk-grid">
                     <div className="uk-width-1-2@s">
                        <label className="uk-form-label">Name</label>
                        <input onChange={handleChange} value={review.name} className="uk-input" name='name' type="text" placeholder="Name" />
                     </div>
                     <div className="uk-width-1-2@s">
                        <label className="uk-form-label">Email</label>
                        <input onChange={handleChange} value={review.email} className="uk-input" name="email" type="text" placeholder="Email" />
                     </div>
                     <div className="uk-width-1-1@s mt-3">
                        <label className="uk-form-label">Comment</label>
                        <textarea onChange={handleChange} value={review.comment} name="comment" className="uk-textarea" placeholder="Enter Your Comments her..."
                           style={{ height: "160px" }}></textarea>
                     </div>
                     <div className="uk-grid-margin">
                        <button onClick={onSubmit} className="btn btn-default">Submit</button>
                     </div>
                  </div>

               </div>
            </li>
         </ul>
      </div>
   )
}
export default SubmitReview