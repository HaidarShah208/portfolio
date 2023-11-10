import React, { useEffect, useState } from "react";
import { projectData } from "./Data";
import { projectNavs } from "./Data";
import WorkItems from "./workItems";


function Work() {
  const [item,setItem]=useState({name:'all'})
  const [projects,setProjects]=useState([])
  const [active,setActive]=useState(0)

  useEffect(()=>{
    if(item.name === 'all'){
      setProjects(projectData)
    }
    else{
      const newProjects= projectData.filter((project)=>{
        return project.category === item.name
      })
      setProjects(newProjects)
    }
  },[item])


  //handleClick
  const handleClick=(e,index)=>{
    setItem({name: e.target.textContent})
    setActive(index)
  }
  return (
    <div>
      <div className="work_filters">
        {projectNavs.map((item, index) => {
          return (
            <span onClick={(e)=>handleClick(e,index)} key={index} className={`${active === index?'active_item':''} work_item`}>
              {item.name}
            </span>
          );
        })}
        </div>

      <div className="row">
        <div className="col-lg-12 col-md-8">
        <div className="work_container  container grid">
          {projects.map((item) => {
            return <WorkItems item={item} key={item.id}/>
          })}
        </div>
        </div>
      </div>
      </div>
  );
}

export default Work;
