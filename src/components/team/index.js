import "./team.css"
import Collaborator from "../collaborator"
import hexToRgba from "hex-to-rgba"
const Team = (props) => {
    //Destructuracion
    const {title, primaryColor, secundaryColor, id} = props.data
    const {collaborators, deleteCollaborator, updateColor, like} = props
    
    const styleBackground = {
        backgroundColor: hexToRgba(primaryColor, 0.6)
    }

    const styleTitle = {borderColor: primaryColor}

    return <>{collaborators.length > 0 &&
        <section className="team" style={styleBackground}>
            <input
                type='color'
                className="input-color"
                value={primaryColor}
                onChange={(event) => {
                    updateColor(event.target.value, id)
                }}
            />
            <h3 style={styleTitle}>{title}</h3>
            <div className="collaborators">
                {
                    collaborators.map((collaborator, index) => <Collaborator 
                        data={collaborator} 
                        key={index}
                        primaryColor={primaryColor}
                        deleteCollaborator={deleteCollaborator}
                        like={like}
                    />)
                }
            </div>
        </section>
    }</>
}

export default Team;