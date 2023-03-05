// React imports
import React from 'react';
import {Icon} from "./Icon";

// Properties
export type Props = {
    id?: string;
    show?: boolean;
    children: React.ReactNode;
}

// Component
export const Modal: React.FC<Props> = ({id, show = false, children}) => {

    // HTML Return
    return (
        <div id={id} className={`${show ? '' : 'hidden'} absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-100 dark:bg-zinc-900 border-2 border-zinc-300 dark:border-zinc-800 rounded-xl overflow-hidden`}>
            <div className={"border-b-2 border-zinc-300 dark:border-zinc-800 w-full min-w-[16rem] p-3 flex flex-row"}>
                <button className={"ml-auto flex justify-center items-center opacity-60 hover:opacity-100 transition duration-300"}>
                    <Icon name={"close"} className={"w-6"} />
                </button>
            </div>
            <div className={"p-3"}>
                {children}
            </div>
        </div>
    )
}