import React, { useState } from "react";
import './services.css'

function Services() {

    const[toggleState,setToggleState]=useState(0)

    const toggleTab =(index)=>{
      setToggleState(index)
    }
  return (
    <>
      <div className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What i Offer</span>

        <div className="services_container container grid">
          <div className="services_content">
            <div>
              <i className="uil uil-web-grid services__icon"></i>
              <h3 className="services_title"> Custom   <br /> Development</h3>
            </div>

            <span className="services_button" onClick={()=>toggleTab(1)}>
              view more
              <i className="uil uil-arrow-right services_button-icon"></i>
            </span>

            <div className={toggleState === 1 ? "services_model active-model":"services_model" } >
                <div className="services_model-content">
                <i onClick={()=>toggleTab(0)} className="uil uil-times services_modal-close"></i>
                 <h3 className="services_modal-title">Custom Development</h3>
                 <p className="services_model-description">
                    Services with more than 2 year of experience. providing quality works to  clients and companies.
                 </p>
                 <ul className="services_model-services grid">
                 <li className="services_model-service"><i className="uil uil-check-circle services_modal-icon"></i>
                 <p className="services_model_info">I make special website that fit just for you.</p>
                 </li>
                 <li className="services_model-service"><i className="uil uil-check-circle services_modal-icon"></i>
                 <p className="services_model_info">I creates unique tools to help your work better</p>
                 </li>
                 <li className="services_model-service"><i className="uil uil-check-circle services_modal-icon"></i>
                 <p className="services_model_info">I build things that just for you and no one else.</p>
                 </li>
                 <li className="services_model-service"><i className="uil uil-check-circle services_modal-icon"></i>
                 <p className="services_model_info">I personalize your website with exclusive features.</p>
                 </li>
                 <li className="services_model-service"><i className="uil uil-check-circle services_modal-icon"></i>
                 <p className="services_model_info">I change and improve things on your website .</p>
                 </li>
                 </ul>
                </div>
            </div>
          </div>


          <div className="services_content">
            <div>
              <i className="uil uil-arrow services__icon"></i>
              <h3 className="services_title">Web <br /> Design</h3>
            </div>

            <span className="services_button" onClick={()=>toggleTab(2)}>
              view more
              <i className="uil uil-arrow-right services_button-icon"></i>
            </span>

            <div className={toggleState === 2 ? "services_model active-model":"services_model" }>
                <div className="services_model-content">
                <i onClick={()=>toggleTab(0)} className="uil uil-times services_modal-close"></i>
                 <h3 className="services_modal-title">Web  Design</h3>
                 <p className="services_model-description">
                    Services with more than 2 year of experience. providing quality works to  clients and companies.
                 </p>
                 <ul className="services_model-services grid">
                 <li className="services_model-service"><i className="uil uil-check-circle services_modal-icon"></i>
                 <p className="services_model_info">Craft intuitive, user-friendly online experiences.</p>
                 </li>
                 <li className="services_model-service"><i className="uil uil-check-circle services_modal-icon"></i>
                 <p className="services_model_info">Elevate online presence through creative design.</p>
                 </li>
                 <li className="services_model-service"><i className="uil uil-check-circle services_modal-icon"></i>
                 <p className="services_model_info">Create stunning websites with artistic flair.</p>
                 </li>
                 <li className="services_model-service"><i className="uil uil-check-circle services_modal-icon"></i>
                 <p className="services_model_info">I position your company brand</p>
                 </li>
                 <li className="services_model-service"><i className="uil uil-check-circle services_modal-icon"></i>
                 <p className="services_model_info">Design of products for companies</p>
                 </li>
                 </ul>
                </div>
            </div>
          </div>
          <div className="services_content">
            <div>
              <i className="uil uil-edit services__icon"></i>
              <h3 className="services_title">Web <br /> Development</h3>
            </div>

            <span className="services_button" onClick={()=>toggleTab(3)}>
              view more
              <i className="uil uil-arrow-right services_button-icon"></i>
            </span>

            <div className={toggleState === 3 ? "services_model active-model":"services_model" }>
                <div className="services_model-content">
                <i onClick={()=>toggleTab(0)} className="uil uil-times services_modal-close"></i>
                 <h3 className="services_modal-title">Web Development</h3>
                 <p className="services_model-description">
                    Services with more than 2 year of experience. providing quality works to  clients and companies.
                 </p>
                 <ul className="services_model-services grid">
                 <li className="services_model-service"><i className="uil uil-check-circle services_modal-icon"></i>
                 <p className="services_model_info">Make sure websites work smoothly.</p>
                 </li>
                 <li className="services_model-service"><i className="uil uil-check-circle services_modal-icon"></i>
                 <p className="services_model_info">Web page development</p>
                 </li>
                 <li className="services_model-service"><i className="uil uil-check-circle services_modal-icon"></i>
                 <p className="services_model_info">Write code for responsive websites.</p>
                 </li>
                 <li className="services_model-service"><i className="uil uil-check-circle services_modal-icon"></i>
                 <p className="services_model_info">Build strong online solutions.</p>
                 </li>
                 <li className="services_model-service"><i className="uil uil-check-circle services_modal-icon"></i>
                 <p className="services_model_info">Turn ideas into working websites.</p>
                 </li>
                 </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
