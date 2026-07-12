import { motion } from "framer-motion";

function BeginButton ({ onStart }) {

    return (

        <motion.button
    
        className="beginButton"
        onClick={onStart}

        whileHover={{
            scale: 1.08
        }}

        whileTap={{
            scale: 0.95
        }}

        >

            Click to Begin →

        </motion.button>

    );
}

export default BeginButton;