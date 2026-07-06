import React from "react";

function WorkItems({ item, index }) {
  const label = String(index + 1).padStart(2, "0");

  return (
    <article className="work_card">
      <span className="work_card_index">{label}</span>

      <div className="work_card_media">
        <img className="work_img" src={item.img} alt={item.title} loading="lazy" />
        <a
          href={item.link}
          className="work_card_overlay"
          target="_blank"
          rel="noreferrer"
          aria-label={`View ${item.title} project`}
        >
          <span className="work_card_overlay_text">View</span>
        </a>
      </div>

      <div className="work_card_body">
        <p className="work_category">{item.category}</p>
        <h3 className="work_title">{item.title}</h3>
      </div>
    </article>
  );
}

export default WorkItems;
