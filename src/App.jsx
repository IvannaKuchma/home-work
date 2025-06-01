import React, {useState} from "react";
import Input from "./components/Input";

function App() {
    const [clicks, setClicks] = useState(0);

    const handleClick = () => {
        setClicks(prev => prev + 1);
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Hello</h1>
            <button text={'Clicked $ {clicks} times'} onClick={handleClick}></button>
        </div>
    );
}

export default App;