import "../../styles/reasons/Reasons.css";

import Sunflower from "../../assets/images/reasons/sunflower.png";

function Reasons() {

  return (

    <section className="reasons">

      <div className="reasonsHeader">

        <span>❤️</span>

        <h1>Reasons Why I Love You</h1>

        <span>❤️</span>

      </div>

      <div className="reasonsGrid">

        <div className="reasonCard">

            <img 
            
                src={Sunflower}
            
                alt="Sunflower" 
            
            />

        </div>

      </div>

    </section>

  );

}

export default Reasons;
