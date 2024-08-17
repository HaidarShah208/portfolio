import React, { useState } from 'react'
import './qualification.css'

function Qualification() {
    const[toggleState,setToggleState]=useState(1)

    const toggleTab =(index)=>{
      setToggleState(index)
    }
  return (

       <section className="services section" id='portfolio'>
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal Journey</span>

        <div className="qualification_container container">
            <div className="qualification_tabs">
                <div className=
                {toggleState===1?"qualification_button qualification_active button--flex":"qualification_button button--flex"}
                onClick={()=>toggleTab(1)}
                >
                    <i className="uil uil-graduation-cap qualification_icon"></i>
                    Education
                </div>
                <div className=
                {toggleState===2?"qualification_button qualification_active button--flex":"qualification_button button--flex"}
                onClick={()=>toggleTab(2)}
                >
                <i className="uil uil-briefcase-alt qualification_icon"></i>
                    Experience
                </div>
            </div>
            <div className="qualification_sections">
                <div className={toggleState ===1?"qualification_content qualification_content-active":"qualification_content"}>
                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">Middle</h3>
                            <span className="qualification_subtitle">Islamia Shcool Chiniot</span>
                            <div className="qualification_calendar">
                                <i className="uil uil-calendar-alt"></i>2015
                            </div>
                        </div>
                         <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                         </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>
                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                         </div>
                        <div>
                            <h3 className="qualification_title">Matric</h3>
                            <span className="qualification_subtitle">Islamia High School Chiniot</span>
                            <div className="qualification_calendar">
                                <i className="uil uil-calendar-alt"></i> 2015-2017
                            </div>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">ICS</h3>
                            <span className="qualification_subtitle">Government Collage Chiniot</span>
                            <div className="qualification_calendar">
                                <i className="uil uil-calendar-alt"></i> 2017-2019
                            </div>
                        </div>
                         <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                         </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>
                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                         </div>
                        <div>
                            <h3 className="qualification_title">BSCS</h3>
                            <span className="qualification_subtitle">Government Collage University Faislabad</span>
                            <div className="qualification_calendar">
                                <i className="uil uil-calendar-alt"></i> 2019-2023
                            </div>
                        </div>
                    </div>
                </div>


                <div  className={toggleState ===2 ? "qualification_content qualification_content-active":"qualification_content"}>
                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">HTML,CSS,<br /> Bootstrap</h3>
                            <div className="qualification_calendar">
                                <i className="uil uil-calendar-alt"></i>2019
                            </div>
                        </div>
                         <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                         </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>
                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                         </div>
                        <div>
                            <h3 className="qualification_title">Javascirpt</h3>
                            <div className="qualification_calendar">
                                <i className="uil uil-calendar-alt"></i>2021
                            </div>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">Firebase,<br/>MongoDb</h3>
                            <div className="qualification_calendar">
                                <i className="uil uil-calendar-alt"></i>2023
                            </div>
                        </div>
                         <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                         </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>
                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                         </div>
                        <div>
                            <h3 className="qualification_title">Reactjs,<br/>Nextjs</h3>
                            <div className="qualification_calendar">
                                <i className="uil uil-calendar-alt"></i>2023
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
  )
}

export default Qualification