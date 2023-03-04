// React imports
import React from 'react';

// Properties
export type Props = {
    name?: string,
    url?: string,
    icon?: string,
    newTab?: boolean
}

// Component
export const WebLinkButton: React.FC<Props> = ({name, url, icon, newTab = false}) => {

    // HTML Return
    if (!newTab) {
        return (
            <a href={url} className={"border-2 border-zinc-800 rounded-3xl translate-y-0 hover:-translate-y-1 transition duration-300 w-28 h-28 flex flex-col justify-center items-center"}>
                <img src={icon} className={"bg-zinc-100 rounded-full w-10 aspect-square"}/>
                <p className={"cursor-pointer mt-3 sm"}>{name}</p>
            </a>
        )
    } else {
        return (
            <button className={"border-2 border-zinc-800 rounded-3xl translate-y-0 hover:-translate-y-1 transition duration-300 w-28 h-28 flex flex-col justify-center items-center"}>

            </button>
        )
    }
}