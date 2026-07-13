import timelineData from "./TimelineData";

import firstPhoto from "../../assets/images/first.jpg";

import Polaroid from "./Polaroid";

import "../../styles/timeline/Timeline.css";

function Timeline() {

    return (

      <section className="timeline">

        {

            timelineData.map((item) => (

                <section
                    key={item.id}
                    className="timelineScreen"
                >

                    {

                        item.type === "text"

                        ?

                        <div className="textScreen">

                            <h1>
                                
                                {item.title}

                            </h1>

                        </div>

                        :

                        <div className="photoScreen">

                           <Polaroid
                           
                                image={firstPhoto}

                                caption = "10/9/2022 ❤️"

                           />
                                

                            

                            <h2>

                                {item.title}

                            </h2>

                            <p>

                                {item.subtitle}

                            </p>

                        </div>
                        
                    }

                </section>
            ))
        }

      </section>
        
    );
}

export default Timeline;