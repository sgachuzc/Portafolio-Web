import PropTypes from 'prop-types'
import '../styles/components/TitleSection.css'

export const TitleSection = ({ title }) => {
  return (
    <div className="title-container">
      <i className="fa-solid fa-code"></i>
      <h2 className="section-title">
        { title }
      </h2>
    </div>
  )
}

TitleSection.propTypes = {
  title: PropTypes.string
}
