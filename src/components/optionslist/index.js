import "./optionslist.css";
const Optionlist = (props) => {
    //Metodo map -> arreglo.map( (equipo, index) => {
    //  return <option></option>
    //})

    const handleChange = (e) => {
        console.log("Cambio", e.target.value)
        props.setTeam(e.target.value)
    }

    return <div className="option-list">
        <label>Equipos</label>
        <select value={props.value} onChange={handleChange}>
            <option value="" disabled defaultValue="" hidden>Seleccionar Equipo</option>
            {props.teams.map((team, index) => {
                return <option key={index}>{team}</option>
            })}
        </select>
    </div>
}
/*
    tambien se puede hacer de manera directa cuando solo queres retornar una cosa
    {equipos.map((equipo, index) => <option key=index>{equipo}</option>)}
*/
export default Optionlist;