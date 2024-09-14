//Tambien se puede llamar index.js el archivo, y al importar no va a hacer falta especificar.
import "./field.css";
const Field = (props) => {
    const placeholderModificado = `${props.placeholder}...`
    
    const handleChange = (e) => {
        props.setValue(e.target.value)
    }

    //Destructuracion
    const {type = "text"} = props
    
    return <div className={`field ${type}-field`}>
        <label>{props.title}</label>
        <input 
            placeholder={placeholderModificado} 
            required={props.required} 
            value={props.value}
            onChange={handleChange}
            type={type}
        />
    </div>
}

export default Field;