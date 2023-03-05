// React imports
import React, {useEffect, useState} from 'react';

// Component
export const TimeAndWeather: React.FC = () => {

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

    // HTML Return
    return (
        <div className={"text-center"}>
            <h1 className={"text-7xl -mb-3"}>{time}</h1>
            <p className={"lg muted-1"}>{date}</p>
        </div>
    )
}