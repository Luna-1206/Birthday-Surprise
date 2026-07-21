import { useState, useEffect, useRef } from "react";

import { easeIn, motion } from "framer-motion";

import "../../styles/reasons/Reasons.css";

import Sunflower from "../../assets/images/reasons/sunflower.png";

import reasons from "../../data/reasons";
import { blockquote } from "framer-motion/client";

function Reasons() {

  const [page, setPage] = useState(0);

  const [cardsPerPage, setCardsPerPage] = useState(10);

  const [direction, setDirection] = useState(1);

  const reasonsRef = useRef(null);

  useEffect(() => {

    const handleResize = () => {

      if (window.innerWidth <= 768) {

        setCardsPerPage(4);

      } else {

        setCardsPerPage(10);

      }

      setPage(0);

    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () =>
        window.removeEventListener("resize", handleResize); 
  
  }, []);
  
  const scrollToReasons = () => {

    reasonsRef.current?.scrollIntoView({

      behavior: "smooth",

      block: "start"

    });
  };

  const start = page * cardsPerPage;

  const visibleReasons = reasons.slice(

    start,

    start + cardsPerPage

  );

  const totalPages = Math.ceil(

    reasons.length / cardsPerPage

  );

  const nextPage = () => {

    if (page < totalPages - 1) {

      setDirection(1);

      setPage(page + 1);

      setTimeout(() => {

        scrollToReasons();

      }, 100);

    }

  };

  const previousPage = () => {

    if (page > 0) {

      setDirection(-1);

      setPage(page - 1);

      setTimeout(() => {

        scrollToReasons();
        
      }, 100);

    }

  };

  return (

    <section 
    
      className="reasons"

      ref={reasonsRef}
    
    >

      <div className="reasonsHeader">

        <span>❤️</span>

        <h1>Reasons Why I Love You</h1>

        <span>❤️</span>

      </div>

      <div className="reasonsContainer">

        <button
        
          className="reasonPrev"

          onClick={previousPage}

        >

          ❮

        </button>

      <motion.div 
      
        key={page}

        className={`reasonsGrid ${
        visibleReasons.length === 1 ? "lastReasonPage" : ""
    }`}
        
        initial={{
          opacity: 0,
          x: direction === 1 ? 80 : -80
        }}

        animate={{
          opacity: 1,
          x: 0
        }}

        exit={{

          opacity: 0,

          x: direction === 1 ? -80 : 80
        }}

        transition={{
          duration: 0.45,
          ease: "easeOut"
        }}
        
      >

        {
        
        visibleReasons.map((reason) => (

        <div 
        
          className={`reasonCard ${visibleReasons.length === 1 ? "lastReason" : ""}`}

          key={reason.id}
        
        >

          <div className="paperTape"></div>

            <img 
            
                src={Sunflower}
            
                alt="Sunflower" 

                className="reasonFlower"
            
            />

            <h2>
              
               {reason.title}
               
            </h2>

            <div className="reasonDivider"></div>

            <p>
              
               - Click to Open - 

            </p>

        </div>

        ))

        }

      </motion.div>

      <button
      
        className="reasonNext"

        onClick={nextPage}

      >

        ❯

      </button>

      </div>

    </section>

  );

}

export default Reasons;
