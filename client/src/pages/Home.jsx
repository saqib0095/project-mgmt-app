import Clients from "../components/clients";
import Projects from "../components/Projects";
import AddClientsModel from "../components/AddClientsModel";
import AddProjectModel from "../components/AddProjectModel";

export default function Home() {
  return (
    <>
    <div className="d-flex gap-3 mb-4">
        <AddClientsModel />
        <AddProjectModel />
    </div>
    <Projects />
    <hr />
    <Clients />
    
    </>
  )
}
