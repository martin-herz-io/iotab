// Description: Main App component
import React from 'react';

// Components
import {WebLinkButtons} from "./components/WebLinkButtons";

// App
function App() {
    return (
        <div className={"h-screen w-full flex flex-col justify-center items-center gap-24"}>
            <div>
                <h1>IOtab</h1>
            </div>

            <WebLinkButtons />
        </div>
    );
}

// Export
export default App;
