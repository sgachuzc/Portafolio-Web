import { workExperiencie } from '../data'
import { 
  VerticalTimeline, 
  VerticalTimelineElement 
}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Badge } from './Badge';

const WorkIcon = () => {
  return (
    <img src="/images/work.svg" alt="" style={{ width: '30px', margin: '4px 5px'}} />
  )
}

export const TimeLine = () => {
  const contentStyle = {
    background: 'var(--color-cold)', 
    color: 'var(--color-navy)', 
    border: '1px solid var(--color-navy)', 
    boxShadow: '0 3px 0 var(--color-navy)'
  }

  const contentArrowStyle = {
    borderRight: '7px solid var(--color-navy)'
  }

  const iconStyle = {
    background: 'var(--color-blue)', 
    color: 'var(--color-cold)'
  }

  return (
    <VerticalTimeline layout="1-column-left">
      {
        workExperiencie.map( job => (
          <VerticalTimelineElement key={job.id} className="vertical-timeline-element--work" contentStyle={contentStyle} contentArrowStyle={contentArrowStyle} iconStyle={iconStyle} icon={<WorkIcon />} date={job.time} >
            <h3 className="vertical-timeline-element-title">
              { job.position }
            </h3>
            <hr />
            <h5 className="vertical-timeline-element-subtitle">{ job.company }</h5>
            <>
              <p style={{margin: '1em 0', textAlign: 'justify'}}>{ job.activities }</p>
              <div className="vertical-timeline-element-badge" style={{display: 'flex', flexWrap: 'wrap'}}>
                {
                  job.techStack.map( tech => (
                    <Badge key={tech.name} technology={tech.name}/>
                  ))
                }
              </div>
            </>
          </VerticalTimelineElement>
        ))
      }
    </VerticalTimeline>
  )
}
