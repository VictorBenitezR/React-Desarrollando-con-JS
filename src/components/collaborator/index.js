import "./collaborator.css"
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Collaborator = (props) => {
    const {name, photo, workstation, id, fav} = props.data
    const {primaryColor, deleteCollaborator, like} = props
    return <div className="collaborator">
        <AiFillCloseCircle className="delete" onClick={() => deleteCollaborator(id)}/>
        <div className="header" style={{backgroundColor: primaryColor}}>
            <img src={photo} alt={name}/>
        </div>
        <div className="info">
            <h4>{name}</h4>
            <h5>{workstation}</h5>
            {fav ? <AiFillHeart className="colorFav" onClick={() => like(id)}/> : <AiOutlineHeart onClick={() => like(id)}/>}
        </div>
    </div>
}

export default Collaborator