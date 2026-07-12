import { motion } from "framer-motion";

import bud from "../../assets/images/intro/sunflower-bud.png";

import "../../styles/intro/Bud.css";

function BudAnimation ({ show }) {

    if(!show) return null;

    return (

        <motion.img
        
            src = {bud}

            alt="Sunflower Bud"

            className="bud"

            initial={{

                opacity: 0,
                scale: 0.4,
                y: 30

            }}

            animate={{
                
                opacity: show ? 1 : 0,
                scale: 1,
                y: 0

            }}
            
            transition={{
                
                duration: 2,
                ease: "easeOut"

            }}

        />

    );
}

export default BudAnimation;