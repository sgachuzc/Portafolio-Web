import PropTypes from 'prop-types';
import '../styles/components/Badge.css'

export const Badge = ({technology}) => {
  const techLowerCase = technology.toLowerCase()
  return (
    <div className="badge">
      <div className="badge-img">
        <img src={`./tech/${techLowerCase}.svg`} alt={technology} />
      </div>
      <div className="badge-text">
        <span>{technology}</span>
      </div>
    </div>
  )
}

Badge.propTypes = {
  technology: PropTypes.string
};
