import React from 'react'

const CourseTrailerCard = () => {
   return (
      <div
         className="course-card-trailer uk-sticky uk-active uk-sticky-fixed"
         uk-sticky="top: 10 ;offset:105 ; media: @m ; bottom:true"
      >
         <div className="course-thumbnail" style={{ height: "12rem" }}>
            <img src="../assets/images/course/1.png" alt="" />
            <a className="play-button-trigger show" style={{ backgroundColor: "#D4D4D4" }} href="#trailer-modal" uk-toggle='true'> </a>
         </div>

         {/* <!-- video demo model --> */}
         <div id="trailer-modal" uk-modal='true' className="uk-modal">
            <div className="uk-modal-dialog">
               <button className="uk-modal-close-default mt-2  mr-1" type="button" uk-close='true'></button>
               <div className="uk-modal-header">
                  <h4> Trailer video </h4>
               </div>
               <div className="video-responsive">
                  <iframe src="https://www.youtube.com/embed/nOCXXHGMezU" className="uk-padding-remove"
                     uk-video="automute: true" frameBorder="0" allowFullScreen uk-responsive='true'></iframe>
               </div>

               <div className="uk-modal-body">
                  <h3>Build Responsive Websites </h3>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore
                  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident,
                  sunt
                                 in culpa qui officia deserunt mollit anim id est laborum.</p>
               </div>
            </div>
         </div>

         <div className="p-3">

            <p className="my-3 text-center">
               <span className="uk-h1"> $12.99 </span>
               <s className="uk-h4 text-muted"> $19.99 </s>
               <s className="uk-h6 ml-1 text-muted"> $32.99 </s>
            </p>

            <p> ! Hour Left This price</p>

            <div className="uk-child-width-1-2 uk-grid-small mb-4 uk-grid">
               <div className="uk-first-column">
                  <a href="course-resume.html" className="uk-width-1-1 btn btn-default transition-3d-hover">
                     <i className="uil-play"></i> Start </a>
               </div>
               <div>
                  <a href="course-resume.html" className="btn btn-danger uk-width-1-1 transition-3d-hover">
                     <i className="uil-heart"></i> Add wishlist </a>
               </div>
            </div>

            <p className="uk-text-bold"> This Course Incluce </p>

            <div className="uk-child-width-1-2 uk-grid-small uk-grid">
               <div>
                  <span><i className="uil-youtube-alt"></i> 28 hours video</span>
               </div>
               <div>
                  <span> <i className="uil-award"></i> Certificate </span>
               </div>
               <div className='mt-3'>
                  <span> <i className="uil-file-alt"></i> 12 Article </span>
               </div>
               <div className='mt-3'>
                  <span> <i className="uil-video"></i> Watch Offline </span>
               </div>
               <div className='mt-3'>
                  <span> <i className="uil-award"></i> Certificate </span>
               </div>
               <div className='mt-3'>
                  <span> <i className="uil-clock-five"></i> Lifetime access </span>
               </div>
            </div>
         </div>
      </div>
   )
}

export default CourseTrailerCard