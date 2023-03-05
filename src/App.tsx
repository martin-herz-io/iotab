// Description: Main App component
import React, {useEffect, useState} from 'react';

// Components
import {WebLinkButtons} from "./components/WebLinkButtons";
import {SearchBox} from "./components/SearchBox";
import {Icon} from "./components/Icon";
import {Modal} from "./components/Modal";

// Create the App functional component
const App = () => {

    // Define a state variable 'time' and a function to set it with the current time
    const [time, setTime] = useState(getFormatted("time"));

    // Define a state variable 'date' and a function to set it with the current time
    const [date, setDate] = useState(getFormatted("date"));

    // Use the useEffect hook to update the time every second
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(getFormatted("time"));
            setDate(getFormatted("date"));
        }, 1000);

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, []);

    // Define a helper function to format the time & date
    function getFormatted(type: string) {
        switch (type) {
            case 'time':
                return new Date().toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit'
                });
            case 'date':
                return new Date().toLocaleDateString([], {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    weekday: 'long',
                });
        }
    }

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

            <div className={"text-center"}>
                <h1 className={"text-7xl -mb-3"}>{time}</h1>
                <p className={"lg muted-1"}>{date}</p>
            </div>

            <SearchBox />

            <WebLinkButtons />

            <div onClick={() => {}} className={"absolute z-10 left-0 top-0 w-full h-full bg-black hidden"} />

            <Modal>
                <h1>Hallo</h1>
            </Modal>
        </div>
    );
}

// Export
export default App;
