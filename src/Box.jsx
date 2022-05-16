import React from "react";



// const Box = ({props, id}) => {
//     const INITIAL_STATE = {
//         backgroundColor: "",
//         width: "",
//         height: "",
//         handleRemove: []
//     }
function Box({
    id,
    handleRemove,
    width=5,
    height=5,
    backgroundColor="green"
}) {
    const removeBox = () => handleRemove(id);
    const divStyle = {
        width: `${width}em`,
        height: `${height}em`,
        backgroundColor
    };

    return (
        <div>
            <h3>Box Display</h3>
            <div
            style={divStyle}
            />
            <button onClick={removeBox}>X</button>
        </div>
    )
}

export default Box;