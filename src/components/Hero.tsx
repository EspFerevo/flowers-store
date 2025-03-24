import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  // Анімація при завантаженні
  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(titleRef.current, {
      duration: 1.2,
      y: 100,
      opacity: 0,
      ease: "power4.out",
    })
    .from(subtitleRef.current, {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: "power3.out",
    }, "-=0.8")
    .from(".hero__btn", {
      duration: 0.8,
      y: 20,
      opacity: 0,
      ease: "power3.out",
    }, "-=0.6");

    // Паралакс ефект при скролі
    const handleParallax = () => {
      if (!sectionRef.current) return;

      const scrollPosition = window.scrollY;
      const section = sectionRef.current;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      // Якщо секція видима
      if (scrollPosition >= sectionTop - window.innerHeight &&
          scrollPosition <= sectionTop + sectionHeight) {

        const yValue = (scrollPosition - sectionTop) * 0.4;
        if (imageRef.current) {
          // Анімація зображення з ефектом паралаксу
          gsap.to(imageRef.current, {
            y: yValue,
            duration: 0.6,
            ease: "power1.out"
          });
        }
      }
    };

    window.addEventListener('scroll', handleParallax);
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  return (
    <section ref={sectionRef} id="home" className="hero section">
      <div ref={imageRef} className="hero__bg-image"></div>
      <div className="hero__overlay"></div>

      <div className="container hero__container">
        <div className="hero__content">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="hero__text"
          >
            <h1 ref={titleRef} className="hero__title">
              <span className="text-accent">Вишукані букети</span><br />
              для особливих моментів
            </h1>
            <h2 ref={subtitleRef} className="hero__subtitle">
              Квіти, які розкажуть вашу історію
            </h2>

            <a
              href="https://www.instagram.com/themflo/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-animated hero__btn"
            >
              Замовити букет
            </a>
          </motion.div>
        </div>

        <div className="hero__scroll-indicator">
          <div className="hero__mouse">
            <div className="hero__mouse-wheel"></div>
          </div>
          <div className="hero__scroll-text">Гортай вниз</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
