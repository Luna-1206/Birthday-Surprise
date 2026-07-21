import { useEffect, useState } from "react";

function TypeText({text}) {
    
    const [display, setDisplay] = useState("");

    useEffect(() => {

        setDisplay("");

        let index = 0;

        const interval = setInterval(() => {

            setDisplay(

                prev => prev + text [index]

            );

            index++;

            if(index >= text.length) {

                clearInterval(interval);
            }

        }, 45);

        return ()=> clearInterval(interval);

    }, [text]);

    return(

        <p className="typeText">

            {display}

        </p>

    );
}

export default TypeText;