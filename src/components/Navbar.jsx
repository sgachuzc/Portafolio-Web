import { useContext } from 'react'
import { HeadingContext } from '../context/HeadingContext'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { 
  Toaster, 
  toast 
} from 'react-hot-toast'
import '../styles/components/Navbar.css'

const TextBrand = () => {
  return (
    <p className='nav-brand-text animate__animated animate__fadeInDown'>Sergio Gachúz</p>
  )
}

export const Navbar = () => {
  const { title } = useContext( HeadingContext )
  const toastConfig = {
    icon: '📑',
    style: {
      borderRadius: '10px',
      background: 'var(--color-blue)',
      color: 'var(--color-cold)',
    },
  }
  return (
    <header>
      <nav>
        <div className="nav-items-left">
          <div>
            <a className='nav-brand' href='/'>
              <img src="/images/Logo.png" alt="Logo" width="50"/>
            </a>
          </div>
          { !title && <TextBrand/> }
        </div>
        <div className="nav-items-right">
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
      </nav>
      <Toaster position="bottom-right"/>
    </header>
  )
}
