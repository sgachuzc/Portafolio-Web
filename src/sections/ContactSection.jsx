import { CopyToClipboard } from "react-copy-to-clipboard"
import { 
  Toaster, 
  toast 
} from 'react-hot-toast'
import '../styles/sections/ContactSection.css'

export const ContactSection = () => {
  const toastConfig = {
    icon: '📑',
    style: {
      borderRadius: '10px',
      background: 'var(--color-blue)',
      color: 'var(--color-cold)',
    },
  }
  return (
    <section className="container other-section last-section">
      <div className="row">
        <h3 className="contact-title">¡No te olvides de contactarme!</h3>
        <div className="contact-icons">
          <ul className="list-items">
            <li className="nav-item">
              <a href="https://github.com/sgachuzc" title="Github, abre en otra pestaña" target="_blanck"  className="nav-link">
                <i className="fa-brands fa-github" />
              </a>
            </li>
            <li className="nav-item">
              <a href="https://www.linkedin.com/in/sgachuzc/" title="LinkedIn, abre en otra pestaña" target="_blanck" className="nav-link">
                <i className="fa-brands fa-linkedin-in" />
              </a>
            </li>
            <li className="nav-item">
              <CopyToClipboard text="sergioegch@gmail.com">
                <button className='nav-link' onClick={ () => toast('¡Correo copiado!', toastConfig) }>
                  <i className="fa-solid fa-envelope" />
                </button>
              </CopyToClipboard>
            </li>
          </ul>
        </div>
      </div>
      <Toaster position="bottom-right"/>
    </section>
  )
}
