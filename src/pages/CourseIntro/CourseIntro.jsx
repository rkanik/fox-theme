import React, { useState } from 'react'

// Components
import CourseDetails from "../../components/CourseDetails/CourseDetails"
import TabSwitcher from "../../components/TabSwitcher/TabSwitcher"
import CourseTrailerCard from "../../components/CourseTrailerCard/CourseTrailerCard"
// Tab Components
import CourseCurriculum from "../../components/CourseCurriculum/CourseCurriculum"
import CourseDescription from "../../components/CourseDescription/CourseDescription"
import CourseFaq from "../../components/CourseFaq/CourseFaq"
import CourseAnnouncement from "../../components/CourseAnnouncment/CourseAnnouncement"

import CourseReviewSummary from "../../components/CourseReviewSummary/CourseReviewSummary"
import ReviewSummary from "../../components/CourseReviewSummary/ReviewSummary"
import CourseReviews from "../../components/CourseReviewSummary/CourseReviews"
import SubmitReview from "../../components/CourseReviewSummary/SubmitReview"

const CourseIntro = () => {

   const [activeTabClasses] = useState(['uk-active', 'uk-animation-slide-right-medium', 'uk-animation-slide-left-medium'])

   const [tabs, setTabs] = useState([
      { label: "Curriculum", active: true, classes: activeTabClasses.join(' ') },
      { label: "Overview", active: false, classes: '' },
      { label: "FAQ", active: false, classes: '' },
      { label: "Announcement", active: false, classes: '' },
      { label: "Reviews", active: false, classes: '' },
   ])


   const handleTabChange = index => {
      setTabs([...tabs].map((t, i) =>
         index === i ? {
            ...t, active: true, classes: activeTabClasses.join(" ")
         } : { ...t, active: false, classes: '' }
      ))
   }

   return (
      <div className="page-content">

         {/* Course Details */}
         <CourseDetailsWrapper>
            <CourseDetails />
            <TabSwitcher onChange={v => handleTabChange(v)} tabs={tabs} />
         </CourseDetailsWrapper>

         <TabContainer>
            <UkColumn width="2-3" className="uk-first-column">
               <ul id="course-intro-tab" className="uk-switcher mt-4">
                  <li className={tabs[0].classes} >
                     <CourseCurriculum />
                  </li>
                  <li className={tabs[1].classes} >
                     <CourseDescription />
                  </li>
                  <li className={tabs[2].classes} >
                     <CourseFaq />
                  </li>
                  <li className={tabs[3].classes} >
                     <CourseAnnouncement />
                  </li>
                  <li className={tabs[4].classes} >
                     <CourseReviewSummary>
                        <ReviewSummary />
                        <CourseReviews />
                        <SubmitReview />
                     </CourseReviewSummary>
                  </li>
               </ul>
            </UkColumn>
            <UkColumn width="1-3">
               <CourseTrailerCard />
            </UkColumn>
         </TabContainer>
      </div>
   )
}

const CourseDetailsWrapper = ({ children }) => (
   <div className="course-details-wrapper topic-1 uk-light">
      <div className="container p-sm-0">
         <div className='uk-grid'>
            <div className="uk-width-2-3@m">{children}</div>
         </div>
      </div>
   </div>
)

const TabContainer = ({ children }) => (
   <div className="container">
      <div className="uk-grid-large mt-4 uk-grid">
         {children}
      </div>
   </div>
)

const UkColumn = ({ children, width, className }) => (
   <div className={`uk-width-${width}@m ${className ? className : ''}`}>
      {children}
   </div>
)

export default CourseIntro