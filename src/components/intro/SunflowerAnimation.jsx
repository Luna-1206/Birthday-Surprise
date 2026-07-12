import { motion } from "framer-motion";

import sunflower from "../../assets/images/intro/sunflower.png";

import "../../styles/intro/Sunflower.css";

function SunflowerAnimation ({ show }) {

    if (!show) return null;

    return (

        <motion.img
        
            src = {sunflower}

            alt="Sunflower"

            className="sunflower"

            initial={{

                opacity: 0,
                scale: 0.9
            }}

            animate={{
                opacity: 1,
                scale: [0.9, 1.08, 1],
            }}

            transition={{
                duration: 2,
                ease: "easeOut"
            }}

        />

    );
}

export default SunflowerAnimation;