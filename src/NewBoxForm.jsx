import React, {useState} from "react";
import { useFormik } from "formik";
import {v4 as uuid} from "uuid";


const NewBoxForm = ({newBox}) => {
    const INITIAL_STATE = {
        width: "",
        height: "",
        backgroundColor: ""
    };
    const[formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = (e) => {
        const {name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createBox({...formData, id: uuid() });
        setFormData(INITIAL_STATE);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="width">Width</label>
                <input
                id="width"
                type="text"
                name="width"
                value={formData.width}
                onChange={handleChange}
                />
                <label htmlFor="height">Height</label>
                <input
                id="height"
                type="text"
                name="height"
                value={formData.height}
                onChange={handleChange}
                />
                <label htmlFor="backgroundColor">Background Color</label>
                <input
                id="backgroundColor"
                type="text"
                name="backgroundColor"
                value={formData.backgroundColor}
                onChange={handleChange}
                />
            </form>
        </div>
    );
}

export default NewBoxForm;
