import { useState } from "react";

import ExpandedMemory from "./ExpandedMemory";

import "../../styles/timeline/MemoryCarousel.css";

function MemoryCarousel({ memories }) {

    const [current, setCurrent] = useState(0);

    const [expandedMemory, setExpandedMemory] = useState(null);

    const previous2 =
        (current - 2 + memories.length) % memories.length;

    const previous1 =
        (current - 1 + memories.length) % memories.length;

    const next1 =
        (current + 1) % memories.length;

    const next2 =
        (current + 2) % memories.length;

    return (

        <div className="memoryCarousel">

            <div className="carouselWrapper">

            {/* Second Left Card */}

            <div className={`memoryCard secondLeft ${expandedMemory ? "disabledCard" : ""}`}>

                <img
                    src={memories[previous2].image}
                    alt={memories[previous2].title}
                />

            </div>


            {/* First Left Card */}

            <div className={`memoryCard firstLeft ${expandedMemory ? "disabledCard" : ""}`}>

                <img
                    src={memories[previous1].image}
                    alt={memories[previous1].title}
                />

            </div>


                {/* Left Arrow */}

                <button className="left">

                    ❮

                </button>


                {/* Current Card */}

                <div
                
                    className={`memoryCard currentCard ${expandedMemory ? "currentExpanded" : ""}`}
                    onPointerDown={(e) => {
                        
                        e.stopPropagation();

                        setExpandedMemory(memories[current]) }}

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

                    {/*
                    <div className="photoOverlay">

                        <span>

                            Reveal this memory

                        </span>

                        <span className="expandIcon">

                            ⌄

                        </span>
                        
                    </div>

                    */}

                </div>


                {/* Right Arrow */}

                <button className="right">

                    ❯ 

                </button>


                {/* First Right Card */}

                <div className={`memoryCard firstRight ${expandedMemory ? "disabledCard" : ""}`}>

                    <img
                        src={memories[next1].image}
                        alt={memories[next1].title}
                    />

                </div>


                {/* Second Right Card */}

                <div className={`memoryCard secondRight ${expandedMemory ? "disabledCard" : ""}`}>

                    <img
                        src={memories[next2].image}
                        alt={memories[next2].title}
                    />

                </div>

            </div>

            {
                expandedMemory && (

                    

                    <ExpandedMemory
                    
                        memory={expandedMemory}

                        onClose={() => setExpandedMemory(null)}

                    />

                    
                )
            }

        </div>

    );

}

export default MemoryCarousel;