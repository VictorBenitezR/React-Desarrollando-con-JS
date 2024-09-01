import "./collaborator.css"

const Collaborator = (props) => {
    const {name, photo, team, workstation} = props.data
    const {primaryColor} = props
    return <div className="collaborator">
        <div className="header" style={{backgroundColor: primaryColor}}>
            <img src={photo} alt={name}/>
        </div>
        <div className="info">
            <h4>{name}</h4>
            <h5>{workstation}</h5>
        </div>
    </div>
}

export default Collaborator