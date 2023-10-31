import React, { useState } from "react";

const ClickCounter = () => {
    const [count, setCount] = useState(0);
    const [ lastClickTime, setLastClickTime] = useState (null);
    
    const handleClick = () => {
        //INCREMENTAR EL CONTADOR DE CLICS
        setCount (count +1);

        //obtrner la fecha y hora actual 
        const currentDate = new Date();
        setLastClickTime (currentDate.toLocaleString());
    };

    return (
        <div>
            <h2>Contador de clicks</h2>
            <p>Clicks: {count}</p>
            {lastClickTime && <p>Ultimo Click: {lastClickTime}</p>}
            <button onClick={handleClick}>Hacer CLick</button>
        </div>
    )
}

export default ClickCounter