import "../../styles/timeline/ExpandedMemory.css";

function ExpandedMemory({ memory, onClose }) {

    return(

        <>

        <div className="expandedOverlay">

            <div className="expandedContent">

                <button 
                
                    className="backButton"
                    onClick={onClose}

                >

                     ←

                </button>

                <h1>

                    {memory.title}

                </h1>

                <img 
                
                    src={memory.image}

                    alt={memory.title} 
                    
                />

                <p>

                    {memory.date}

                </p>

                <blockquote>

                    {memory.quote}

                </blockquote>

            </div>

        </div>

        </>
    );
}

export default ExpandedMemory;