import { motion, useScroll, useTransform } from "framer-motion";

import { useRef } from "react";

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

            "start center",

            "center center"

        ]

    });

    const titleOpacity = useTransform(

        scrollYProgress,
        [0, 0.25],
        [0, 1]
    );

    const imageOpacity = useTransform(

        scrollYProgress,
        [0.25, 0.55],
        [1.15, 1]
    );

    const imageScale = useTransform(

        scrollYProgress,
        [0.25, 0.55],
        [1.15, 1]
    );

    const imageBlur = useTransform(
    scrollYProgress,
    [0.25,0.55],
    [
        "blur(12px)",
        "blur(0px)"
    ]
);


const dateOpacity = useTransform(
    scrollYProgress,
    [0.35,0.5],
    [0,1]
);


const subtitleOpacity = useTransform(
    scrollYProgress,
    [0.45,0.65],
    [0,1]
);

    const opacity = useTransform(

        scrollYProgress,

        [0, .3, .7, 1],

        [0, 1, 1, 0]

    );

    const y = useTransform(

        scrollYProgress,

        [0, 1],

        [100, -100]

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