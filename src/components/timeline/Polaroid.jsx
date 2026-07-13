import "../../styles/timeline/Polaroid.css";

function Polaroid({

    image,

    caption,

    rotation = -2

}) {

    return (

        <div

            className="polaroid"

            style={{

                transform: `rotate(${rotation}deg)`


            }}
        >

            <div className="tape"></div>

                <img 
                
                src={image} 
                
                alt={caption} 
                
                />

                <p>

                    {caption}

                </p>

        </div>
    );
}

export default Polaroid;