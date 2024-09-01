import './App.css';
import Header from './components/header/header.js';
import Form from './components/form/form.js';
import MyOrg from './components/MyOrg/index.js';
import { useState } from 'react';
import Team from './components/team/index.js';
import Footer from './components/footer/index.jsx';

function App() {
  const [showForm, updateShow] = useState(true)
  const [collaborators, setCollaborators] = useState([])

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

  //Lista de equipos
  const teams = [
    {
      title:"Programación",
      primaryColor:"#57C278 ",
      secundaryColor:"#D9F7E9"
    },
    {
      title:"Front End",
      primaryColor:"#82CFFA",
      secundaryColor:"#E8F8FF"
    },
    {
      title:"Data Science",
      primaryColor:"#A6D157",
      secundaryColor:"#F0F8E2"
    },
    {
      title:"Devops",
      primaryColor:"#E06B69",
      secundaryColor:"#FDE7E8"
    },
    {
      title:"UX y Diseño",
      primaryColor:"#DB6EBF",
      secundaryColor:"#FAE9F5"
    },
    {
      title:"Móvil",
      primaryColor:"#FFBA05",
      secundaryColor:"#FFF5D9"
    },
    {
      title:"Innovación y Gestión",
      primaryColor:"#FF8A29",
      secundaryColor:"#FFEEDF"
    }
  ]
  
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
        />
      }
      <MyOrg changeShow={changeShow}/>
      {
        teams.map((team) => <Team 
          data={team} 
          key={team.title}
          collaborators={collaborators.filter(collaborator => collaborator.team === team.title)}
        />)
      }
      <Footer/>
    </div>
  );
}

export default App;
