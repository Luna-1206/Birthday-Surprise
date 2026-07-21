import { useState, useEffect } from "react";

import { easeIn, motion } from "framer-motion";

import "../../styles/reasons/Reasons.css";

import Sunflower from "../../assets/images/reasons/sunflower.png";

import reasons from "../../data/reasons";

function Reasons() {

  const [page, setPage] = useState(0);

  const [cardsPerPage, setCardsPerPage] = useState(10);

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

      setPage(page + 1);

    }

  };

  const previousPage = () => {

    if (page > 0) {

      setPage(page - 1);


    }

  };

  return (

    <section className="reasons">

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
      
        className="reasonsGrid"
        
        initial={{
          opacity: 0,
          x: page > 0 ? 60 : -60
        }}

        animate={{
          opacity: 1,
          x: 0
        }}

        transition={{
          duration:.45,
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
