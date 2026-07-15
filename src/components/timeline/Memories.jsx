import MemoryCarousel from "./MemoryCarousel";

import "../../styles/timeline/Memories.css";


function Memories({ memories }) {

    return (

        <section className="memories">

            <div className="memoriesHeader">

    <div className="memoriesLine"></div>

    <span className="memoriesStar">

        ✦

    </span>

    <h1>

        Our Story

    </h1>

    <p>

        Every memory with you became
        another reason to fall in love.

    </p>

    <div className="memoriesLine"></div>

</div>


            <MemoryCarousel 
                memories={memories}
            />


        </section>

    );

}


export default Memories;