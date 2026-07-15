import { useState } from "react";

import ExpandedMemory from "./ExpandedMemory";

import "../../styles/timeline/MemoryCarousel.css";

function MemoryCarousel({ memories }) {

    const [touchStart, setTouchStart] = useState(null);

    const [touchEnd, setTouchEnd] = useState(null);

    const [current, setCurrent] = useState(0);

    const [direction, setDirection] = useState("");

    const [isAnimating, setIsAnimating] = useState(false);

    const [expandedMemory, setExpandedMemory] = useState(null);

    const previous2 =
        (current - 2 + memories.length) % memories.length;

    const previous1 =
        (current - 1 + memories.length) % memories.length;

    const next1 =
        (current + 1) % memories.length;

    const next2 =
        (current + 2) % memories.length;

    const cards = [

        {
            memory: memories[previous2],
            className: "secondLeft"
        },

        {
            memory: memories[previous1],
            className: "firstLeft"
        },

        {
            memory: memories[current],
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

        setDirection("next");

        setCurrent((prev) => (prev + 1) % memories.length);

        setTimeout(() => {

            setDirection("");

            setIsAnimating(false);

        }, 450);
    };

    const goPrevious = () => {

        if (expandedMemory || isAnimating) return;

        setIsAnimating(true);

        setDirection("prev");

        setCurrent((prev) => 
        (prev - 1 + memories.length) % memories.length
        );

        setTimeout(() => {

            setDirection("");

            setIsAnimating(false);

        }, 450);
    };

    return (

        <div className="memoryCarousel">

            <div 
            
                className={`carouselWrapper animateCarousel ${direction}`}
            
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
            
                className={`memoryCard ${cards[1].className} ${expandedMemory ? "disabledCard" : ""}`}
                
            >

                <img 
                
                src={cards[1].memory.image} 
                
                alt={cards[1].memory.title}
                
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
                
                    className={`memoryCard ${cards[2].className}`}

                    onPointerDown={(e) => {
                        
                        e.stopPropagation();

                        setExpandedMemory(cards[2].memory);

                    }}
                >    

                    <h2 className="memoryTitle">
                        
                        {cards[2].memory.title}
                        
                    </h2>

                    <div className="memoryDividerCarousel"></div>           

                    <img
                        src={cards[2].memory.image}
                        alt={cards[2].memory.title}
                    />

                    <p className="memoryDate">

                        {cards[2].memory.date}

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

                    className={`memoryCard ${cards[3].className} ${expandedMemory ? "disabledCard" : ""}`}

                >

                    <img 
                    
                    src={cards[3].memory.image} 
                    
                    alt={cards[3].memory.title}
                    
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