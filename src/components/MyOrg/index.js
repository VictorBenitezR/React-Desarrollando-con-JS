import { useState } from "react";
import "./myOrg.css";

const MyOrg = (props) => {
    //Estados - Hooks
    //useState
    //useState()
    //const [nombreVariable, funcionActualiza] = useState(valorInicial)
    //console.log(props)
    //const [mostrar, actualizarMostrar] = useState(true)
    /*
    const manejarClick = () => {
        console.log("Mostrar/Ocultar elemento", mostrar);
        actualizarMostrar(!mostrar)
    }
    */
    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.changeShow}/>
    </section>
}

export default MyOrg;