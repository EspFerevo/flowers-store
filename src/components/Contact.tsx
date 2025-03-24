import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <motion.div
          className="contact__header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title text-center">
            <span className="text-accent">Контактна</span> інформація
          </h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="contact__content" ref={ref}>
          <div className="contact__grid">
            <motion.div
              className="contact__info"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="var(--accent-primary)"/>
                  </svg>
                </div>
                <div className="contact__info-text">
                  <h3>Ім'я</h3>
                  <p>M.FLO Квіткова студія</p>
                </div>
              </div>

              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="var(--accent-primary)"/>
                  </svg>
                </div>
                <div className="contact__info-text">
                  <h3>Email</h3>
                  <p>
                    <a href="mailto:info@mflo.ua">info@mflo.ua</a>
                  </p>
                </div>
              </div>

              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="var(--accent-primary)"/>
                  </svg>
                </div>
                <div className="contact__info-text">
                  <h3>Телефон</h3>
                  <p>
                    <a href="tel:+380501234567">+38 (050) 123-45-67</a>
                  </p>
                </div>
              </div>

              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="var(--accent-primary)"/>
                  </svg>
                </div>
                <div className="contact__info-text">
                  <h3>Соціальні мережі</h3>
                  <div className="contact__social">
                    <a
                      href="https://www.instagram.com/themflo/?hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact__social-link"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C18.102 2.291 18.9 2.491 19.6 2.791C20.3 3.091 20.892 3.498 21.484 4.089C22.075 4.681 22.482 5.273 22.782 5.973C23.082 6.673 23.282 7.471 23.34 8.723C23.398 9.989 23.41 10.369 23.41 13.573C23.41 16.777 23.398 17.157 23.34 18.423C23.282 19.675 23.082 20.473 22.782 21.173C22.482 21.873 22.075 22.465 21.484 23.057C20.892 23.649 20.3 24.057 19.6 24.357C18.9 24.657 18.102 24.857 16.85 24.915C15.584 24.973 15.204 24.985 12 24.985C8.796 24.985 8.416 24.973 7.15 24.915C5.898 24.857 5.1 24.657 4.4 24.357C3.7 24.057 3.108 23.649 2.516 23.057C1.924 22.465 1.516 21.873 1.216 21.173C0.916 20.473 0.716 19.675 0.658 18.423C0.6 17.157 0.588 16.777 0.588 13.573C0.588 10.369 0.6 9.989 0.658 8.723C0.716 7.471 0.916 6.673 1.216 5.973C1.516 5.273 1.924 4.681 2.516 4.089C3.108 3.498 3.7 3.091 4.4 2.791C5.1 2.491 5.898 2.291 7.15 2.233C8.416 2.175 8.796 2.163 12 2.163ZM12 0C8.741 0 8.333 0.014 7.053 0.072C5.775 0.13 4.904 0.333 4.14 0.63C3.351 0.932 2.681 1.347 2.014 2.014C1.347 2.681 0.932 3.351 0.63 4.14C0.333 4.904 0.13 5.775 0.072 7.053C0.014 8.333 0 8.741 0 12C0 15.259 0.014 15.667 0.072 16.947C0.13 18.224 0.333 19.096 0.63 19.86C0.932 20.649 1.347 21.319 2.014 21.986C2.681 22.652 3.351 23.068 4.14 23.37C4.904 23.667 5.775 23.87 7.053 23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.667 23.986 16.947 23.928C18.224 23.87 19.096 23.667 19.86 23.37C20.649 23.068 21.319 22.652 21.986 21.986C22.652 21.319 23.068 20.649 23.37 19.86C23.667 19.096 23.87 18.224 23.928 16.947C23.986 15.667 24 15.259 24 12C24 8.741 23.986 8.333 23.928 7.053C23.87 5.775 23.667 4.904 23.37 4.14C23.068 3.351 22.652 2.681 21.986 2.014C21.319 1.347 20.649 0.932 19.86 0.63C19.096 0.333 18.224 0.13 16.947 0.072C15.667 0.014 15.259 0 12 0Z" fill="white"/>
                        <path d="M12 5.838C8.597 5.838 5.838 8.597 5.838 12C5.838 15.403 8.597 18.162 12 18.162C15.403 18.162 18.162 15.403 18.162 12C18.162 8.597 15.403 5.838 12 5.838ZM12 16C9.791 16 8 14.209 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12C16 14.209 14.209 16 12 16Z" fill="white"/>
                        <path d="M19.846 5.595C19.846 6.39 19.2 7.036 18.405 7.036C17.611 7.036 16.966 6.39 16.966 5.595C16.966 4.8 17.611 4.155 18.405 4.155C19.2 4.155 19.846 4.8 19.846 5.595Z" fill="white"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="contact__form-container"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3>Маєте запитання?</h3>
              <p>Надішліть нам повідомлення або оформіть замовлення через Instagram.</p>

              <a
                href="https://www.instagram.com/themflo/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-animated"
              >
                Перейти в Instagram
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
