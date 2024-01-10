import {useContext, useEffect, useRef} from "react";
import {FabricContext} from "./FabricContext.tsx";
import {fabric} from "fabric";

export interface FabricCanvasProps {
    width: number,
    height: number
}


const FabricCanvas = ({width, height}: FabricCanvasProps) => {


    const canvasEl = useRef(null);
    const [canvas, initCanvas] = useContext(FabricContext)
    useEffect(() => {

        console.log('init ', width, height)
        const c = new fabric.Canvas(canvasEl.current, {
            width,
            height,
            preserveObjectStacking: true,
        })
        initCanvas(c);

        return () => {
            console.log('dispose')

            c?.dispose();
        }
    }, [width, height]);


    useEffect(() => {
        console.log(canvas)
    }, [canvas]);

    return (

        <canvas ref={canvasEl}
                width={width}
                height={height}
        />
    )
}

export default FabricCanvas;