// Imports
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// Styles
import "./_TabSwitcher.scss"

const TabSwitcher = ({ tabs, onChange }) => {

   // const [tabs, setTabs] = useState([
   //    { label: "Curriculum", active: true },
   //    { label: "Overview", active: false },
   //    { label: "FAQ", active: false },
   //    { label: "Announcement", active: false },
   //    { label: "Reviews", active: false },
   // ])

   // const handleClick = index => {
   //    let t = [...tabs]
   //    t = t.map((t, i) => index === i ? { ...t, active: true } : { ...t, active: false })
   //    setTabs(t)
   //    onChange(tabs[index].label)
   // }

   return (
      <nav className="responsive-tab style-5">
         <ul>
            {tabs.map((tab, index) => (
               <li
                  key={index}
                  className={tab.active ? "uk-active" : ''}
               >
                  <Link onClick={() => { onChange(index) }} to="#">{tab.label}</Link>
               </li>
            ))}
         </ul>
      </nav>
   )
}

export default TabSwitcher