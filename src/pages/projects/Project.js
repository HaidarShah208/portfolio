import React from 'react'
import './project.css'
import Work from './Work'

function Project() {
  return (
    <>
    <section className="work work_container section" id='projects'>
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">Most recent work</span>
      <Work/>
    </section>
    </>
  )
}

export default Project