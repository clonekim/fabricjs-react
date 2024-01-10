import React, {createContext, useState} from "react";
import {fabric} from "fabric";

type FabricState = [
        fabric.Canvas | null,
    (c: fabric.Canvas) => void
]

export const FabricContext = createContext<FabricState>([null, () => {
}]);

export const FabricContextProvider = ({children}: { children: React.ReactNode }) => {
    const [canvas, setCanvas] = useState<fabric.Canvas | null>(null)

    const initCanvas = (c: fabric.Canvas): void => {
        setCanvas(c);
    }

    return (
        <FabricContext.Provider value={[canvas, initCanvas]}>
            {children}
        </FabricContext.Provider>
    );

}