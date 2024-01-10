import {useContext, useEffect} from "react";
import {FabricContext} from "./FabricContext.tsx";
import {fabric} from "fabric";

const Gateway = (props: {x: number, y: number, label: string, fill:string, stroke: string, strokeWidth: number}) => {


    const [canvas] = useContext(FabricContext)

    useEffect(() => {

        if(canvas) {

            console.log('creating Gateway');


            const circleObject = new fabric.Circle({
                fill:props.fill,
                stroke:  props.stroke,
                strokeWidth: props.strokeWidth,
                radius: 18,
                originX: 'center',
                originY: 'center',
            })

            const labelObject = new fabric.Text(props.label, {
                fontSize: 14,
                fontFamily: 'Arial',
                originX: 'center',
                originY: 'center',
            })

            const group = new fabric.Group([ circleObject, labelObject ], {
                width: 80,
                height: 80,
                left: props.x,
                top: props.y,
            })

            canvas.add(group);
            // canvas.renderAll();

        }
    }, [ canvas]);

    return null;
}

export  {
    Gateway
};