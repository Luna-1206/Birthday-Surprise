// Import natin ang motion mula sa Framer Motion.
// Ito ang gagamitin natin para gumawa ng animations.
import { motion } from "framer-motion";

import { useState, useEffect } from "react";

import Typewriter from "typewriter-effect";

// Ina-import natin ang CSS file para sa design ng Landing page.
// Tandaan:
// JSX = structure/content
// CSS = itsura/design
import "../styles/Landing.css";

// Ito ang Landing component.
// Ito ang magiging unang page na makikita niya.
function Landing({ onReplay }) {

    const [showScroll, setShowScroll] = useState(true);

    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {

        const handleScroll = () => {

            const currentScroll = window.scrollY;

            if (currentScroll > lastScrollY && currentScroll > 50) {

                setShowScroll(false);

            } else {

                setShowScroll(true);

            }

            setLastScrollY(currentScroll);

        };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

}, [lastScrollY]);

  return (

    <section className="landing">

        <motion.button 

                className = "resetButton"

                onClick={onReplay}
        
                initial={{

                    opacity: 0,

                    y: 50

                }}

                animate={{

                    opacity: 1,

                    y:0

                }}

                transition={{

                    duration: 1.2,

                    ease: "easeOut"

                }}

        >

            Replay Intro

        </motion.button>

      <motion.div 
      
      className="content"
      
      initial={{
        opacity: 0,
        y: 150
      }}

      animate={{
        opacity: 1,
        y: 0
      }}

      transition={{
        duration: 1.8
      }}

      >


        <h1 className="birthday">

            Happy Birthday

        </h1>

        <h2 className="wabwab">

            Wabwab

        </h2>

        <div className="typewriteText">

            <Typewriter 
            
                options ={{

                    strings: [

                        "The most beautiful day of your life.",

                        "Every memory begins with one moment.",

                        "Enjoy every single second.",

                        "May all your wishes come true.",

                        "Today is all about you."

                    ],

                    autoStart: true,

                    loop: true,

                    delay: 55,

                    deleteSpeed: 25,

                    pauseFor: 2500

                }}

            />

            </div>

            <div className="heroDividerLine"></div>

        <div className="heroDivider">

            <span>AUGUST 16</span>

            <p>THE MOST SPECIAL DAY</p>

        </div>

      </motion.div>

      <motion.div

    className="scrollIndicator"

    initial={false}

    animate={{

        y: showScroll ? [0, 4, 0] : 60,

        opacity: showScroll ? [0.45, 1, 0.45] : 0

    }}

    transition={{

        y: {

            duration: 1,

            ease: "easeInOut",

            repeat: showScroll ? Infinity : 0,

            repeatType: "loop"

        },

        opacity: {

            duration: .35

        }

    }}

>

        <div className="scrollArrow">

            ⌄
            
        </div>

        <span>

            SCROLL

        </span>

        </motion.div>


    </section>
  );
}

// Para magamit siya ng App.jsx
// kailangan natin i-export.
export default Landing;
