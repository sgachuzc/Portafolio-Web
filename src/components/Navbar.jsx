import { useContext } from 'react'
import { HeadingContext } from '../context/HeadingContext'
import '../styles/components/Navbar.css'

const TextBrand = () => {
  return (
    <p className='nav-brand-text animate__animated animate__fadeInDown'>Sergio Gachúz</p>
  )
}

export const Navbar = () => {
  const { title } = useContext( HeadingContext )
  return (
    <header>
      <nav>
        <div className="nav-items-left">
          <a className='nav-brand' href='/'>
            <img src="/images/icon.png" alt="Logo" width="50"/>
          </a>
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
              <a href="" className="nav-link">
                <i className="fa-solid fa-envelope" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
