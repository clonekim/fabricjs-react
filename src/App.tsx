import './App.css'
import {FabricContextProvider} from "./lib/FabricContext";
import FabricCanvas from "./lib/FabricCanvas.tsx";
import {createRef, useState} from "react";

import {Gateway} from "./lib/Gateway.tsx";

function App() {

    const textRef = createRef<HTMLInputElement>()
    const [width, setWidth] = useState(800)

    const changeWidth = () => {
        if (textRef.current)
            setWidth(parseInt(textRef.current?.value as string));
    }


    return (
        <>
            <div>
                <input type="text" ref={textRef} defaultValue={width}/>
                <button onClick={changeWidth}>Change</button>
            </div>

            <FabricContextProvider>
                <div style={{border: '1px solid #ddd', width}}>
                    <FabricCanvas width={width} height={500}/>
                </div>
                <Gateway x={100} y={100} label="250" fill={'#ff0000'} stroke={'#fc89xx'} strokeWidth={2}/>
                <Gateway x={200} y={100} label="251" fill={'#ff0000'} stroke={'#fc89xx'} strokeWidth={2}/>
            </FabricContextProvider>

        </>
    )
}

export default App
