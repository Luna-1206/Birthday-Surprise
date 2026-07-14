import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import Polaroid from "./Polaroid";

import "../../styles/timeline/MemoryCarousel.css";


function MemoryCarousel({ memories }) {

    return (

        <div>

            <h2>Carousel Placeholder</h2>

            <p>Total Memories: {memories.length}</p>

        </div>

    );

}

export default MemoryCarousel;