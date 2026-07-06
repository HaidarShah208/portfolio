import React from 'react'

function Info() {
  return (
    <div className="mb-8 grid w-full gap-2 grid-cols-3">
      <div className="about_box min-w-0 w-full">
        <i className="bx bx-award about-icon"></i>
        <h3 className="about_title font-medium text-[10px] md:text-base">Experience</h3>
        <span className="about_subtitle">3 Years working</span>
      </div>
      <div className="about_box min-w-0 w-full">
        <i className="bx bxs-briefcase about-icon"></i>
        <h3 className="about_title font-medium text-[10px] md:text-base">Completed</h3>
        <span className="about_subtitle">14+ Projects</span>
      </div>
      <div className="about_box min-w-0 w-full">
        <i className="bx bx-support about-icon"></i>
        <h3 className="about_title font-medium text-[10px] md:text-base">Support</h3>
        <span className="about_subtitle">online 24/7</span>
      </div>
    </div>
  )
}

export default Info
