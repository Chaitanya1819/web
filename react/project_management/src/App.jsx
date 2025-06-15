import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import SelectedProject from "./components/SelectedProject.jsx";
import {useState} from 'react';
function App() {
  const[projectsState,setProjectsState]=useState({
    selectedProjectId: undefined,   
    // we can use null also null meANS WE CAN USE IT FOR NO PROJECTS AVAILABLE simply adding new project , UNDEFINED MEANS NO PROJECT IS SELECTED FROM AVAILABALE PROJECTS
    projects: []
  });

 
  function handleStartAddProject(){
    setProjectsState(prevState=>{
      return{
        ...prevState,
        selectedProjectId: null,
      };

    });


  }
  function handleSelectProject(id){
    setProjectsState(prevState=>{
      return{
        ...prevState,
        selectedProjectId: id,
      };

    });

  }
  function handleCancelAddProject(){
    setProjectsState(prevState=>{
      return{
        ...prevState,
        selectedProjectId: undefined,
      };

    });
  }
  function handleDeleteProject(){
    setProjectsState(prevState=>{
      return{
        ...prevState,
        selectedProjectId: undefined,
        projects:prevState.projects.filter((project)=> project.id !== prevState.selectedProjectId
      ),
      };

    });

  }

  function handleAddproject(projectData){
    setProjectsState(prevState =>{
      const projectId = Math.random();
      const newProject ={
        ...projectData,
        id: projectId,
      }
      return{
        ...prevState,
        selectedProjectId: undefined,
        projects:[...prevState.projects,newProject]
      }
    })
  }
  console.log(projectsState);
  const SelectedProject = projectsState.projects.find(project=> project.id === projectsState.selectedProjectId );

  let content = <SelectedProject  project={SelectedProject} onDelete={handleDeleteProject}/>;
  if(projectsState.selectedProjectId===null){
    content=<NewProject onAdd={handleAddproject} onCancel={handleCancelAddProject}/>

  }else if(projectsState.selectedProjectId === undefined){
    content=<NoProjectSelected onStartAddProject={handleStartAddProject}/>;
  }
  return (
    <>
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onSelectProject={handleSelectProject} onStartAddProject={handleStartAddProject}
      projects={projectsState.projects}
      />
      {/* <NewProject/> */}
      {content}
      
      </main>
      {/* <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1> */}
    </>
  );
}

export default App;
