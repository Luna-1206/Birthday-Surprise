// src/components/intro/Particles.jsx
import { useMemo } from "react";

import "../../styles/intro/Particles.css";

import sparkle from "../../assets/images/intro/sparkle.png";

function Particles() {

    const particles = useMemo(() =>  {

        return Array.from({ length: 18 }, (_, index) => ({

            id: index,

            left: Math.random() * 150,

            size: 70 + Math.random() * 18,

            duration: 10 + Math.random() * 8,

            opacity: 0.15 + Math.random() * 0.35

        }));

    }, []); 

    return (

        <div className="particleContainer">

            {particles.map((particle) => (

                <img
                
                    key={particle.id}
                    src={sparkle}
                    alt="sparkle"
                    
                    className="sparkle"

                    style={{
                        left: `${particle.left}%`,
                        width: `${particle.size}px`,
                        animationDuration: `${particle.duration}s`,
                        animationDelay: `${particle.delay}s`,
                        opacity: particle.opacity
                    }}

                />

            ))}

        </div>

    );

}

export default Particles;