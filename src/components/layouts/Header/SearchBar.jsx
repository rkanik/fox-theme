import React, { useState } from 'react'
import "./_SearchBar.scss"

const SearchInput = ({ items }) => {
   const [expanded, setExpanded] = useState(false)
   const handleClick = () => {
      setExpanded(!expanded);
   }
   return (
      <div className='searchbox' onClick={handleClick}>
         <input className="uk-search-input" type="search" placeholder="Search..." />
         <button className='btn-searchbox' ></button>
         <ul className={`dropdown-search-list ${expanded ? 'visible' : ''}`}>
            <li className="list-title">Recent Searches</li>
            {items.map((item, index) => (
               <li key={index}><a href={item.link}>{item.title}</a></li>
            ))}
         </ul>
      </div>
   )
}

const SearchBar = () => {
   const [searchedItems] = useState([
      { link: "#", title: "Ultimate Web Designer And Developer Course" },
      { link: "#", title: "The Complete Ruby on Rails Developer Course" },
      { link: "#", title: "Bootstrap 4 From Scratch With 5 Real Projects" },
      { link: "#", title: "The Complete 2020 Web Development Bootcamp" },
      { link: "#", title: "Bootstrap 4 From Scratch With 5 Real Projects" },
      { link: "#", title: "The Complete 2020 Web Development Bootcamp" },
   ])
   return (<>
      <SearchInput items={searchedItems}/>
   </>)
}
export default SearchBar