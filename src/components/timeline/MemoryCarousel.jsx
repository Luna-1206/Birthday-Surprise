import { useState } from "react";

import "../../styles/timeline/MemoryCarousel.css";

function MemoryCarousel({ memories }) {

    const [current, setCurrent] = useState(0);

    const previous =
        (current - 1 + memories.length) % memories.length;

    const next =
        (current + 1) % memories.length;

    return (

        <div className="memoryCarousel">

            <div className="carouselWrapper">

                {/* Previous Card */}
                <div className="memoryCard sideCard">

                    <img
                        src={memories[previous].image}
                        alt={memories[previous].title}
                    />

                </div>


                {/* Left Arrow */}

                <button className="left">

                    ❮

                </button>


                {/* Current Card */}

                <div className="memoryCard currentCard"
                
                    className="memoryCard currentCard"
                    onClick={() => {

                        console.log("Expand Card");
                        
                    }}

                >    

                    <h2 className="memoryTitle">
                        
                        {memories[current].title}
                        
                    </h2>

                    <div className="memoryDividerCarousel"></div>           

                    <img
                        src={memories[current].image}
                        alt={memories[current].title}
                    />

                    <p className="memoryDate">

                        {memories[current].date}

                    </p>

                    <div className="photoOverlay">

                        <span>

                            Reveal this memory

                        </span>

                        <span className="expandIcon">

                            ⌄

                        </span>
                        
                    </div>

                </div>


                {/* Right Arrow */}

                <button className="right">

                    ❯ 

                </button>


                {/* Next Card */}

                <div className="memoryCard sideCard">

                    <img
                        src={memories[next].image}
                        alt={memories[next].title}
                    />

                </div>

            </div>

        </div>

    );

}

export default MemoryCarousel;