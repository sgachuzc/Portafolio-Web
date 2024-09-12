import { workExperiencie } from '../data'
import { 
  VerticalTimeline, 
  VerticalTimelineElement 
}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const WorkIcon = () => {
  return (
    <img src="/images/work.svg" alt="" style={{ width: '30px', margin: '4px 5px'}} />
  )
}

export const TimeLine = () => {
  const contentStyle = {
    background: 'var(--color-white)', 
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
            <h5 className="vertical-timeline-element-subtitle">
              <a href={job.companyLink} title="Abre en otra pestaña" target='_blank' className="paragraph-link">
                { job.company }
              </a>
            </h5>
            <p style={{margin: '1em 0', textAlign: 'justify'}}>{ job.activities }</p>
          </VerticalTimelineElement>
        ))
      }
    </VerticalTimeline>
  )
}
