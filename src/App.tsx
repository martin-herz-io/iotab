// Description: Main App component
import React from 'react';

// Components
import {WebLinkButtons} from "./components/WebLinkButtons";
import {SearchBox} from "./components/SearchBox";
import {Icon} from "./components/Icon";
import {TimeAndWeather} from "./components/TimeAndWeather";

// Create the App functional component
const App = () => {

    return (
        <div className={"h-screen w-full flex flex-col justify-center items-center gap-24"}>
            <div className={"absolute top-0 left-0 w-full p-4 flex justify-between"}>
                <div className={"flex items-center gap-4"}>
                    <button className={"px-1 border-b-2 border-transparent hover:border-zinc-300 hover:dark:border-zinc-800 text-sm font-medium opacity-60 hover:opacity-100 transition duration-300"}>
                        Startseite
                    </button>

                    <button className={"px-1 border-b-2 border-transparent hover:border-zinc-300 hover:dark:border-zinc-800 text-sm font-medium opacity-60 hover:opacity-100 transition duration-300"}>
                        Nachrichten
                    </button>
                </div>

                <div className={"flex items-center gap-4"}>
                    <button className={"aspect-square rounded-full flex justify-center items-center opacity-50 hover:opacity-100 transition duration-300"}>
                        <Icon name={"cog"} className={"w-6"} />
                    </button>

                    <button className={"aspect-square rounded-full flex justify-center items-center opacity-50 hover:opacity-100 transition duration-300"}>
                        <Icon name={"information-circle"} className={"w-6"} />
                    </button>
                </div>
            </div>

            <TimeAndWeather />

            <SearchBox />

            <WebLinkButtons />
        </div>
    );
}

// Export
export default App;
