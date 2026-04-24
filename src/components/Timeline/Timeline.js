// components/Timeline.js
import React, {useState, useEffect} from "react";
import TimelineItem from "./Timelineitem";
import "./Timeline.css";

function Timeline({ events }) {

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div className="timeline">
      {events.map((event, index) => (
        <TimelineItem
          key={event.id}
          title={event.title}
          date={event.date}
          description={event.description}
          position={windowSize.innerWidth >= 769 ? index % 2 === 0 ? "left" : "right" : "right"}
        />
      ))}
    </div>
  );
}

function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}

export default Timeline;