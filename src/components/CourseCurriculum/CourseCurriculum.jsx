import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import "./_CourseCurriculum.scss"

const CourseCurriculum = () => {

   const [lessons] = useState([
      {
         subject: "Html Introduction",
         expanded: true,
         videos: [
            { title: "What is HTML", duration: "22 min", preview: false },
            { title: "What is a Web page?", duration: "23 min", preview: false },
            { title: "Your First Web Page", duration: "26 min", preview: true },
            { title: "Brain Streak", duration: "39 min", preview: false },
         ]
      },
      {
         subject: "Your First webpage",
         expanded: false,
         videos: [
            { title: "Headings", duration: "22 min", preview: false },
            { title: "Paragraphs", duration: "23 min", preview: false },
            { title: "Emphasis and Strong Tag", duration: "26 min", preview: true },
            { title: "Brain Streak", duration: "39 min", preview: false },
            { title: "Live Preview Feature", duration: "39 min", preview: false },
         ]
      },
      {
         subject: "Some Special Tags",
         expanded: false,
         videos: [
            { title: "The paragraph tag", duration: "22 min", preview: false },
            { title: "The break tag", duration: "23 min", preview: true },
            { title: "Headings in HTML", duration: "26 min", preview: false },
            { title: "Bold, Italics Underline", duration: "39 min", preview: false },
         ]
      },
      {
         subject: "HTML Advanced level",
         expanded: false,
         videos: [
            { title: "Something to Ponder", duration: "22 min", preview: false },
            { title: "Tables", duration: "23 min", preview: false },
            { title: "HTML Entities", duration: "26 min", preview: true },
            { title: "HTML Iframes", duration: "26 min", preview: false },
            { title: "Some important things", duration: "39 min", preview: false },
         ]
      }

   ])

   return (
      <ul className="course-curriculum uk-accordion">
         {lessons.map((lesson, index) => (
            <li
               onClick={() => { lesson.expanded = !lesson.expanded }}
               className={`${lesson.expanded ? 'uk-open' : ''} mb-3`}
               key={index}
            >
               <Link className="uk-accordion-title" to="#" > {lesson.subject}</Link>
               <div className={`uk-accordion-content ${lesson.expanded ? 'expanded' : ''}`}>
                  <ul className='course-curriculum-list'>
                     {lesson.videos.map((video, vi) => (
                        <li key={vi}>
                           {video.title}
                           {video.preview &&
                              <Link to="#trailer-modal" className="uk-toggle">Preview</Link>
                           }
                           <span>{video.duration}</span>
                        </li>
                     ))}
                  </ul>
               </div>
            </li >
         ))}
      </ul >
   )
}

export default CourseCurriculum
