// React imports
import React, {useState} from 'react';
import {Icon} from "./Icon";

// Component
export const SearchBox: React.FC = () => {
    // Search Engines
    const searchEngines = {
        "google": "https://google.com/search?q=",
        "duckDuckGo": "https://duckduckgo.com/?q=",
        "bing": "https://bing.com/search?q=",
        "yahoo": "https://search.yahoo.com/search?p=",
        "ecosia": "https://www.ecosia.org/search?q=",
        "startPage": "https://startpage.com/do/search?q=",
        "qwant": "https://www.qwant.com/?q=",
        "yandex": "https://yandex.com/search/?text=",
        "perplexity": "https://www.perplexity.ai/?q=",
        "youtube": "https://www.youtube.com/results?search_query="
    }

    // State input value
    const [value, setValue] = useState('');

    // Handle enter key
    function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter') {
           openSearch()
        }
    }

    // Open search engine with query
    const openSearch = () => {
        let searchEngineLink

        // Check first two characters of value
        const firstTwoCharacters = value.substring(0, 2)
        switch (firstTwoCharacters) {
            case "g:":
                searchEngineLink = searchEngines.google
                break;

            case "d:":
                searchEngineLink = searchEngines.duckDuckGo
                break;

            case "b:":
                searchEngineLink = searchEngines.bing
                break;

            case "y:":
                searchEngineLink = searchEngines.yahoo
                break;

            case "e:":
                searchEngineLink = searchEngines.ecosia
                break;

            case "s:":
                searchEngineLink = searchEngines.startPage
                break;

            case "q:":
                searchEngineLink = searchEngines.qwant
                break;

            case "x:":
                searchEngineLink = searchEngines.yandex
                break;

            case "p:":
                searchEngineLink = searchEngines.perplexity
                break;

            case "u:":
                searchEngineLink = searchEngines.youtube
                break;

            default:
                searchEngineLink = searchEngines.google
                break;
        }

        window.open(searchEngineLink + encodeURIComponent(value), "_self")
    }

    // HTML Return
    return (
        <div className={"w-full"}>
            <label htmlFor={"search"} className={"w-1/3 mx-auto px-4 py-4 bg-zinc-300 dark:bg-zinc-800 hover:bg-transparent focus-within:bg-transparent border-[1px] border-zinc-400 dark:border-zinc-700 hover:border-zinc-300 hover:dark:border-zinc-800 focus-within:border-zinc-300 focus-within:dark:border-zinc-800 ring-0 hover:ring-2 focus-within:ring-2 ring-zinc-300 dark:ring-zinc-800 rounded-full flex flex-row items-center gap-3 cursor-text transition duration-300"}>
                <Icon
                    name={"search"}
                    className={"min-w-[1.5rem] text-zinc-500 dark:text-zinc-600"}
                />

                <input
                    id={"search"}
                    type={"text"}
                    value={value}
                    placeholder={"Suche"}
                    className={"w-full pt-1 outline-none bg-transparent text-zinc-900 dark:text-zinc-100 text-lg font-medium"}
                    onChange={(event) => setValue(event.target.value)}
                    onKeyDown={handleKeyDown}
                />

                <button onClick={openSearch} className={"bg-indigo-500 w-14 scale-100 hover:scale-110 rounded-full -mr-2 -my-4 aspect-square flex justify-center items-center transition duration-300"}>
                    <Icon
                        name={"arrow-forward"}
                        type={"line"}
                        className={"w-6 text-indigo-100"}
                    />
                </button>
            </label>
        </div>
    )
}