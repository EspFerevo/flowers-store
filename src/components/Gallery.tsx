import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Дані для галереї
const galleryData = [
  {
    id: 1,
    title: 'Весняний настрій',
    description: 'Композиція з весняних квітів у ніжних відтінках',
    category: 'spring',
    image: 'https://cdn11.bigcommerce.com/s-x49po/images/stencil/1500x1500/products/131912/298896/prints%2Fdownscaled%2Fp_rqycikwxl6h_2000x2000__11607.1732864469.jpg?c=2'
  },
  {
    id: 2,
    title: 'Вечірня елегантність',
    description: 'Букет з троянд та півоній для особливих вечірніх подій',
    category: 'luxury',
    image: 'https://www.brides.com/thmb/p_vWcVlMdrd4-nHSB4vUbm1gn5o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/black-and-white-tablescape-recirc-9b0806a571ec442f9d6337fe7e67a233.jpg'
  },
  {
    id: 3,
    title: 'Сонячне сяйво',
    description: 'Яскравий букет соняшників та польових квітів',
    category: 'bright',
    image: 'https://i.etsystatic.com/51684931/r/il/40abd1/6134056059/il_570xN.6134056059_eehf.jpg'
  },
  {
    id: 4,
    title: 'Витончена ніжність',
    description: 'Вишукана композиція для романтичного подарунку',
    category: 'love',
    image: 'https://celebritycakestudio.com/cdn/shop/files/ACS_1876.jpg?v=1709341101'
  },
  {
    id: 5,
    title: 'Екзотичний шарм',
    description: 'Екзотичні квіти та зелень у стильному оформленні',
    category: 'exotic',
    image: 'https://marketplace.canva.com/EAGRxHbLzZM/1/0/1600w/canva-beige-and-black-elegant-botanical-floral-initial-logo-QwwCi-9ts88.jpg'
  },
  {
    id: 6,
    title: 'Класична розкіш',
    description: 'Класичний букет з троянд, що ніколи не виходить з моди',
    category: 'classic',
    image: 'https://marketplace.canva.com/EAGRJ_1USGg/1/0/1600w/canva-beige-elegant-and-beauty-flower-store-logo-6QuzkjRlnNE.jpg'
  }
];

// Категорії фільтрації
const categories = [
  { id: 'all', name: 'Всі' },
  { id: 'spring', name: 'Весняні' },
  { id: 'luxury', name: 'Люкс' },
  { id: 'bright', name: 'Яскраві' },
  { id: 'love', name: 'Романтичні' },
  { id: 'exotic', name: 'Екзотичні' },
  { id: 'classic', name: 'Класичні' },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Фільтрація елементів за категорією
  const filteredItems = activeCategory === 'all'
    ? galleryData
    : galleryData.filter(item => item.category === activeCategory);

  // Анімаційні варіанти для контейнера та елементів
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      }
    },
  };

  // Відкриття модального вікна
  const openModal = (id: number) => {
    setSelectedItem(id);
    document.body.style.overflow = 'hidden';
  };

  // Закриття модального вікна
  const closeModal = () => {
    setSelectedItem(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="gallery section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="gallery__header"
        >
          <h2 className="section-title text-center">
            <span className="text-accent">Наші</span> роботи
          </h2>
          <div className="section-divider"></div>

          <div className="gallery__filter">
            {categories.map(category => (
              <button
                key={category.id}
                className={`gallery__filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        <div ref={ref} className="gallery__content">
          <motion.div
            className="gallery__grid"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  variants={itemVariants}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="gallery__item"
                  onClick={() => openModal(item.id)}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <div className="gallery__item-image-container">
                    <div
                      className="gallery__item-image"
                      style={{ backgroundImage: `url(${item.image})` }}
                    ></div>
                    <div className="gallery__item-overlay">
                      <div className="gallery__item-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15 3H21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M9 21H3V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M21 3L14 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M3 21L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="gallery__item-content">
                    <h3 className="gallery__item-title">{item.title}</h3>
                    <p className="gallery__item-description">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Модальне вікно для перегляду */}
        <AnimatePresence>
          {selectedItem !== null && (
            <motion.div
              className="gallery__modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="gallery__modal-overlay" onClick={closeModal}></div>
              <motion.div
                className="gallery__modal-content"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', damping: 25 }}
              >
                <button className="gallery__modal-close" onClick={closeModal}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                {galleryData.find(item => item.id === selectedItem) && (
                  <>
                    <div
                      className="gallery__modal-image"
                      style={{
                        backgroundImage: `url(${galleryData.find(item => item.id === selectedItem)?.image})`
                      }}
                    ></div>
                    <div className="gallery__modal-info">
                      <h3>{galleryData.find(item => item.id === selectedItem)?.title}</h3>
                      <p>{galleryData.find(item => item.id === selectedItem)?.description}</p>
                      <a
                        href="https://www.instagram.com/themflo/?hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-animated"
                      >
                        Замовити схожий букет
                      </a>
                    </div>
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
