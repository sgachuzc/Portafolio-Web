import { TimeLine, TitleSection } from '../components'

export const WorkSection = () => {
  return (
    <section className="container other-section">
      <div className="row">
        <TitleSection title="EXPERIENCIA LABORAL"/>
        <div className="section-content">
          <TimeLine />
        </div>
      </div>
    </section>
  )
}
