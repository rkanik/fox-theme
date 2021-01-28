import React, { useEffect } from 'react'

// Components
import Router from "../router/router"
import Header from "../components/layouts/Header/Header"
import Footer from "../components/layouts/Footer/Footer"

//Modals
//import TrailerDemoModal from "../components/Modals/TrailerDemoModal"

const App = () => {

   useEffect(() => {

      console.log('useEffect');

      if (!('localStorage' in window)) return;
      var nightMode = localStorage.getItem('gmtNightMode');

      console.log(nightMode);

      if (nightMode) {
         document.documentElement.className += ' night-mode';
      }
   })

   return (
      <>
         <div id="wrapper">
            <Header />
            <NavOverlay />
            <Router />
         </div>
         <Footer />
      </>
   )
}

// Overlay on mobile view
const NavOverlay = () => (
   <div className="nav-overlay uk-navbar-left uk-position-relative uk-flex-1 bg-grey uk-light p-2" hidden
      style={{ "zIndex": "10000" }}>
      <div className="uk-navbar-item uk-width-expand" style={{ "minHeight": "60px" }}>
         <form className="uk-search uk-search-navbar uk-width-1-1">
            <input className="uk-search-input" type="search" placeholder="Search..." autoFocus />
         </form>
      </div>
      <a
         className="uk-navbar-toggle"
         uk-close='true'
         uk-toggle="target: .nav-overlay; animation: uk-animation-fade"
         href="#"
      ></a>
   </div>
)

export default App