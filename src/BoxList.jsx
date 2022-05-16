import React, {useState} from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";


const BoxList = () => {
    const[boxes, setBoxes] = useState([]);
    const addBox = box => {
        setBoxes(boxes => [...boxes, box])
    }
    const removeBox = id => {
        setBoxes(boxes => boxes.filter(box => box.id !== id));
    };

    const boxComp = boxes.map(box => (
        <Box
        id={box.id}
        key={box.id}
        width={box.width}
        height={box.height}
        backgroundColor={box.backgroundColor}
        deleteBox={removeBox}
        />
    ));
    return (
        <div>
            <NewBoxForm createBox={addBox} />
            {boxComp}
        </div>
    );
}

export default BoxList;