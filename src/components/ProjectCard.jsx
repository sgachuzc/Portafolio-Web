import { Badge } from "./Badge"
import { PropTypes } from 'prop-types'
import '../styles/components/ProjectCard.css'

const LinksCard = ({urlGit, urlSite}) => {
  return (
    <>
      { (urlGit) ? <a href={urlGit}>Ir a Git</a> : '' }
      { (urlSite) ? <a href={urlGit}>Ir a Site</a> : ''}
    </>
  )
}

export const ProjectCard = ({ dataProject }) => {

  const {id, name, description, techStack, urlGit, urlSite} = dataProject

  return (
    <div className="card" id={id}>
      <div className="card-header">
        {name}
      </div>
      <div className="card-body">
        <p className="card-text">
          {description}
        </p>
        <div className="card-links card-text">
          <LinksCard urlGit={urlGit} urlSite={urlSite}/>
        </div>
      </div>
      <div className="card-footer">
        {
          techStack.map( tech => (
            <Badge key={tech.techName} technology={tech.techName}/>
          ))
        }
      </div>
    </div>
  )
}

LinksCard.propTypes = {
  urlGit: PropTypes.string,
  urlSite: PropTypes.string,
}

ProjectCard.propTypes = {
  dataProject: PropTypes.object.isRequired
}