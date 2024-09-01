import { useState } from "react";
import "./form.css";
import Textfield from "../textfield/textfield";
import Optionlist from "../optionslist";
import Button from "../button";
//si le llamaba index.js al poner la ruta de la carpeta iba a leer de manera automatica
const Form = (props) => {

    const [name, setName] = useState("")
    const [workstation, setWorkstation] = useState("")
    const [photo, setPhoto] = useState("")
    const [team, setTeam] = useState("")

    const {registerCollaborator, teams} = props

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

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Textfield 
                titulo="Nombre" 
                placeholder="Ingresar nombre" 
                required
                value={name}
                setValue={setName}    
            />
            <Textfield 
                titulo="Puesto" 
                placeholder="Ingresar puesto" 
                required
                value={workstation}
                setValue={setWorkstation}
            />
            <Textfield 
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
    </section>
}

export default Form;