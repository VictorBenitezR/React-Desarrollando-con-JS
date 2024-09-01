//Tambien se puede llamar index.js el archivo, y al importar no va a hacer falta especificar.
import { useState } from "react";
import "./textfield.css";
const Textfield = (props) => {
    const placeholderModificado = `${props.placeholder}...`
    
    const handleChange = (e) => {
        props.setValue(e.target.value)
    }
    
    return <div className="text-field">
        <label>{props.titulo}</label>
        <input 
            placeholder={placeholderModificado} 
            required={props.required} 
            value={props.value}
            onChange={handleChange}
        />
    </div>
}

export default Textfield;