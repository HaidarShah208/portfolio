import React from "react";
import { JOURNEY_SUBTITLE } from "../journeyData";

function JourneyHeader() {
  return (
    <header className="journey-header mb-10 text-center md:mb-14">
      <h2 id="journey-heading" className="section__title">
        My Journey
      </h2>
      <span className="section__subtitle !mb-0 max-w-xl mx-auto">
        {JOURNEY_SUBTITLE}
      </span>
    </header>
  );
}

export default JourneyHeader;
