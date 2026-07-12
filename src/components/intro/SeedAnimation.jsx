import { motion } from "framer-motion";

import seed from "../../assets/images/intro/seed.png";

import "../../styles/intro/Seed.css";

function SeedAnimation({ stage, glow, hide }) {

    const isMoving = stage !== "intro";

    return (

        <div className="seedContainer">
        
        <motion.div
        
        animate={{

                filter: glow

                    ? [
                        
                        "drop-shadow(0 0 5px rgba(255, 210, 80, .2))",

                        "drop-shadow(0 0 18px rgba(255, 210, 80, .8))",

                        "drop-shadow(0 0 8px rgba(255, 210, 80, .5))"

                    ]

                    : "drop-shadow(0 0 0px rgba(255, 210, 80, 0))"

            }}

            transition={{

                duration: 3,
                repeat: glow ? Infinity : 0,
                repeatType: "mirror"
                
            }}

        >   

        <motion.img
        
            src = {seed}

            alt = "Sunflower Seed"

            className="seed"

            animate={{

                opacity: hide ? 0 : 1,

                y: isMoving ? 95 : [0, -12, 0],

                scale: isMoving ? 1 : 1,

                rotate: isMoving ? 0 : [0, 2, -2, 0],

                }}

                transition={

                    hide 
                    
                    ?

                    {

                        duration: 0.5

                    }

                    :

                    isMoving

                    ?

                    {

                        duration: 2,
                        ease: "easeInOut"

                    }

                    :

                    {

                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"

                     }
                }

            />

        </motion.div>

        </div>

    );
}

export default SeedAnimation;