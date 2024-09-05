import { HeadingProvider } from "./context/HeadingProvider"
import { Navbar } from "./components"
import { 
  AboutSection,
  HeroSection, 
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
        </main>
      </HeadingProvider>
    </>
  )
}
