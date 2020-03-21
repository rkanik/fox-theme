import React, { useState } from 'react'

export const HeaderNavigation = () => {

   const [explore] = useState([
      { to: "course-card.html", text: 'JavaScript', icon: "icon-brand-js-square", color: "#f7df1e" },
      { to: "#", text: 'NodeJS', icon: "icon-brand-node-js", color: "green" },
      { to: "#", text: 'Angular', icon: "icon-brand-angular", color: "#dd0031" },
      { to: "#", text: 'CSS', icon: "icon-brand-css3-alt", color: "blue" },
      { to: "#", text: 'HTML5', icon: "icon-brand-html5", color: "#f0653f" },
      { to: "#", text: 'ReactJS', icon: "icon-brand-react", color: "#67fcef" },
      { to: "#", text: 'VueJS', icon: "icon-brand-vuejs", color: "green" },
      { to: "#", text: 'Python', icon: "icon-brand-python", color: "#b1b172" },
   ])

   return (
      <nav id="navigation">
         <ul id="responsive">
            <li><a href="#">Home</a> </li>
            <li><a href="#">Explore</a>
               <ul className="dropdown-nav nav-large nav-courses">
                  {explore.map((item, index) => (
                     <li key={index}>
                        <a href={item.to}>
                           <i className={item.icon} style={{ color: item.color }}></i>{item.text}
                        </a>
                     </li>
                  ))}
               </ul>
            </li>
            <li><a href="course-path.html" className="nav-active">Track</a> </li>
            <li><a href="book.html">Book</a> </li>
            <li><a href="blog-1.html">Blog</a> </li>
            <li><a href="#">Pages</a>
               <ul className="dropdown-nav">
                  <li><a href="page-pricing.html">Pricing</a> </li>
                  <li><a href="page-Privacy.html">Privacy</a></li>
                  <li><a href="page-term.html">Terms</a></li>
                  <li><a href="page-contact.html">Contact</a></li>
                  <li><a href="#">Account</a>
                     <ul className="dropdown-nav">
                        <li><a href="page-login.html">login</a></li>
                        <li><a href="page-register.html">register</a></li>
                        <li><a href="page-simple-login.html">Simple login</a></li>
                        <li><a href="page-simple-register.html">Simple register</a></li>
                     </ul>
                  </li>
                  <li><a href="#">Development</a>
                     <ul className="dropdown-nav">
                        <li><a href="page-elements.html">Elements</a></li>
                        <li><a href="page-components.html">Components</a></li>
                        <li><a href="page-icons.html">Icons</a></li>
                     </ul>
                  </li>
               </ul>
            </li>
         </ul>
      </nav>
   )
}

export default HeaderNavigation