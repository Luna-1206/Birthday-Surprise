import { useEffect, useState } from "react";

function LetterTypeText({ paragraphs, startTyping }) {

    const [visibleText, setVisibleText] = useState([]);

    useEffect(() => {

        if (!startTyping) return;

        let paragraphIndex = 0;
        let characterIndex = 0;

        setVisibleText([]);

        const typeNext = () => {

            if (paragraphIndex >= paragraphs.length) return;

            const currentParagraph = paragraphs[paragraphIndex];

            setVisibleText(prev => {

                const updated = [...prev];

                updated[paragraphIndex] =
                    currentParagraph.slice(0, characterIndex);

                return updated;

            });

            characterIndex++;

            if (characterIndex > currentParagraph.length) {

                paragraphIndex++;

                characterIndex = 0;

            }

        };

        const interval = setInterval(typeNext, 35);

        return () => clearInterval(interval);

    }, [startTyping, paragraphs]);

    return (

        <div className="letterBody">

            {paragraphs.map((paragraph, index) => (

                <p key={index}>

                    {visibleText[index] || ""}

                </p>

            ))}

        </div>

    );

}

export default LetterTypeText;