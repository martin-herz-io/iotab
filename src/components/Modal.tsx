// React imports
import React, {useEffect, useState} from 'react';
import {Icon} from "./Icon";

// Properties
export type Props = {
    title?: string;
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

// Component
export const Modal: React.FC<Props> = ({isOpen, onClose, title, children}) => {

    const [showModal, setShowModal] = useState(isOpen)

    useEffect(() => {
        setShowModal(isOpen);
    }, [isOpen]);

    const handleClose = () => {
        setShowModal(false)
        onClose()
    }

    // HTML Return
    return (
        <>
            {showModal && (
                <>
                    <div onClick={handleClose} className={`backdrop-blur fixed inset-0 bg-black/60 z-10 transition duration-300`} />
                    <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-100 dark:bg-zinc-900 border-2 border-zinc-300 dark:border-zinc-800 rounded-xl overflow-hidden z-20`}>
                        <div className={"border-b-2 border-zinc-300 dark:border-zinc-800 w-full min-w-[16rem] p-3 flex flex-row"}>
                            <p className={"opacity-60"}>
                                {title}
                            </p>
                            <button onClick={handleClose} className={"ml-auto flex justify-center items-center opacity-60 hover:opacity-100 transition duration-300"}>
                                <Icon name={"close"} className={"w-6"} />
                            </button>
                        </div>
                        <div className={"p-3"}>
                            {children}
                        </div>
                    </div>
                </>
            )}
        </>
    )
}