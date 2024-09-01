import "./team.css"
import Collaborator from "../collaborator"
const Team = (props) => {
    //Destructuracion
    const {title, primaryColor, secundaryColor} = props.data
    const {collaborators} = props
    
    const styleBackground = {
        backgroundColor: secundaryColor
    }

    const styleTitle = {borderColor: primaryColor}

    return <>{collaborators.length > 0 &&
        <section className="team" style={styleBackground}>
            <h3 style={styleTitle}>{title}</h3>
            <div className="collaborators">
                {
                    collaborators.map((collaborator, index) => <Collaborator 
                        data={collaborator} 
                        key={index}
                        primaryColor={primaryColor}
                    />)
                }
            </div>
        </section>
    }</>
}

export default Team;