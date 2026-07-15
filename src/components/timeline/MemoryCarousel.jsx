import { useState } from "react";

import ExpandedMemory from "./ExpandedMemory";

import "../../styles/timeline/MemoryCarousel.css";

function MemoryCarousel({ memories }) {

    const [touchStart, setTouchStart] = useState(null);

    const [touchEnd, setTouchEnd] = useState(null);

    const [current, setCurrent] = useState(0);

    const [animatingSlots, setAnimatingSlots] = useState(false);

    const [displayCurrent, setDisplayCurrent] = useState(0);

    const [direction, setDirection] = useState("");

    const [isAnimating, setIsAnimating] = useState(false);

    const [expandedMemory, setExpandedMemory] = useState(null);

    const previous3 =
        (displayCurrent - 3 + memories.length) % memories.length;

    const previous2 =
        (displayCurrent - 2 + memories.length) % memories.length;

    const previous1 =
        (displayCurrent - 1 + memories.length) % memories.length;

    const next1 =
        (displayCurrent + 1) % memories.length;

    const next2 =
        (displayCurrent + 2) % memories.length;

    const next3 =
        (displayCurrent + 3) % memories.length;

    const slots = [

        {
            memory: memories[previous2],
            className: "secondLeft"
        },

        {
            memory: memories[previous1],
            className: "firstLeft"
        },

        {
            memory: memories[displayCurrent],
            className: "currentCard"
        },

        {
            memory: memories[next1],
            className: "firstRight"
        },

        {
            memory: memories[next2],
            className: "secondRight"
        }

    ];

    const goNext = () => {

        if (expandedMemory || isAnimating) return;

        setIsAnimating(true);

        setAnimatingSlots(true);

        setDirection("next");

        const newCurrent = (current + 1) % memories.length;

        setCurrent(newCurrent);

        setTimeout(() => {

            setDisplayCurrent(newCurrent);

            setAnimatingSlots(false);

            setDirection("");

            setIsAnimating(false);

        }, 450);
    };

    const goPrevious = () => {

        if (expandedMemory || isAnimating) return;

        setIsAnimating(true);

        setAnimatingSlots(true);

        setDirection("prev");

        const newCurrent =
            (current - 1 + memories.length) % memories.length;

        setCurrent(newCurrent);

        setTimeout(() => {

            setDisplayCurrent(newCurrent);

            setAnimatingSlots(false);

            setDirection("");

            setIsAnimating(false);

        }, 450);
    };

    return (

        <div className="memoryCarousel">

            <div 
            
                className={`carouselWrapper animateCarousel ${direction} ${animatingSlots ? "moving" : ""}`}
            
                onTouchStart={(e) => {
                    setTouchStart(e.targetTouches[0].clientX);
                }}

                onTouchMove={(e) => {
                    setTouchEnd(e.targetTouches[0].clientX);
                }}

                onTouchEnd={() => {

                    if (touchStart === null || touchEnd === null) return;

                    const distance = touchStart - touchEnd;

                    if (distance > 60) {

                        goNext();

                    }

                    if (distance < -60) {

                        goPrevious();

                    }

                    setTouchStart(null);

                    setTouchEnd(null);
                    
                }}
            >

            <div 
            
                className={`memoryCard ${slots[0].className} ${expandedMemory ? "disabledCard" : ""}`}
                
            >

                <img 
                
                src={slots[0].memory.image} 
                
                alt={slots[0].memory.title}
                
                />


            </div>

            <div 
            
                className={`memoryCard ${slots[1].className} ${expandedMemory ? "disabledCard" : ""}`}
                
            >

                <img 
                
                src={slots[1].memory.image} 
                
                alt={slots[1].memory.title}
                
                />


            </div>


                {/* Left Arrow */}

                <button 
                
                    className="left"
                    onClick={goPrevious}

                >

                    ❮

                </button>


                {/* Current Card */}

                {

                    !expandedMemory && (

                <div
                
                    className={`memoryCard ${slots[2].className}`}

                    onPointerDown={(e) => {
                        
                        e.stopPropagation();

                        setExpandedMemory(slots[2].memory);

                    }}
                >    

                    <h2 className="memoryTitle">
                        
                        {slots[2].memory.title}
                        
                    </h2>

                    <div className="memoryDividerCarousel"></div>           

                    <img
                        src={slots[2].memory.image}
                        alt={slots[2].memory.title}
                    />

                    <p className="memoryDate">

                        {slots[2].memory.date}

                    </p>

                </div>
                
                        )
                    }


                {/* Right Arrow */}

                <button 
                
                    className="right"
                    onClick={goNext}
                
                >

                    ❯ 

                </button>

                <div

                    className={`memoryCard ${slots[3].className} ${expandedMemory ? "disabledCard" : ""}`}

                >

                    <img 
                    
                    src={slots[3].memory.image} 
                    
                    alt={slots[3].memory.title}
                    
                    />

                </div>

                <div

                    className={`memoryCard ${slots[4].className} ${expandedMemory ? "disabledCard" : ""}`}

                >

                    <img 
                    
                    src={slots[4].memory.image} 
                    
                    alt={slots[4].memory.title}
                    
                    />

                </div>

                <div 
                
                    className={`memoryCard incomingRight ${animatingSlots ? direction : ""}`}
                
                >

                    <img 
                    
                        src={memories[next3].image}
                    
                        alt={memories[next3].title}
                    
                    />

                </div>

            <div

                    className={`memoryCard incomingLeft ${animatingSlots ? direction : ""}`}

                >

                <img

                    src={memories[previous3].image}

                    alt={memories[previous3].title}

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