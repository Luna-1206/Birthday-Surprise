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

        stiffness: 70,

        damping: 20,

        mass: 0.4

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
        [0.15, 0.35],
        [1.08, 1]
    );

    const imageBlur = useTransform(
    smoothProgress,
    [0.15,0.35],

    [
        "blur(8px)",
        "blur(0px)"
    ]
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

                <motion.h2
                
                style={{

                    opacity: titleOpacity

                }}
                
                >

                    {title}

                </motion.h2>

                {

                    image &&

                    <motion.div
                    
                    style={{

                        opacity: imageOpacity,

                        scale: imageScale,

                        filter: imageBlur

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

                            opacity: subtitleOpacity

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