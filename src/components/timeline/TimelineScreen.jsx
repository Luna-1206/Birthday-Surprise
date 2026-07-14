import { motion, useScroll, useTransform } from "framer-motion";

import { useRef } from "react";

import { useSpring } from "framer-motion";

import Polaroid from "./Polaroid";

import "../../styles/timeline/TimelineScreen.css";

function TimelineScreen ({

    title,

    subtitle,
    
    image,

    date,

    year
    
}) {

    const ref = useRef(null);

    

    const { scrollYProgress } = useScroll({
        
        target: ref,

        offset: [

            "start 95%",

            "center center"

        ]

    });

    const smoothProgress = useSpring(scrollYProgress, {

        stiffness: 80,

        damping: 25,

        mass: 0.5

    });

    const titleOpacity = useTransform(

        smoothProgress,
        [0, 0.45],
        [0, 1]
    );

    const imageOpacity = useTransform(

        smoothProgress,
        [0.25, 0.70],
        [1.15, 1]
    );

    const imageScale = useTransform(

        smoothProgress,
        [0.15, 0.45],
        [1.03, 1]
    );

    const imageY = useTransform(

        scrollYProgress,

        [0.15, 0.45],

        [50, 0]

    );

    const subtitleY = useTransform(

        scrollYProgress,

        [0.45, 0.75],

        [30, 0]

    );

    const titleY = useTransform(

        scrollYProgress,

        [0, 0.3],

        [40,0]

    );

const dateOpacity = useTransform(
    smoothProgress,
    [0.35,0.5],
    [0,1]
);


const subtitleOpacity = useTransform(
    smoothProgress,
    [0.55,0.85],
    [0,1]
);

    const opacity = useTransform(

        smoothProgress,

        [0, .3, .7, 1],

        [0, 1, 1, 0]

    );

    const y = useTransform(

        smoothProgress,

        [0, 1],

        [100, -100]

    );

    const backgroundY = useTransform(

        smoothProgress,

        [0,1],

        [80, -80]
    );

    return (

        <section
        
            ref ={ref}

            className="timelineScreen"

        >

            <motion.div
            
                className = "timelineContent"

                style={{


                    y

                }}

            >

                <div className="memoryPanel">

            {
                year &&

                <h1 className="timelineYear">

                    {year}

                </h1>

            }

                <div className="memoryDivider"></div>

                <motion.h2
                
                style={{

                    opacity: titleOpacity,

                    y: titleY

                }}
                
                >

                    {title}

                </motion.h2>

                <div className="memoryDivider"></div>

                {

                    image &&

                    <motion.div
                    
                    style={{

                        opacity: imageOpacity,

                        scale: imageScale,

                        y: imageY

                    }}
                    
                    >

                        <Polaroid
                    
                            image = {image}

                            date = {date}

                        />

                    </motion.div>

                }

                {

                    subtitle &&

                    <>

                    <div className="memoryDivider"></div>

                    <motion.p
                    
                        style={{

                            opacity: subtitleOpacity,

                            y: subtitleY

                        }}

                    >

                        {subtitle}

                    </motion.p>

                    </>
                }

                </div>

            </motion.div>

        </section>
    );
}

export default TimelineScreen;