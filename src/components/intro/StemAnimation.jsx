import { motion } from "framer-motion";

import stem from "../../assets/images/intro/stem.png";

import "../../styles/intro/Stem.css";

function StemAnimation ({ show, hide }) {
    
    if (!show) return null;

    return (

        <motion.img

            src = {stem}

            alt="Sunflower Stem"

            className="stem"

            initial={{

                opacity: 0,
                scaleY: 0

            }}

            animate={{

                opacity: 1,
                scaleY: 1

            }}

            transition={{
                
                duration: 2,
                ease: "easeOut"

            }}

        />

    );
}

export default StemAnimation;