import { motion } from "framer-motion";

import sprout from "../../assets/images/intro/sprout.png";

import "../../styles/intro/Sprout.css";

function SproutAnimation ({ show, hide }) {

    if (!show) return null;

    return (

        <motion.img
        
            src={sprout}

            alt="Sprout"

            className="sprout"

            initial={{

                scaleY: 0,

                opacity: 0,

                y: 10

            }}

            animate={{

                scaleY: 1,

                opacity: 1,

                y: 0

            }}

            transition={{

                duration: 1.2,

                ease: "easeOut"

            }}

        />

    );
}

export default SproutAnimation;