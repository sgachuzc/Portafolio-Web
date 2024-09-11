import { useEffect, useState } from "react"
import '../styles/components/ScrollButton.css'

export const ScrollButton = () => {

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => { 
    const scrolled = document.documentElement.scrollTop; 
    if (scrolled > 300){ 
      setVisible(true) 
    }  
    else if (scrolled <= 300){ 
      setVisible(false) 
    } 
  }

  const onScrollTop = () => {
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible); 
  }, [visible]);

  return (
    <button className="scroll-button animate__animated animate__fadeInRight" style={{ display: visible ? 'inline' : 'none' }} onClick={ onScrollTop }>
      <img src="/images/scroll.svg" alt="" />
    </button>
  )
}
