import { HeadingProvider } from "./context/HeadingProvider"
import { 
  Footer, 
  Navbar, 
  ScrollButton
} from "./components"
import { 
  AboutSection,
  ContactSection,
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
          <ContactSection/>
        </main>
        <Footer/>
        <ScrollButton/>
      </HeadingProvider>
    </>
  )
}
