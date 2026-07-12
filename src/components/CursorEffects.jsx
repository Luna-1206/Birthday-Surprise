import { useEffect, useState, useRef } from "react";

import { motion, AnimatePresence } from "framer-motion";

import "../styles/CursorEffects.css";

function CursorEffects () {

    const [trail, setTrail] = useState([]);
    const [splashes, setSplashes] = useState([]);

    const lastTrail = useRef(0);

    useEffect(() => {

        const handleMove = (e) => {

            const now = Date.now();

            if (now - lastTrail.current < 50) return;

            lastTrail.current = now;

            const heart = {

                id: Date.now() + Math.random(),

                x: e.clientX,

                y: e.clientY

            };

            setTrail(prev => [...prev.slice(-5), heart]);

        };

        const handleClick = (e) => {

            const hearts = [];

            for (let i = 0; i < 8; i++) {

                hearts.push({

                    id: Date.now() + Math.random() + i,

                    x: e.clientX,

                    y: e.clientY,

                    angle: Math.random() * 360,

                    distance: 30 + Math.random() * 50

                });
            }

            setSplashes(prev => [...prev, ...hearts]);

                setTimeout(() => {

                    setSplashes(prev =>
                        prev.filter(item => !hearts.some(h => h.id === item.id))
                    );

                }, 800);
            
        };

        window.addEventListener("mousemove", handleMove);

        window.addEventListener("click", handleClick);

        return () => {

            window.removeEventListener("mousemove", handleMove);

            window.removeEventListener("click", handleClick);
        
        };

    }, []);

    useEffect(() => {

        const timer = setInterval(() => {

            setTrail(prev => prev.slice(1));

        }, 500);

        return () => clearInterval(timer);

    }, []);

    return (

        <>
        
            <AnimatePresence>

                {
                    trail.map(heart => (

                        <motion.div
                        
                        key={heart.id}

                            className="heartTrail"

                            initial={{

                                opacity: .8,

                                scale: 1

                            }}

                            animate={{

                                opacity: 0,

                                scale: .4,

                                y: -15

                            }}

                            exit={{

                                opacity: 0

                            }}

                            transition={{

                                duration: .9,

                                ease: "easeOut"

                            }}

                            style={{

                                left: heart.x,

                                top: heart.y
                                
                            }}

                        >

                            ❤️

                        </motion.div>
                    ))
                }



            </AnimatePresence>

            <AnimatePresence>

    {

        splashes.map(heart => (

            <motion.div

                key={heart.id}

                className="heartSplash"

                initial={{

                    x: 0,

                    y: 0,

                    opacity: 1,

                    scale: 1

                }}

                animate={{

                    x: Math.cos(heart.angle * Math.PI / 180) * heart.distance,

                    y: Math.sin(heart.angle * Math.PI / 180) * heart.distance,

                    opacity: 0,

                    scale: 0.4

                }}

                transition={{

                    duration: 1.5,

                    ease: "easeOut"

                }}

                style={{

                    left: heart.x,

                    top: heart.y

                }}

            >

                ❤️

                </motion.div>

                ))

            }

        </AnimatePresence>

        </>

    );
}

export default CursorEffects;