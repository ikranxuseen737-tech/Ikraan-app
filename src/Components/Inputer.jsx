import { useState} from  "react";

function Inputer() {
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);    // reads user input
    };

    return (
        <div>
            <input type="text" value={value} onChange={handleChange} 
            />
            <p>You typed: {value}</p>
        </div>
    );                                                      
}

export default Inputer;