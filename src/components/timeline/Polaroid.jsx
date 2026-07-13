import "../../styles/timeline/Polaroid.css";

function Polaroid({

    image,

    date,

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
                
                alt="memory"
                
                />

                <p className="polaroidDate">

                    {date}

                </p>

        </div>
    );
}

export default Polaroid;