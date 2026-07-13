// Import natin ang animation tools ng Framer Motion.
// Ito ang magbibigay ng fade, movement, at transition effects.

import { useState, useEffect, useRef } from "react";

import { motion } from "framer-motion";

import song from "../../assets/audio/terrified.mp3";

// Import natin ang sariling CSS ng intro.
import "../../styles/intro/Intro.css";

import StoryQuote from "./StoryQuote";
import Seed from "./SeedAnimation";
import BeginButton from "./BeginButton";
import Particles from "./Particles";
import CrackAnimation from "./CrackAnimation";
import SproutAnimation from "./SproutAnimation";
import StemAnimation from "./StemAnimation";
import BudAnimation from "./BudAnimation";
import Sunflower from "./SunflowerAnimation";
import SunflowerAnimation from "./SunflowerAnimation";

// Ito ang unang screen na makikita ni Wabwab.

function Intro({ onStart }) {
  
  const audioRef = useRef(null);
  
  // ======================================
  // INTRO STAGES
  // ======================================

  // intro = unang screen
  // seed = nagsimula na ang story
  // crack
  // sprout
  // stem
  // bud
  // bloom

  const [stage, setStage] = useState("intro");

  const [hideBud, setHideBud] = useState(false);

  const [showFinalMessage, setShowFinalMessage] = useState(false);

  // ======================================
  // Para sa glow effect ng seed
  // ======================================

  const [glow, setGlow] = useState(false);

  const [showSprout, setShowSprout] = useState(false);

  const [growStem, setGrowStem] = useState(false);

  const [showBud, setShowBud] = useState(false);

  const [showSunflower, setShowSunflower] = useState(false);

  const [cracked, setCracked] = useState(false);

  const [flash, setFlash] = useState(false);

  const [creamFlash, setCreamFlash] = useState(false);

  //=======================================
  // Seed quote
  //=======================================
  
  const [showSeedQuote, setShowSeedQuote] = useState(false);

  const [showCrackQuote, setShowCrackQuote] = useState(false);

  const [showSproutQuote, setShowSproutQuote] = useState(false);

  const [showStemQuote, setShowStemQuote] = useState(false);

  const [showBudQuote, setShowBudQuote] = useState(false);

  const [showSunflowerQuote, setShowSunflowerQuote] = useState(false);

  // ======================================
  // Nagche-check kung nagsimula na ang animation
  // ======================================

  const isAnimating = stage !== "intro";

  // Ito ang text na tina-type sa intro

  const [displayText, setDisplayText] = useState("");

  // ======================================
  // TYPEWRITER EFFECT
  // ======================================

  // Ito ang sentence na gusto nating i-type

  const introText = "Preparing something special...";

  useEffect(() => {
    // Huwag na ulit mag-type kapag hindi na tayo nasa intro
    if (stage !== "intro") return;

    let index = 0;

    // Every 80ms, magdadagdag ng isang character

    const typing = setInterval(() => {
      setDisplayText(introText.slice(0, index + 1));

      index++;

      //Kapag tapos na ang buong sentence

      if (index === introText.length) {
        clearInterval(typing);
      }
    }, 80);

    // Nililinis ang timer kapag na-unmount ang component
    return () => clearInterval(typing);
  }, [stage]);

  return (
    <section className="intro">
      {/*
                Container ng intro text.
                May fade + slide animation.
            */}

      {/* Background Glow */}
      <div className="backgroundGlow"></div>

      <Particles />

      {flash && <div className="flashOverlay"></div>}

      <div className="intro-content">

        {/* ===============================
                FLOATING SEED
        ================================ */}

        <motion.div

        className="seedWrapper"

        animate={{

            // Kapag intro palang
            // y = 0

            // Kapag click na
            // bababa siya ng 180px

            y: isAnimating ? 180 : 0,

            //Konting paglaki para maging focus

            scale: isAnimating ? 1.12 : 1

        }}

        transition={{

            duration: 1.8,

            ease: "easeInOut"

        }}

        >

        <div className="seedSwap">

            <Seed 
        
                stage = {stage}

                glow = {glow}

                hide={cracked}
        
            />

            <CrackAnimation
        
                show={cracked && !showSprout}

            />

            <SproutAnimation
            
                show={showSprout}

            />

            <StemAnimation
            
                show={growStem}

            />

            <BudAnimation
            
                show={showBud && !hideBud}

            />

            <SunflowerAnimation
            
                show = {showSunflower}

            />

        </div>

        <StoryQuote 
        
            show = {showSeedQuote}
            
            stage="seed"

        />

        <StoryQuote

            show={showCrackQuote}

            stage="crack"

        />

        <StoryQuote
        
            show={showSproutQuote}

            stage="sprout"

        />

        <StoryQuote
        
            show={showStemQuote}

            stage="stem"

        />

        <StoryQuote 
        
            show={showBudQuote}

            stage="sunflower_bud"

        />

        <StoryQuote
        
            show = {showSunflowerQuote}

            stage="sunflower"

        />

        

        </motion.div>

        {showFinalMessage && (

            <motion.div
            
                className = "finalMessage"

                initial={{

                    opacity: 0,
                    y: 15

                }}

                animate={{

                    opacity: 1,
                    y: 0

                }}

                transition={{

                    duration: 1.5

                }}


            >

                <p className="now">and now...</p>

                <h2 className="time">it's your turn <br /> to bloom</h2>

            </motion.div>
        )}

        {/* ===============================
            TYPEWRITER TEXT
        ================================ */}

        <div 
        
        className={isAnimating ? "fadeOut hiddenButton" : ""}
        
        >

        <p 
        
        className={"introLabel"}
        
        >

          {displayText}

          <span className="cursor">|</span>
        </p>

            <BeginButton
    
                onStart={() => {
            
                    // Simulan ang animation
                    setStage("seed");

                    //start music
                    if (audioRef.current) {

                        audioRef.current.volume = 0;

                        audioRef.current.play();

                        //gradual volume increase
                        let volume = 0;

                        const fadeAudio = setInterval(() => {

                            if (volume < 0.7) {

                                volume += 0.05;

                                audioRef.current.volume = volume;

                                audioRef.current.loop = true;

                                audioRef.current.play();

                            } else {

                                clearInterval(fadeAudio);

                            }

                        }, 200);

                    }

                    setTimeout(() => {

                        setShowSeedQuote(true);

                    }, 2500);

                    // Hintayin munang makarating ang seed
                    setTimeout(() => {

                        setGlow(true);

                    }, 5000);
                    
                    setTimeout(() => {

                        setShowSeedQuote(false);

                    }, 7500);


                    setTimeout(() => {

                        setCracked(true);

                        setStage("crack");

                    }, 8500);

                    setTimeout (() => {

                        setShowCrackQuote(true);

                    }, 11000);

                    setTimeout(() => {

                        setShowCrackQuote(false);

                    }, 16000);

                    setTimeout(() => {

                        setFlash(true);

                    }, 16500);

                    setTimeout(() => {

                        setShowSprout(true);

                        setStage("sprout");

                    }, 17000 );

                    setTimeout(() => {
                        
                        setFlash(false);

                    }, 18500 )

                    setTimeout(() => {

                        setShowSproutQuote(true);

                    }, 19500);

                    setTimeout(() => {

                        setShowSproutQuote(false);

                    }, 24500);

                    setTimeout(() => {

                        setGrowStem(true);

                    }, 25000);

                    setTimeout(() => {

                        setShowStemQuote(true);

                    }, 27500);

                    setTimeout(() => {

                        setShowStemQuote(false);

                    }, 32500);

                    setTimeout(() => {

                        setShowBud(true);

                    }, 33000);

                    setTimeout(() => {

                        setShowBudQuote(true);

                    }, 35500);

                    setTimeout(() => {

                        setShowBudQuote(false);

                    }, 40500)

                    setTimeout(() => {

                        setHideBud(true);

                        setShowSunflower(true);

                    }, 43000);

                    setTimeout(() => {

                        setShowSunflowerQuote(true);

                    }, 45500);

                    setTimeout(() => {

                        setShowSunflowerQuote(false);

                    }, 52500);

                    setTimeout(() => {

                        setShowFinalMessage(true);

                    }, 53500);

                    setTimeout(() => {

                        setCreamFlash(true);

                    }, 59000);

                    setTimeout(() => {

                        onStart();

                    }, 64000);

                }}

            />
        

            <p className="madeWithLove">
            
                made with ❤️
            
            </p>

        </div>

      </div>

      <audio
      
        ref={audioRef}

        src={song}

        loop

      />

      {

        creamFlash &&

        <div className="creamFlash"></div>
        
      }

    </section>
  );
}

export default Intro;
