import React, { useState } from 'react'
import { Link } from "react-router-dom"

// Style sheet
import "./_CourseFaq.scss"

const answer = "The primary goal of this quick start guide is to introduce you to Unreal Engine 4's (UE4) development environment. By the end of this guide, you'll know how to set up and develop C++ Projects in UE4.This guide shows you how to create a new Unreal Engine project, add a new C++ className to it,compile the project, and add an instance of a new className to your level.By the time you reach the end of this guide, you`ll be able to see your programmed Actor floating above a table in the level."

const CourseFaq = () => {

   const [faqs, setFaqs] = useState([
      {
         question: "Why this lesson?",
         answer: answer, expanded: true
      },
      {
         question: "What would i learn from this?",
         answer: answer, expanded: false
      },
      {
         question: "Some Special Tags",
         answer: answer, expanded: false
      },
      {
         question: "Your First webpage",
         answer: answer, expanded: false
      }
   ])

   const handleClick = index => {
      let newFaqs = faqs.map((f, i) => index === i ? { ...f, expanded: true } : { ...f, expanded: false })
      setFaqs(newFaqs)
   }

   return (
      <>
         <h4 className="my-4">Course Faq</h4>
         <ul className="course-faq uk-accordion">
            {faqs.map((faq, index) => (
               <li key={index} className={`${faq.expanded ? "uk-open" : ''}`}>
                  <Link
                     onClick={() => handleClick(index)}
                     className="uk-accordion-title" to="#"
                  >{faq.question}</Link>
                  <div className={`uk-accordion-content ${faq.expanded ? "expanded" : ''}`}>
                     <p>{faq.answer}</p>
                  </div>
               </li>
            ))}
         </ul >
      </>
   )
}

export default CourseFaq
