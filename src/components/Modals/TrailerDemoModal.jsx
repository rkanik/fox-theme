import React from 'react'
import "./_TrailerDemoModal.scss"

const TrailerDemoModal = ({ show, url }) => {
   return (
      <div className={`c-modal ${show ? 'show' : ''}`}>
         <div className="trailer-modal">
            <button className="uk-modal-close-default mt-2 uk-close mr-1" type="button"></button>
            <div className="video-responsive">
               <iframe
                  src={url}
                  className="uk-padding-remove uk-responsive"
                  uk-video="automute: true"
                  frameBorder="0"
                  allowFullScreen>
               </iframe>
            </div>
         </div>
         <div className='overlay' />
      </div>
   )
}

export default TrailerDemoModal
