import React from "react";

function JourneyCard({ card, index }) {
  return (
    <article
      className="journey-card relative w-full"
      aria-labelledby={`journey-card-title-${card.id}`}
    >
      <div className="journey-card__surface relative overflow-hidden rounded-[32px] border border-neutral-200 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] md:p-10 lg:p-12">
        <div className="journey-card__content relative z-[1]">
          <div className="mb-6 flex flex-wrap items-center gap-3 md:mb-8">
            <span className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs text-neutral-600">
              {card.employmentType}
            </span>
            <span className="text-xs text-neutral-500 md:text-sm">{card.duration}</span>
          </div>

          <h3
            id={`journey-card-title-${card.id}`}
            className="mb-2 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl lg:text-[2.75rem]"
          >
            {card.company}
          </h3>

          <p className="mb-6 text-base font-medium text-neutral-700 md:text-lg">
            {card.role}
          </p>

          <p className="mb-8 max-w-3xl text-sm leading-7 text-neutral-600 md:text-base md:leading-8">
            {card.description}
          </p>

          <ul className="grid gap-3 md:grid-cols-2 md:gap-4">
            {card.achievements.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm leading-6 text-neutral-600 md:text-[15px]"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-900" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default JourneyCard;
