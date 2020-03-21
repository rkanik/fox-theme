import React, { useState, useEffect } from 'react'
import "./_SearchBar.scss"

const SearchInput = ({ onClick, items }) => {

   const [expanded, setExpanded] = useState(false)

   const handleClick = () => {
      console.log("btn clicked");
      if (!expanded) setExpanded(true); onClick(true)
   }

   // useEffect(() => {
   //    document.body.addEventListener('click', () => {
   //       console.log('body clicked', expanded);
   //       if (expanded) { setExpanded(false) }
   //    })
   // }, [expanded])

   return (
      <div className='searchbox' onClick={handleClick}>
         <input className="uk-search-input" type="search" placeholder="Search..." />
         <button className='btn-searchbox' ></button>
         <ul className={`dropdown-search-list ${expanded ? 'visible' : ''}`}>
            <li className="list-title"> Recent Searches</li>
            {items.map((item, index) => (
               <li key={index}><a href={item.link}>{item.title}</a></li>
            ))}
         </ul>
      </div>
   )
}

const RecentSearches = ({ children, show }) => {
   return (
      <div
         uk-dropdown="pos: top;mode:click;animation: uk-animation-slide-bottom-small"
         className={`dropdown-search uk-dropdown uk-dropdown-bottom-center ${show ? 'uk-open' : ''}`}
         style={show ? { left: '776.68px', top: '54.4999px' } : {}}
      >
         <div className="erh BR9 MIw"
            style={{ top: "-27px", position: "absolute", left: '24px', fill: 'currentColor', height: '24px', 'pointerEvents': 'none', color: '#f5f5f5' }}>
            <svg width="22" height="22">
               <path d="M0 24 L12 12 L24 24" />
            </svg>
         </div>
         {children}
      </div>
   )
}

const SearchedItems = ({ items }) => (
   <ul className="dropdown-search-list">
      <li className="list-title"> Recent Searches</li>
      {items.map((item, index) => (
         <li key={index}><a href={item.link}>{item.title}</a></li>
      ))}
   </ul>
)

const SearchBar = () => {

   const [showRecent, setShowRecent] = useState(false)

   const [searchedItems] = useState([
      { link: "#", title: "Ultimate Web Designer And Developer Course" },
      { link: "#", title: "The Complete Ruby on Rails Developer Course" },
      { link: "#", title: "Bootstrap 4 From Scratch With 5 Real Projects" },
      { link: "#", title: "The Complete 2020 Web Development Bootcamp" },
      { link: "#", title: "Bootstrap 4 From Scratch With 5 Real Projects" },
      { link: "#", title: "The Complete 2020 Web Development Bootcamp" },
   ])
   return (<>
      <SearchInput items={searchedItems} onClick={v => setShowRecent(v)} />
      {/* <RecentSearches show={showRecent}>
         <SearchedItems items={searchedItems} />
      </RecentSearches> */}
   </>)
}
export default SearchBar