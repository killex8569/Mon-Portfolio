// components/TimelineItem.js
import React from "react";
import "./Timeline.css";

function TimelineItem({ title, date, description, position }) {
  return (
    <div className={`timeline-item ${position}`}>
      <div className="timeline-content">
        <span className="timeline-date">{date}</span>
        <h3>{title}</h3>
        {description && <p>{description}</p>}
      </div>

      <div className="timeline-marker">
        <div className="timeline-dot"></div>
      </div>
    </div>
  );
}

export default TimelineItem;