import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "../../styles/intro/StoryQuote.css";

function StoryQuote({ show, stage }) {
  const quotes = {
    seed: [
      "Some of the most beautiful things...",
      "begin with something so small.",
    ],

    crack: [
        
        "And every little beginning...", 
        "needs a little courage to grow."
    
    ],

    sprout: [
      "With patience and love...",
      "even the smallest dreams can bloom.",
    ],

    stem: [

        "Every little step forward...",
        "builds the strength to reach the light."

    ],

    sunflower_bud: [

        "After every season of growth...",
        "something beautiful is about to unfold."

    ],

    sunflower: [

        "Every season has led you here...",
        "...and you're blooming more beautifully than ever."

    ]

  };

  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");

  useEffect(() => {
    if (!show) {
      setLine1("");
      setLine2("");
      return;
    }

    const [first, second] = quotes[stage];

    let i = 0;

    const firstTyping = setInterval(() => {
      setLine1(first.slice(0, i + 1));

      i++;

      if (i >= first.length) {
        clearInterval(firstTyping);

        let j = 0;

        const secondTyping = setInterval(() => {
          setLine2(second.slice(0, j + 1));

          j++;

          if (j >= second.length) {
            clearInterval(secondTyping);
          }
        }, 45);
      }
    }, 45);

    return () => clearInterval(firstTyping);
  }, [show, stage]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="storyQuote"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -20
          }}
          transition={{
            duration: 1.5,
          }}
        >
          
          <p>
            
            {line1}
            
          </p>

          <strong>
            
            {line2}
            
          </strong>
          
        </motion.div>

      )}
      
    </AnimatePresence>
  );
}

export default StoryQuote;
