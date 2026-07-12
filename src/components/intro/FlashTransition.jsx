import { motion, AnimatePresence } from "framer-motion";

function FlashTransition ({ show }) {

    return (

        <AnimatePresence>

            {show && (

                <motion.div
                
                    className = "flash"

                    initial={{

                        opacity: 0

                    }}

                    animate = {{

                        opacity: [0, 1, .6, 0]

                    }}

                    exit= {{

                        opacity: 0

                    }}

                    transition={{

                        duration: .5

                    }}

                />
            )}

        </AnimatePresence>

    );
}

export default FlashTransition;