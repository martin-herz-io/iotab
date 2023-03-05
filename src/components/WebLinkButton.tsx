// React imports
import React, {useState} from 'react';
import { Icon } from "./Icon";
import { Modal } from "./Modal";

// Properties
export type Props = {
    id?: number,
    name?: string,
    url?: string,
    icon?: string,
    newTab?: boolean
}

// Component
export const WebLinkButton: React.FC<Props> = ({id, name, url, icon, newTab = false}) => {

    // Modal State
    const [modalVisible, setModalVisible] = useState(false)

    // Modal Inputs
    const [nameInput, setNameInput] = useState(name || "")
    const [urlInput, setUrlInput] = useState(url || "")

    // Show Modal
    const showModal = (event: { preventDefault: () => void }) => {
        event.preventDefault()
        setModalVisible(true)
    }

    // Hide Modal
    const hideModal = () => {
        setModalVisible(false)
    }

    // HTML Return: Web Link
    if (!newTab) {

        // Change Web Link in Local Storage
        const changeWebLink = async (event: { preventDefault: () => void }) => {
            event.preventDefault()

            // Check if nameInput and urlInput are not empty
            if (nameInput === "" || urlInput === "") {
                alert("Bitte fülle alle Felder aus!")
                return
            }

            // Get webLinks from Local Storage
            let webLinks = JSON.parse(localStorage.getItem("webLinkButtons") || "[]")

            // urlInput without http(s)://
            const url = urlInput.replace(/(^\w+:|^)\/\//, '')

            // Get favicon in 48 pixel size from url
            const favicon = `https://www.google.com/s2/favicons?sz=48&domain=${url}`

            if (id === undefined) {
                alert("id is undefined!")
                return
            }

            // Change webLink in localStorage
            webLinks[id] = {
                name: nameInput,
                url: urlInput,
                icon: favicon
            }
            localStorage.setItem("webLinkButtons", JSON.stringify(webLinks))
            hideModal()
        }

        // Delete Web Link from Local Storage
        const deleteWebLink = async (event: { preventDefault: () => void }) => {
            event.preventDefault()

            // Get webLinks from Local Storage
            let webLinks = JSON.parse(localStorage.getItem("webLinkButtons") || "[]")

            // Delete webLink from localStorage
            webLinks.splice(id, 1)
            localStorage.setItem("webLinkButtons", JSON.stringify(webLinks))
            hideModal()
        }

        return (
            <>
                <a href={url} className={"group relative border-2 border-zinc-300 dark:border-zinc-800 rounded-3xl translate-y-0 hover:-translate-y-1 transition duration-300 w-28 h-28 flex flex-col justify-center items-center"}>
                    <img src={icon} alt={`${name} favicon`} className={"w-10 aspect-square"}/>
                    <p className={"cursor-pointer mt-3 sm"}>{name}</p>

                    <button onClick={showModal} className={"opacity-0 group-hover:opacity-100 absolute right-1.5 top-1.5 p-1 rounded-full hover:bg-zinc-300 hover:dark:bg-zinc-800 transition duration-300"}>
                        <Icon name={"ellipsis-vertical"} className={"w-4"} />
                    </button>
                </a>

                <Modal isOpen={modalVisible} onClose={hideModal} title={"Lesezeichen bearbeiten"}>
                    <form className={"w-96 flex flex-col items-end gap-3"}>
                        <input
                            type={"text"}
                            value={nameInput}
                            placeholder={"Name"}
                            className={"textbox"}
                            onChange={(event) => setNameInput(event.target.value)}
                        />

                        <input
                            type={"text"}
                            value={urlInput}
                            placeholder={"URL"}
                            className={"textbox"}
                            onChange={(event) => setUrlInput(event.target.value)}
                        />

                        <div className={"flex gap-3"}>
                            <button onClick={hideModal} className={"button"}>
                                Abbrechen
                            </button>

                            <button onClick={deleteWebLink} type={"submit"} className={"button"}>
                                Löschen
                            </button>

                            <button onClick={changeWebLink} type={"submit"} className={"button"}>
                                Ändern
                            </button>
                        </div>
                    </form>
                </Modal>
            </>
        )
    }

    // HTML Return: Add Web Link
    else {

        // Add Web Link to Local Storage
        const addWebLink = async (event: { preventDefault: () => void }) => {
            event.preventDefault()

            // Check if nameInput and urlInput are not empty
            if (nameInput === "" || urlInput === "") {
                alert("Bitte fülle alle Felder aus!")
                return
            }

            // Get webLinks from Local Storage
            let webLinks = JSON.parse(localStorage.getItem("webLinkButtons") || "[]")

            // urlInput without http(s)://
            const url = urlInput.replace(/(^\w+:|^)\/\//, '')

            // Get favicon in 48 pixel size from url
            const favicon = `https://www.google.com/s2/favicons?sz=48&domain=${url}`

            // Create new webLink
            const webLink = {
                name: nameInput,
                url: urlInput,
                icon: favicon
            }

            // Add webLink to localStorage
            webLinks.push(webLink)
            localStorage.setItem("webLinkButtons", JSON.stringify(webLinks))
            hideModal()
        }

        return (
            <>
                <button onClick={showModal} className={"group border-2 border-dashed border-zinc-300 dark:border-zinc-800 rounded-3xl translate-y-0 hover:-translate-y-1 transition duration-300 w-28 h-28 flex flex-col justify-center items-center"}>
                    <Icon name={"add"} type={"line"} className={"w-12 text-zinc-300 dark:text-zinc-800 rotate group-hover:rotate-90 transition duration-300"} />
                </button>

                <Modal isOpen={modalVisible} onClose={hideModal} title={"Lesezeichen hinzufügen"}>
                    <form className={"w-96 flex flex-col items-end gap-3"}>
                        <input
                            type={"text"}
                            placeholder={"Name"}
                            className={"textbox"}
                            onChange={(event) => setNameInput(event.target.value)}
                        />

                        <input
                            type={"text"}
                            placeholder={"URL"}
                            className={"textbox"}
                            onChange={(event) => setUrlInput(event.target.value)}
                        />

                        <div className={"flex gap-3"}>
                            <button onClick={hideModal} className={"button"}>
                                Abbrechen
                            </button>

                            <button onClick={addWebLink} type={"submit"} className={"button"}>
                                Speichern
                            </button>
                        </div>
                    </form>
                </Modal>
            </>
        )
    }
}