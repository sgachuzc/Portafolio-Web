import { TitleSection } from '../components'
import '../styles/sections/AboutSection.css'

export const AboutSection = () => {
  return (
    <section className="other-section">
      <TitleSection title="Acerca" />
      <div className="section-content">
        <p>Soy un ingeniero en sistemas apasionado por la tecnología y la innovación, con un enfoque especial en el desarrollo web. Mi naturaleza autodidacta me ha permitido adquirir y perfeccionar habilidades en diversas áreas del desarrollo web, desde el front-end hasta el back-end. Me considero una persona autocritica, siempre buscando mejorar y aprender de cada experiencia.</p>
        <div className="section-media"></div>
        <p>Mi trayectoria profesional se caracteriza por un compromiso constante con la excelencia y la mejora continua. He trabajado en proyectos que van desde la creación de sitios web interactivos hasta la implementación de aplicaciones web complejas, siempre con el objetivo de aportar soluciones eficientes y efectivas.</p>
      </div>
    </section>
  )
}
