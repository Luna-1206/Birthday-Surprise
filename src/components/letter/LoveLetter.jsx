import { useEffect, useRef, useState } from "react";

import "../../styles/letter/LoveLetter.css";

import LetterTypeText from "./LetterTypeText";

function LoveLetter() {

    const letterRef = useRef(null);

    const [startTyping, setStartTyping] = useState(false);

    useEffect(() => {

        const observer = new IntersectionObserver(

            ([entry]) => {

                if (entry.isIntersecting) {

                    setStartTyping(true);

                    observer.disconnect();

                }

            },

            {
                threshold: 0.35
            }

        );

        if (letterRef.current) {

            observer.observe(letterRef.current);

        }

        return () => observer.disconnect();

    }, []);

    const paragraphs = [

        `Happy birthday, wabwab ko. I hope you know how important you are to me and how grateful I am to have you in my life.`,

        `You have brought so many beautiful moments into my life, and even the simplest days feel more special whenever I get to spend them with you.`,

        `I love the way you make me smile, the way you care, the way you make me feel understood, and all the little things about you that make you uniquely you.`,

        `I may not always know the perfect words to express everything I feel, but I hope through the little things I do, you can always feel how deeply I love and appreciate you.`,

        `On your birthday, I wish you happiness, peace, success, and all the beautiful things you deserve. I hope you continue chasing your dreams and becoming the person you want to be.`,

        `Thank you for being the best part of my life, for giving me memories I will always treasure, and for being someone I can love with all my heart.`,

        `No matter how many birthdays come and go, I hope I can still be here beside you, celebrating your happiness, supporting your dreams, and making more memories with you.`,

        `I love you more than these words can ever explain. Happy birthday, my wabwab. ❤️`

    ];

    return (

        <section
            className="loveLetter"
            ref={letterRef}
        >

            <div className="letterSection">

                <h2 className="letterTitle">
                    Birthday Letter
                </h2>

                <div className="letterPaper">

                    <div className="letterDecoration">
                        🌻
                    </div>

                    <div className="letterDate">
                        With all my love
                    </div>

                    <h1>
                        My Wabwab,
                    </h1>

                    <LetterTypeText
                        paragraphs={paragraphs}
                        startTyping={startTyping}
                    />

                    <div className="letterClosing">

                        <p>
                            Forever yours,
                        </p>

                        <h2>
                            Lee ❤️
                        </h2>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default LoveLetter;