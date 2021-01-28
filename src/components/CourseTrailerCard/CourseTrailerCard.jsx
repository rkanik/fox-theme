
// Imports
import React, { useState, useEffect } from 'react'
import CourseThumbnail from "../../assets/images/course/1.png"
//import TrailerDemoModal from "../Modals/TrailerDemoModal"
//import { useScrollPosition } from "../../hooks/UseScrollPosition"
import "./_CourseTrailerCard.scss"

const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

const CourseTrailerCard = () => {

   const [style, setStyle] = useState({
      position: "fixed",
      top: "424px",
      width: "373px",
      bottom: ''
   })


   useEffect(() => {
      window.addEventListener('scroll', () => {
         let { bottom } = document.querySelector(".page-content").getBoundingClientRect()
         let { height } = document.querySelector(".course-card-trailer").getBoundingClientRect()
         if (bottom < vh)
            setStyle({ ...style, top: bottom - (height / 2) + 'px' })
         else if (bottom > vh)
            //setStyle({ ...style, top: "", bottom: '0' })
            setStyle({ ...style, top: '424px', bottom: '' })
      })
   }, [])

   // useScrollPosition(() => {}, [])

   return (
      <div className="course-card-trailer" style={style}>
         <div className="course-thumbnail">
            <img src={CourseThumbnail} alt="" />
            <a className="play-button-trigger show" href="#trailer-modal" uk-toggle='true'> </a>
         </div>

         {/* <!-- video demo model --> */}
         {/* <TrailerDemoModal show={true} url="https://www.youtube.com/embed/nOCXXHGMezU" /> */}

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
                     <i className="uil-play"></i>Start</a>
               </div>
               <div>
                  <a href="course-resume.html" className="btn btn-danger uk-width-1-1 transition-3d-hover">
                     <i className="uil-heart"></i>Add wishlist </a>
               </div>
            </div>

            <p className="uk-text-bold">This Course Incluce </p>

            <div className="uk-child-width-1-2 uk-grid-small uk-grid">
               <div>
                  <span><i className="uil-youtube-alt"></i>28 hours video</span>
               </div>
               <div>
                  <span> <i className="uil-award"></i>Certificate </span>
               </div>
               <div className='mt-3'>
                  <span> <i className="uil-file-alt"></i>12 Article </span>
               </div>
               <div className='mt-3'>
                  <span> <i className="uil-video"></i>Watch Offline </span>
               </div>
               <div className='mt-3'>
                  <span> <i className="uil-award"></i>Certificate </span>
               </div>
               <div className='mt-3'>
                  <span> <i className="uil-clock-five"></i>Lifetime access </span>
               </div>
            </div>
         </div>
      </div>
   )
}

export default CourseTrailerCard