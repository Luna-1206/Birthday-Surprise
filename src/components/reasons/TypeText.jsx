import { useEffect, useState } from "react";

function TypeText({ text, onFinish }) {
    
    const [display, setDisplay] = useState("");

    useEffect(() => {

        setDisplay("");

        let index = 0;

        let interval;

        const delay = setTimeout(() => {

            interval = setInterval(() => {

                index++;

                setDisplay(text.slice(0, index));

                if (index >= text.length) {

                    clearInterval(interval);

                    setTimeout(() => {

                        onFinish?.();

                    }, 800);
                }

            }, 50);

        }, 250); // 250ms delay before start typing

        return () => {

            clearTimeout(delay);

            clearInterval(interval);

        };

    }, [text, onFinish]);

    return(
        
        <p className="typeText">

            {display}

        </p>

    );

}

export default TypeText;