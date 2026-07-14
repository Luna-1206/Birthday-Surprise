import timelineData from "./TimelineData";

import TimelineScreen from "./TimelineScreen";

import Memories from "./Memories";

import memoryData from "./MemoryData";

import firstPhoto from "../../assets/images/first.jpg";

import Polaroid from "./Polaroid";

import "../../styles/timeline/Timeline.css";

function Timeline() {
  return (
    <section className="timeline">

        <div className="timelineDecoration blob1"></div>

        <div className="timelineDecoration blob2"></div>

        <div className="timelineDecoration blob3"></div>

      <TimelineScreen title="One ordinary day..." />

      <TimelineScreen title={"became\nthe most important day\nof my life."} />

      <Memories memories={memoryData} />
      
    </section>
  );
}

export default Timeline;
