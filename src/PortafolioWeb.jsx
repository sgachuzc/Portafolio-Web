import { HeadingProvider } from "./context/HeadingProvider"
import { Navbar } from "./components"

export const PortafolioWeb = () => {
  return (
    <>
      <HeadingProvider>
        <Navbar />
        <main>
        </main>
      </HeadingProvider>
    </>
  )
}
