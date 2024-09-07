import { 
  Badge, 
  TitleSection 
} from "../components"
import { 
  backendTech, 
  controlVersionTech, 
  frontendTech 
} from "../data"
import '../styles/sections/TechSection.css'

export const TechSection = () => {
  return (
    <section className="other-section">
      <TitleSection title = 'Tecnologías'/>
      <div className="section-content">
        <p>
          A lo largo de mi trayectoria académica y profesional, he adquirido y perfeccionado una sólida base en las tecnologías presentadas en esta sección. Mi objetivo es profundizar en el dominio de estas tecnologías para brindar soluciones innovadoras y eficientes. 
        </p>
        <br />
        <p className="text-with-badge">
          En este sentido, actualmente estoy ampliando mis conocimientos en <Badge technology='React'/> a través de un curso especializado.
        </p>
        <div className="section-content-badges">
          <h3>Back-end</h3>
          <hr />
          <div>
            {
              backendTech.map( backend => (
                <Badge key={backend.name} technology={backend.name} />
              ))
            }
          </div>
        </div>
        <div className="section-content-badges">
          <h3>Front-end</h3>
          <hr />
          <div>
            {
              frontendTech.map( frontend => (
                <Badge key={frontend.name} technology={frontend.name} />
              ))
            }
          </div>
        </div>
        <div className="section-content-badges">
          <h3>Control de versiones</h3>
          <hr />
          <div>
            {
              controlVersionTech.map( version => (
                <Badge key={version.name} technology={version.name} />
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}
