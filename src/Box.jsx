import React, {useState} from "react";
import NewBoxForm from "./NewBoxForm";


const Box = ({newBox}) => {
    const INITAL_STATE = {
        backgroundColor: "",
        width: "",
        height: ""
    };
    return (
        <div>
            <h3>Box Display</h3>
            <NewBoxForm />
        </div>
    )
}

export default Box;