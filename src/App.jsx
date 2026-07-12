// Import natin ang useState.
// Ito ang ginagamit sa React para mag-store ng information
// na nagbabago habang tumatakbo ang website.
import { useState, useEffect } from "react"

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

        const [currentPage, setCurrentPage] = useState(() => {

          return localStorage.getItem("currentPage") || "intro";

        });

        useEffect(() => {

          localStorage.setItem("currentPage", currentPage);

        }, [currentPage]);

        useEffect(() => {

        window.history.scrollRestoration = "manual";

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
      
      onStart={() => setCurrentPage("landing")}

      />

      :

      <Landing />

    }
      
    </>
  );
}

// Export natin ang App para magamit siya ng main.jsx.
// Ito ang magiging root ng buong application.
export default App;