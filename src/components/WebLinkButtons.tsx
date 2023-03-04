// React imports
import React from 'react';

// Components
import {WebLinkButton} from "./WebLinkButton";

// Properties
export type Props = {

}

// Component
export const WebLinkButtons: React.FC<Props> = ({}) => {
    const webLinkButtons = [
        {
            name: "Google",
            url: "https://google.com",
            icon: "https://images.theconversation.com/files/93616/original/image-20150902-6700-t2axrz.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip"
        }
    ]

    // HTML Return
    return (
        <div className={"grid grid-cols-6 gap-6"}>
            {webLinkButtons.map((webLinkButton, index) => {
                return (
                    <>
                        <WebLinkButton
                            key={index}
                            name={webLinkButton.name}
                            url={webLinkButton.url}
                            icon={webLinkButton.icon}
                        />

                        <WebLinkButton
                            key={index}
                            name={webLinkButton.name}
                            url={webLinkButton.url}
                            icon={webLinkButton.icon}
                        />

                        <WebLinkButton
                            key={index}
                            name={webLinkButton.name}
                            url={webLinkButton.url}
                            icon={webLinkButton.icon}
                        />

                        <WebLinkButton
                            key={index}
                            name={webLinkButton.name}
                            url={webLinkButton.url}
                            icon={webLinkButton.icon}
                        />

                        <WebLinkButton
                            key={index}
                            name={webLinkButton.name}
                            url={webLinkButton.url}
                            icon={webLinkButton.icon}
                        />

                        <WebLinkButton
                            key={index}
                            name={webLinkButton.name}
                            url={webLinkButton.url}
                            icon={webLinkButton.icon}
                        />

                        <WebLinkButton
                            key={index}
                            name={webLinkButton.name}
                            url={webLinkButton.url}
                            icon={webLinkButton.icon}
                        />

                        <WebLinkButton
                            key={index}
                            name={webLinkButton.name}
                            url={webLinkButton.url}
                            icon={webLinkButton.icon}
                        />
                    </>
                )
            })}

            <WebLinkButton newTab={true} />
        </div>
    )
}