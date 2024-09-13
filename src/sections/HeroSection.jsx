/* eslint-disable no-unused-vars */
import { 
  useContext, 
  useEffect, 
  useRef, 
  useState } from 'react';
import { HeadingContext } from '../context/HeadingContext';
import { ReactTyped } from 'react-typed'; 
import '../styles/sections/HeroSection.css'

export const HeroSection = () => {
  const textToType = [
    "Desarrollador Web",
    "Ing. en Sistemas Computacionales",
  ]

  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const { setTitle } = useContext( HeadingContext )

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const isVisible = (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
        setIsVisible(isVisible);
        setTitle(isVisible)
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <section className='container main-section'>
      <div className="row">
        <span className='subtitle'>
          Hola🫡, soy
        </span>
        <h1 className='title'>
          Sergio<br />Gachúz
        </h1>
        <ReactTyped strings={ textToType } typeSpeed={ 40 } backSpeed={ 30 } /> 
        <div className="container-download-cv" ref={elementRef}>
          <a className='btn-download' target='_blank' title='Abre en otra pestaña' href='/docs/Curriculum.pdf' tabIndex="0">
            Descargar CV 
            <i className="fa-regular fa-circle-down"></i>
          </a>
        </div>
      </div>
    </section>
  )
}
