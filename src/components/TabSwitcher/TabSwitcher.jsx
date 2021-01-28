// Imports
import React from 'react'
import { Link } from 'react-router-dom'

// Styles
import "./_TabSwitcher.scss"

const TabSwitcher = ({ tabs, onChange }) => {
   return (
      <nav className="responsive-tab style-5">
         <ul>{tabs.map((tab, index) => (
            <li key={index} className={tab.active ? "uk-active" : ''}>
               <Link onClick={() => { onChange(index) }} to="#">{tab.label}</Link>
            </li>
         ))}</ul>
      </nav>
   )
}

export default TabSwitcher