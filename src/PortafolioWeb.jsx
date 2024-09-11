import { HeadingProvider } from "./context/HeadingProvider"
import { 
  Footer, 
  Navbar 
} from "./components"
import { 
  AboutSection,
  HeroSection, 
  ProjectsSection, 
  TechSection, 
  WorkSection
} from "./sections"

export const PortafolioWeb = () => {
  return (
    <>
      <HeadingProvider>
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <WorkSection />
          <TechSection/>
          <ProjectsSection/>
        </main>
        <Footer/>
      </HeadingProvider>
    </>
  )
}
