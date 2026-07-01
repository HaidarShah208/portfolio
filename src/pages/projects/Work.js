import React, { useState, useCallback, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { projectData } from "./Data";
import WorkItems from "./workItems";

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

const getVisibleCount = () => {
  if (window.innerWidth <= 576) return 1;
  if (window.innerWidth <= 768) return 2;
  if (window.innerWidth <= 992) return 3;
  return 4;
};

function Work() {
  const projects = projectData;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(getVisibleCount);
  const [step, setStep] = useState(0);
  const viewportRef = useRef(null);

  const maxIndex = Math.max(0, projects.length - visibleCount);

  const measureStep = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const item = viewport.querySelector(".work_carousel_item");
    if (!item) return;
    const gap = parseFloat(getComputedStyle(viewport.querySelector(".work_carousel_track")).gap) || 20;
    setStep(item.offsetWidth + gap);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const count = getVisibleCount();
      setVisibleCount(count);
      setCurrentIndex((prev) => Math.min(prev, Math.max(0, projects.length - count)));
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [projects.length]);

  useEffect(() => {
    measureStep();
    window.addEventListener("resize", measureStep);
    return () => window.removeEventListener("resize", measureStep);
  }, [measureStep, visibleCount, projects.length]);

  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const paginate = useCallback(
    (direction) => {
      setCurrentIndex((prev) => {
        const next = prev + direction;
        if (next < 0) return maxIndex;
        if (next > maxIndex) return 0;
        return next;
      });
    },
    [maxIndex]
  );

  const goToSlide = (index) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  const totalPages = maxIndex + 1;

  return (
    <div>
      <div className="work_carousel_wrapper">
        <button
          className="work_carousel_btn work_carousel_btn--prev"
          onClick={() => paginate(-1)}
          aria-label="Previous projects"
          disabled={projects.length <= visibleCount}
        >
          <i className="bx bx-chevron-left work_carousel_icon"></i>
        </button>

        <div className="work_carousel_viewport" ref={viewportRef}>
          <motion.div
            className="work_carousel_track"
            drag={projects.length > visibleCount ? "x" : false}
            dragConstraints={{ left: -step * maxIndex, right: 0 }}
            dragElastic={0.1}
            animate={{ x: -currentIndex * step }}
            transition={{ type: "spring", stiffness: 280, damping: 32 }}
            onDragEnd={(_, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          >
            {projects.map((project) => (
              <div key={project.id} className="work_carousel_item">
                <WorkItems item={project} />
              </div>
            ))}
          </motion.div>
        </div>

        <button
          className="work_carousel_btn work_carousel_btn--next"
          onClick={() => paginate(1)}
          aria-label="Next projects"
          disabled={projects.length <= visibleCount}
        >
          <i className="bx bx-chevron-right work_carousel_icon"></i>
        </button>
      </div>

      {totalPages > 1 && (
        <div className="work_carousel_dots">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`work_carousel_dot ${
                index === currentIndex ? "work_carousel_dot--active" : ""
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Work;
