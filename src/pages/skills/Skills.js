import React,{useState,useEffect,useCallback} from "react";
import "./skills.css";
import FrontEnd from "./FrontEnd";
import BackEnd from "./BackEnd";
import { motion,useAnimation } from 'framer-motion';

function Skills() {
  const controls = useAnimation();
  const [animated, setAnimated] = useState(false);

  const handleScroll = useCallback(() => {
    const offset = window.scrollY;
    const windowHeight = window.innerHeight;

    if (offset > windowHeight / 3 && !animated) {
      setAnimated(true);

      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1.2 },
      });
    }
  }, [animated, controls]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);
  return (
   
      <motion.section className="skills section" id="skills"  initial={{ opacity: 0, y: 50 }} animate={controls}>
        <h2 className="section__title">Skills</h2>
        <section className="section__subtitle">My technical Work</section>
      
        <div className="skills_container container grid">
          <FrontEnd />
          <BackEnd />
        </div>
      </motion.section>
   
  );
}

export default Skills;
