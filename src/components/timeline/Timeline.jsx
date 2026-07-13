import timelineData from "./TimelineData";

import TimelineScreen from "./TimelineScreen";

import firstPhoto from "../../assets/images/first.jpg";

import Polaroid from "./Polaroid";

import "../../styles/timeline/Timeline.css";

function Timeline() {
  return (
    <section className="timeline">

      <TimelineScreen title="One ordinary day..." />

      <TimelineScreen title={"became\nthe most important day\nof my life."} />

      <TimelineScreen
        title="We met"
        subtitle="And I didn't know that moment would change my life."
        image={firstPhoto}

        date ="10/9/2022❤️"
      />

      <TimelineScreen
        title="We met"
        subtitle="And I didn't know that moment would change my life."
        image={firstPhoto}

        date ="10/9/2022❤️"
      />
    </section>
  );
}

export default Timeline;
