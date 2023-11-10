import React from 'react'

function Info() {
  return (
    <div>
      <div className="about_info grid">
        <div className="about_box">
        <i class='bx bx-award about-icon' ></i>
          <h3 className="about_title">Experience</h3>
          <span className="about_subtitle">2 Years working</span>
        </div>
        <div className="about_box">
        <i class='bx bxs-briefcase about-icon' ></i>
          <h3 className="about_title">Completed</h3>
          <span className="about_subtitle">14+ Projects</span>
        </div>
        <div className="about_box">
        <i class='bx bx-support about-icon '></i>
          <h3 className="about_title">Support</h3>
          <span className="about_subtitle">online 24/7</span>
        </div>
      </div>
    </div>
  )
}

export default Info