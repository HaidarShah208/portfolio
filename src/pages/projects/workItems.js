import React from 'react'

function WorkItems({item}) {
  return (
    <>
    <div className="work_card" key={item.id}>
        <img  className='work_img'src={item.img} alt="" />
        <h3 className="work_title">{item.title}</h3>
        <a href={item.link} className='work_button' target='_blank'>Live Demo
            <i className="bx bx-right-arrow-alt work_button-icon"></i>
        </a>
    </div>
    </>
  )
}

export default WorkItems