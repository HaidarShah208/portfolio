import React from "react";
import { journeyCards } from "../journeyData";

function JourneyTimeline() {
  return (
    <div
      className="journey-timeline pointer-events-none absolute bottom-0 left-3 top-[28%] hidden w-px bg-neutral-200 md:left-6 lg:block"
      aria-hidden="true"
    >
      <div className="absolute left-1/2 top-0 flex h-full -translate-x-1/2 flex-col justify-between py-4">
        {journeyCards.map((card, index) => (
          <span
            key={card.id}
            className="block h-3 w-3 -translate-x-[5px] rounded-full border-2 border-neutral-300 bg-white"
            data-step={index + 1}
          />
        ))}
      </div>
    </div>
  );
}

export default JourneyTimeline;
