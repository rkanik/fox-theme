// Imports
import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"

// Components
import CourseIntro from "../pages/CourseIntro/CourseIntro"

// Router
const Router = () => (
   <BrowserRouter >
      <Switch>
         {/* <Route path="/" component={Home} exact /> */}
         <Route path="/" exact component={CourseIntro} />
         {/* <Route path="/reference/horizontal/course-intro" exact component={CourseIntro} /> */}
         <Route path="*" component={NotFound} />
      </Switch>
   </BrowserRouter>
)

const NotFound = () => (
   <h1>Route not found</h1>
)
// const Home = () => (
//    <h1>Home</h1>
// )

export default Router