import { useEffect, useState } from "react";
import '../styles/components/Footer.css'

export const Footer = () => {
  const [year, setYear] = useState();
  
  useEffect(() => {
    const actualYear = new Date().getFullYear()
    setYear(actualYear)
  }, [year]);
  
  return (
    <footer className="footer">
      <div className="footer-copy">
        <p>
          Copyright <span>Ⓒ</span> {year}
        </p>
      </div>
    </footer>
  )
}
