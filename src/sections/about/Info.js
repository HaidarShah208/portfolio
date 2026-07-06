import React from 'react'

function Info() {
  return (
    <div className="mb-8 grid w-full   gap-2 grid-cols-3   ">
      <div className="about_box min-w-0 w-full">
        <i className="bx bx-award about-icon"></i>
        <h3 className="about_title font-medium md:text-base text:[10px]">Experience</h3>
        <span className="about_subtitle">3 Years working</span>
      </div>
      <div className="about_box min-w-0 w-full">
        <i className="bx bxs-briefcase about-icon"></i>
        <h3 className="about_title">Completed</h3>
        <span className="about_subtitle">14+ Projects</span>
      </div>
      <div className="about_box col-span-2 min-w-0 w-full sm:col-span-1">
        <i className="bx bx-support about-icon"></i>
        <h3 className="about_title">Support</h3>
        <span className="about_subtitle">online 24/7</span>
      </div>
    </div>
  )
}

export default Info
