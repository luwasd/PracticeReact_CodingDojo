import React, { useRef } from 'react';

function App() {
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.focus();
    };
    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={handleClick}>Focus</button>
        </div>
    );
}

export default App;