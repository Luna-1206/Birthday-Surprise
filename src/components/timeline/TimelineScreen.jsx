import { motion, useScroll, useTransform } from "framer-motion";

import { useRef } from "react";

import Polaroid from "./Polaroid";

import "../../styles/timeline/TimelineScreen.css";
import { p } from "framer-motion/client";

function TimelineScreen ({

    title,

    subtitle,
    
    image,

    year
}) {

    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        
        target: ref,

        offset: [

            "start end",

            "end start"

        ]

    });

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
                    
                    opacity,

                    y

                }}

            >

            {
                year &&

                <h1 className="timelineYear">

                    {year}

                </h1>

            }

                <h2>

                    {title}

                </h2>

                {

                    image &&

                    <Polaroid
                    
                        image = {image}

                        caption = {title}

                    />

                }

                {

                    subtitle &&

                    <p>

                        {subtitle}

                    </p>
                }

            </motion.div>

        </section>
    );
}

export default TimelineScreen;