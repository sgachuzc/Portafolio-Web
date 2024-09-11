/* eslint-disable no-unused-vars */
import { 
  ProjectCard, 
  TitleSection 
} from "../components"
import { projects } from "../data";
import { useWindowDimensions } from '../hooks/useWindowDimensions';
import { 
  Splide, 
  SplideSlide 
} from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';

export const ProjectsSection = () => {
  const { width } = useWindowDimensions();
  const slidePerPage = (width) => {
    return (width < 767) ? 1 : 2;
  }
  return (
    <section className="container other-section">
      <div className="row">
        <TitleSection title = 'Proyectos'/>
        <div className="section-content">
          <Splide aria-label="Mis proyectos" options={{ rewind: true, gap: '1.5rem', perPage: 1, }}>
              {
                projects.map( project => (
                  <SplideSlide key={project.id}>
                      <ProjectCard dataProject={project} />
                  </SplideSlide>
                ))
              }
            </Splide>
        </div>
      </div>
    </section>
  )
}
