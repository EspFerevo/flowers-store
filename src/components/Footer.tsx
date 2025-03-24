import * as ReactScroll from 'react-scroll';
import { motion } from 'framer-motion';

const { Link } = ReactScroll;

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__brand">
            <h3 className="footer__logo">M.FLO</h3>
            <p className="footer__description">
              Вишукані букети для особливих моментів.
              Кожен букет - це емоція, яку ми передаємо через квіти.
            </p>
          </div>

          <div className="footer__links">
            <h4 className="footer__title">Швидка навігація</h4>
            <ul className="footer__menu">
              <li>
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="footer__link"
                >
                  Головна
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="footer__link"
                >
                  Про нас
                </Link>
              </li>
              <li>
                <Link
                  to="gallery"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="footer__link"
                >
                  Галерея
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="footer__link"
                >
                  Контакти
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer__contact">
            <h4 className="footer__title">Контакти</h4>
            <ul className="footer__contact-list">
              <li>
                <a href="tel:+380501234567" className="footer__contact-link">
                  +38 (050) 123-45-67
                </a>
              </li>
              <li>
                <a href="mailto:info@mflo.ua" className="footer__contact-link">
                  info@mflo.ua
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/themflo/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__contact-link footer__instagram"
                >
                  <span>Instagram</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <motion.div
          className="footer__bottom"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} M.FLO. Всі права захищені.
          </p>
          <div className="footer__button">
            <Link
              to="home"
              smooth={true}
              duration={800}
              className="footer__scroll-top"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
