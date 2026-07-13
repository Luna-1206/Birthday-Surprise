// Import natin ang useState.
// Ito ang ginagamit sa React para mag-store ng information
// na nagbabago habang tumatakbo ang website.
import { useState, useEffect, useRef } from "react";

import song from "./assets/audio/terrified.mp3";

// Import natin ang Landing component.
// Hindi pa natin ito gagawin ngayon, pero ito ang magiging
// unang screen na makikita ng girlfriend mo.
import Intro from "./components/intro/Intro.jsx";
import Landing from "./components/Landing.jsx";
import CursorEffects from "./components/CursorEffects.jsx";

// Ang App() ang pinaka-main component ng buong website.
// Parang main class sa Java kung saan nagsisimula ang flow.
function App() {

   /*
        Ito ang magiging "switch".

        true  = tapos na ang intro, punta na sa Landing
        false = Intro screen pa lang

        Parang variable sa Java:

        boolean started = false;
    */

        const audioRef = useRef(null);

        const [currentPage, setCurrentPage] = useState(() => {

          return localStorage.getItem("currentPage") || "intro";

        });

        useEffect(() => {

          localStorage.setItem("currentPage", currentPage);

        }, [currentPage]);

        useEffect(() => {

        window.history.scrollRestoration = "manual";

        }, []);

        useEffect(() => {

          const interval = setInterval(() => {

            if (audioRef.current) {

              localStorage.setItem(
                "musicTime",
                audioRef.current.currentTime
              );
            }

          }, 500);

          return () => clearInterval(interval);

        }, []);

        useEffect(() => {

          const audio = audioRef.current;

          if (!audio) return;

          const started = localStorage.getItem("musicStarted");

          if (started !== "true") return;

          const savedTime = Number(localStorage.getItem("musicTime") || 0);

          const restore = async () => {

            audio.currentTime = savedTime;

            try {

              await audio.play();

            } catch (err) {

              console.log("Autoplay blocked by browser.");

            }
          };

          restore();

        }, []);

        useEffect(() => {

    const resumeMusic = () => {

        if (
            localStorage.getItem("musicStarted") === "true"
            &&
            audioRef.current
        ){

            audioRef.current.play()
            .then(() => {

                console.log("Music resumed");

                window.removeEventListener(
                    "click",
                    resumeMusic
                );

            })
            .catch(() => {});

        }

    };


    window.addEventListener(
        "click",
        resumeMusic
    );


    return () => {

        window.removeEventListener(
            "click",
            resumeMusic
        );

    };


  }, []);

  return (
    

    // JSX ito.
    // Dito natin sinasabi kay React:
    // "Ipakita mo ang Landing component."
    <>

      <CursorEffects />

    {

      currentPage === "intro"
      
      ?

      <Intro

      audioRef={audioRef}
      
      onStart={() => setCurrentPage("landing")}

      />

      :

      <Landing />

    }

    <audio

      ref={audioRef}

      src={song}

      loop

    />
      
    </>
  );
}

// Export natin ang App para magamit siya ng main.jsx.
// Ito ang magiging root ng buong application.
export default App;