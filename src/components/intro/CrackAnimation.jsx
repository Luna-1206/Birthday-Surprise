import { motion } from "framer-motion";

import crackedSeed from "../../assets/images/intro/cracked-seed.png";

import "../../styles/intro/CrackAnimation.css";

function CrackAnimation ({ show }) {

    return (


        <motion.img 
        
            src={crackedSeed}

            alt="cracked seed"

            className = "crackedSeed"

            initial={{

                opacity: 0,

                scale: 1

            }}

            animate={

                show

                ?
                
                {

                    opacity: 1,

                    scale: [1, 1.05, 1],

                    rotate: [0, -5, 5, 0]

                }

                :

                {

                    opacity: 0

                }

            }

            transition={{

                duration: 2,

            }}

        />

    );
}

export default CrackAnimation;