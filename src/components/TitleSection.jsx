import PropTypes from 'prop-types'
import '../styles/components/TitleSection.css'

export const TitleSection = ({ title }) => {
  return (
    <div className="title-container">
      <h2 className="section-title">{ title }</h2>
    </div>
  )
}

TitleSection.propTypes = {
  title: PropTypes.string
}
