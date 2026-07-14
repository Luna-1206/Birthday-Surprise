import MemoryCarousel from "./MemoryCarousel";

import "../../styles/timeline/Memories.css";


function Memories({ memories }) {

    return (

        <section className="memories">

            <h1>
                Memories
            </h1>


            <MemoryCarousel 
                memories={memories}
            />


        </section>

    );

}


export default Memories;