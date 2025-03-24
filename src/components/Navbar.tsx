import { useState, useEffect } from 'react';
import * as ReactScroll from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const { Link } = ReactScroll;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Відслідковування скролу
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Закриття меню при кліку на пункт
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar__container">
        <Link
          to="home"
          className="navbar__logo"
          smooth={true}
          duration={500}
          offset={-70}
        >
          <h3>M.FLO</h3>
        </Link>

        <div className={`navbar__menu-toggle ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="navbar__mobile-menu"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3 }}
            >
              <ul>
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    onClick={closeMenu}
                    offset={-70}
                  >
                    Головна
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    onClick={closeMenu}
                    offset={-70}
                  >
                    Про нас
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Link
                    to="gallery"
                    smooth={true}
                    duration={500}
                    onClick={closeMenu}
                    offset={-70}
                  >
                    Галерея
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    onClick={closeMenu}
                    offset={-70}
                  >
                    Контакти
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <a
                    href="https://www.instagram.com/themflo/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="navbar__order-link"
                    onClick={closeMenu}
                  >
                    Замовити букет
                  </a>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        <ul className="navbar__menu">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
              offset={-70}
            >
              Головна
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
              offset={-70}
            >
              Про нас
            </Link>
          </li>
          <li>
            <Link
              to="gallery"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
              offset={-70}
            >
              Галерея
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
              offset={-70}
            >
              Контакти
            </Link>
          </li>
          <li>
            <a
              href="https://www.instagram.com/themflo/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__order-btn btn btn-animated"
            >
              Замовити букет
            </a>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
