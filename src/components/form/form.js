import { useState } from "react";
import "./form.css";
import Field from "../field/field";
import Optionlist from "../optionslist";
import Button from "../button";
//si le llamaba index.js al poner la ruta de la carpeta iba a leer de manera automatica
const Form = (props) => {

    const [name, setName] = useState("")
    const [workstation, setWorkstation] = useState("")
    const [photo, setPhoto] = useState("")
    const [team, setTeam] = useState("")

    const [title, setTitle] = useState("")
    const [color, setColor] = useState("")

    const {registerCollaborator, teams, createTeam} = props

    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("Manejar el envio")
        let dataToSend = {
            name: name,
            workstation: workstation,
            photo: photo,
            team: team
        }
        registerCollaborator(dataToSend)
    }

    const handleNewTeam = (e) => {
        e.preventDefault()
        createTeam({title, primaryColor: color})
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Field 
                titulo="Nombre" 
                placeholder="Ingresar nombre" 
                required
                value={name}
                setValue={setName}    
            />
            <Field 
                titulo="Puesto" 
                placeholder="Ingresar puesto" 
                required
                value={workstation}
                setValue={setWorkstation}
            />
            <Field 
                titulo="Foto" 
                placeholder="Ingresar enlace de foto" 
                required
                value={photo}
                setValue={setPhoto}
            />
            <Optionlist 
                value={team}
                setTeam={setTeam}
                teams={teams}
            />
            <Button>
                Crear
            </Button>
        </form>
        <form onSubmit={handleNewTeam}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Field 
                titulo="Titulo" 
                placeholder="Ingresar titulo" 
                required
                value={title}
                setValue={setTitle}    
            />
            <Field 
                titulo="Color" 
                placeholder="Ingresar el color en Hex" 
                required
                value={color}
                setValue={setColor}
                type="color"
            />
            <Button>
                Registrar equipo
            </Button>
        </form>
    </section>
}

export default Form;