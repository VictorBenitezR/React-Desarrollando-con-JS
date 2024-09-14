import './App.css';
import {v4 as uuidv4} from 'uuid';
import Header from './components/header/header.js';
import Form from './components/form/form.js';
import MyOrg from './components/MyOrg/index.js';
import { useState } from 'react';
import Team from './components/team/index.js';
import Footer from './components/footer/index.jsx';

function App() {
  const [showForm, updateShow] = useState(false)
  const [collaborators, setCollaborators] = useState([{
    id: uuidv4(),
    team: "Front End",
    photo: "https://github.com/harlandlohora.png",
    name: "Harland Lohora",
    workstation: "Instructor",
    fav: false
  },
  {
    id: uuidv4(),
    team: "Programación",
    photo: "https://github.com/genesysR-dev.png",
    name: "Genesys Rondón",
    workstation: "Desarrolladora de software e instructora",
    fav: false
  },
  {
    id: uuidv4(),
    team: "UX y Diseño",
    photo: "https://github.com/JeanmarieAluraLatam.png",
    name: "Jeanmarie Quijada",
    workstation: "Instructora en Alura Latam",
    fav: false
  },
  {
    id: uuidv4(),
    team: "Programación",
    photo: "https://github.com/christianpva.png",
    name: "Christian Velasco",
    workstation: "Head de Alura e Instructor",
    fav: false
  },
  {
    id: uuidv4(),
    team: "Innovación y Gestión",
    photo: "https://github.com/JoseDarioGonzalezCha.png",
    name: "Jose Gonzalez",
    workstation: "Dev FullStack",
    fav: false
  }])
  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      title:"Programación",
      primaryColor:"#57C278",
      secundaryColor:"#D9F7E9"
    },
    {
      id: uuidv4(),
      title:"Front End",
      primaryColor:"#82CFFA",
      secundaryColor:"#E8F8FF"
    },
    {
      id: uuidv4(),
      title:"Data Science",
      primaryColor:"#A6D157",
      secundaryColor:"#F0F8E2"
    },
    {
      id: uuidv4(),
      title:"Devops",
      primaryColor:"#E06B69",
      secundaryColor:"#FDE7E8"
    },
    {
      id: uuidv4(),
      title:"UX y Diseño",
      primaryColor:"#DB6EBF",
      secundaryColor:"#FAE9F5"
    },
    {
      id: uuidv4(),
      title:"Móvil",
      primaryColor:"#FFBA05",
      secundaryColor:"#FFF5D9"
    },
    {
      id: uuidv4(),
      title:"Innovación y Gestión",
      primaryColor:"#FF8A29",
      secundaryColor:"#FFEEDF"
    }
  ])


  //Ternario ---> condicion ? showForm : noshowForm

  const changeShow = () => {
    updateShow(!showForm)
  }

  //Registrar colaborador
  const registerCollaborator = (collaborator) => {
    console.log("Nuevo colaborador: ", collaborator)
    //Spread operator
    setCollaborators([...collaborators, collaborator])
  }

  //Eliminar colaborador
  const deleteCollaborator = (id) => {
    console.log("Eliminar colaborador: ", id)
    const newCollaborators = collaborators.filter((collaborator) => collaborator.id !== id)
    setCollaborators(newCollaborators)
  }

  //Actualizar color
  const updateColor = (color, id) => {
    const updatedEquipment = teams.map((team) => {
      if(team.id === id){
        team.primaryColor = color
      }
      return team
    })
    setTeams(updatedEquipment)
  }

  //Crear equipo
  const createTeam = (newTeam) => {
    console.log(newTeam)
    setTeams([...teams, {...newTeam, id: uuidv4()}])
  }

  const like = (id) => {
    const updatedCollaborators = collaborators.map((collaborator) => {
      if(collaborator.id === id){
        collaborator.fav = !collaborator.fav
      }
      return collaborator
    })
    setCollaborators(updatedCollaborators)
  }
  
  return (
    <div>
      <Header/>
      {
        /* Una forma de hacer si mostrar o no el formulario
        showForm ? <Form teams={teams.map((team) => team.title)}/> : <></>
        */
        showForm && <Form
          teams={teams.map((team) => team.title)}
          registerCollaborator={registerCollaborator}
          createTeam={createTeam}
        />
      }
      <MyOrg changeShow={changeShow}/>
      {
        teams.map((team) => <Team 
          data={team} 
          key={team.title}
          collaborators={collaborators.filter(collaborator => collaborator.team === team.title)}
          deleteCollaborator={deleteCollaborator}
          updateColor={updateColor}
          like={like}
        />)
      }
      <Footer/>
    </div>
  );
}

export default App;
