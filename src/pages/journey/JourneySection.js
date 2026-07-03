import React, { useRef } from "react";
import { journeyCards } from "./journeyData";
import JourneyHeader from "./components/JourneyHeader";
import JourneyCard from "./components/JourneyCard";
import JourneyTimeline from "./components/JourneyTimeline";
import useJourneyScrollTrigger from "./hooks/useJourneyScrollTrigger";
import "./journey.css";

function JourneySection() {
  const sectionRef = useRef(null);
  const stackRef = useRef(null);
  const cardRefs = useRef([]);

  useJourneyScrollTrigger({
    sectionRef,
    stackRef,
    cardRefs,
  });

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="journey section relative overflow-visible !pb-[8rem] md:!pb-[10rem]"
      aria-labelledby="journey-heading"
    >
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="relative pl-0 lg:pl-16">
          <JourneyTimeline />
          <JourneyHeader />

          <div ref={stackRef} className="journey-stack">
            {journeyCards.map((card, index) => (
              <div
                key={card.id}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className="journey-stack__card"
                style={{ zIndex: 10 + index }}
              >
                <JourneyCard card={card} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default JourneySection;
