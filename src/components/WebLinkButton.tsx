// React imports
import React from 'react';
import { Icon } from "./Icon";

// Properties
export type Props = {
    name?: string,
    url?: string,
    icon?: string,
    newTab?: boolean
}

// Component
export const WebLinkButton: React.FC<Props> = ({name, url, icon, newTab = false}) => {

    const webLinkButtonSettings = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

    }

    // HTML Return
    if (!newTab) {
        return (
            <a href={url} className={"group relative border-2 border-zinc-300 dark:border-zinc-800 rounded-3xl translate-y-0 hover:-translate-y-1 transition duration-300 w-28 h-28 flex flex-col justify-center items-center"}>
                <img src={icon} alt={`${name} favicon`} className={"bg-zinc-100 rounded-full w-10 aspect-square"}/>
                <p className={"cursor-pointer mt-3 sm"}>{name}</p>

                <button onClick={webLinkButtonSettings} className={"opacity-0 group-hover:opacity-100 absolute right-1.5 top-1.5 p-1 rounded-full hover:bg-zinc-300 hover:dark:bg-zinc-800 transition duration-300"}>
                    <Icon name={"ellipsis-vertical"} className={"w-4"} />
                </button>
            </a>
        )
    } else {
        return (
            <button className={"group border-2 border-dashed border-zinc-300 dark:border-zinc-800 rounded-3xl translate-y-0 hover:-translate-y-1 transition duration-300 w-28 h-28 flex flex-col justify-center items-center"}>
                <Icon name={"add"} type={"line"} className={"w-12 text-zinc-300 dark:text-zinc-800 rotate group-hover:rotate-90 transition duration-300"} />
            </button>
        )
    }
}