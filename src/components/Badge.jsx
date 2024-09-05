import '../styles/components/Badge.css'

export const Badge = ({tecnology}) => {
  return (
    <div className="badge">
      <div className="badge-img">
        <img src={`/tech/${tecnology}.svg`} alt={tecnology} />
      </div>
      <div className="badge-text">
        <span>{tecnology}</span>
      </div>
    </div>
  )
}
