import { Badge } from "./Badge"
import { PropTypes } from 'prop-types'
import '../styles/components/ProjectCard.css'

const LinksCard = ({urlGit, urlSite}) => {
  return (
    <>
      { (urlGit) ? <a className="card-link" href={urlGit}><i className="fa-brands fa-github" /></a> : '' }
      { (urlSite) ? <a className="card-link" href={urlSite}><i className="fa-solid fa-link"></i></a> : ''}
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