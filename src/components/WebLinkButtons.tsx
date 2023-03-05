// React imports
import React, {useEffect} from 'react';

// Components
import {WebLinkButton} from "./WebLinkButton";

// Component
export const WebLinkButtons: React.FC = () => {
    const [webLinkButtons, setWebLinkButtons] = React.useState<any[]>([])

    // Get webLinks from Local Storage
    useEffect(() => {
        const webLinks = JSON.parse(localStorage.getItem("webLinkButtons") || "[]")
        setWebLinkButtons(webLinks)

        setInterval(() => {
            const webLinks = JSON.parse(localStorage.getItem("webLinkButtons") || "[]")
            setWebLinkButtons(webLinks)
        }, 100)
    }, [])

    // HTML Return
    return (
        <div className={"grid grid-cols-6 gap-6 place-items-center place-content-center"}>
            {webLinkButtons.map((webLinkButton, index) => {
                return (
                    <>
                        <WebLinkButton
                            key={index}
                            id={index}
                            name={webLinkButton.name}
                            url={webLinkButton.url}
                            icon={webLinkButton.icon}
                        />
                    </>
                )
            })}

            {(() => {
                if (webLinkButtons.length !== 12) {
                    return (
                        <WebLinkButton newTab={true} />
                    )
                }
            })()}
        </div>
    )
}