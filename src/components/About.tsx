import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          className="about__header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="section-title text-center">
            <span className="text-accent">Про</span> нас
          </h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="about__content" ref={ref}>
          <div className="about__grid">
            <motion.div
              className="about__image-container"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <div className="about__image">
                <div className="about__image-overlay"></div>
              </div>
            </motion.div>

            <motion.div
              className="about__text"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
              <h3>Чуттєві композиції для неповторних моментів</h3>
              <p>
                M.FLO - це флористична студія, що втілює емоції та почуття у вишуканих квіткових композиціях.
                Кожен букет створюється з душею та увагою до найменших деталей, щоб передати ваше особливе повідомлення.
              </p>
              <p>
                Ми пишаємося тим, що використовуємо лише найсвіжіші квіти та інноваційні дизайнерські рішення,
                які роблять наші композиції унікальними та неповторними. Наша мета - перетворити кожен момент на
                незабутню історію через мову квітів.
              </p>

              <div className="about__features">
                <motion.div
                  className="about__feature"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                >
                  <div className="about__feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 12L11 14L15 10" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="about__feature-text">
                    <h4>Індивідуальний підхід</h4>
                    <p>Кожен букет створюється індивідуально під ваше побажання та настрій</p>
                  </div>
                </motion.div>

                <motion.div
                  className="about__feature"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                >
                  <div className="about__feature-icon">
                    
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 12L11 14L15 10" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                  </div>
                  <div className="about__feature-text">
                    <h4>Свіжі квіти</h4>
                    <p>Працюємо лише з перевіреними постачальниками свіжих квітів</p>
                  </div>
                </motion.div>

                <motion.div
                  className="about__feature"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
                >
                  <div className="about__feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 12L11 14L15 10" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="about__feature-text">
                    <h4>Швидка доставка</h4>
                    <p>Доставимо ваш букет в найкоротші терміни</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
