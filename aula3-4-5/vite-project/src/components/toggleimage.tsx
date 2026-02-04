import { useState } from "react";

const ToggleImage = () => {
    const [toggle, setToggle] = useState(false);   

    return <div>
        {toggle ? <img src="./club.jpg" alt="Club Image" /> : null}
        <button onClick={() => setToggle(!toggle)}>Toggle Image</button>
    </div>
}

export default ToggleImage;