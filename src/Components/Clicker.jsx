function Clicker() {
    const handleClick = () => {
        alert("you clicked the button")
    };

    return <button onClick={handleClick}> Click me!</button>
    
}

export default Clicker;