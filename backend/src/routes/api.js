const express = require('express');
const router = express.Router();
const logger = require('../utils/logger');

// Import route modules
// const menuRoutes = require('./menu');
// const eventsRoutes = require('./events');
// const reservationRoutes = require('./reservation');
// const reviewsRoutes = require('./reviews');

// Mock data for menu items
const menuItems = [
  {
    id: 1,
    name: 'Фирменный бургер',
    description: 'Сочная говяжья котлета, свежие овощи, фирменный соус и хрустящая булочка',
    price: 450,
    category_id: 1,
    image_url: '/menu-item-1.jpg',
    is_active: true
  },
  {
    id: 2,
    name: 'Чизбургер',
    description: 'Говяжья котлета, двойной сыр чеддер, маринованные огурцы, лук и специальный соус',
    price: 420,
    category_id: 1,
    image_url: '/menu-item-2.jpg',
    is_active: true
  },
  // More items would be here in a real application
];

// Mock data for menu categories
const menuCategories = [
  { id: 1, name: 'Бургеры', description: 'Наши фирменные бургеры', sort_order: 1 },
  { id: 2, name: 'Закуски', description: 'Закуски к пиву и не только', sort_order: 2 },
  { id: 3, name: 'Салаты', description: 'Свежие и вкусные салаты', sort_order: 3 },
  { id: 4, name: 'Горячие блюда', description: 'Основные блюда', sort_order: 4 },
  { id: 5, name: 'Десерты', description: 'Сладкие десерты', sort_order: 5 },
  { id: 6, name: 'Напитки', description: 'Прохладительные и горячие напитки', sort_order: 6 },
];

// Mock data for events
const events = [
  {
    id: 1,
    title: 'Джазовый вечер',
    description: 'Живая музыка от лучших джазовых музыкантов города. Специальное меню и атмосфера настоящего джаз-клуба.',
    date_time: '2025-07-25T19:00:00',
    type: 'live-music',
    image_url: '/event-1.jpg',
    is_active: true
  },
  {
    id: 2,
    title: 'Винная дегустация',
    description: 'Дегустация итальянских вин с профессиональным сомелье. В программе: 5 сортов вина, закуски, рассказ об особенностях производства.',
    date_time: '2025-07-27T18:00:00',
    type: 'tastings',
    image_url: '/event-2.jpg',
    is_active: true
  },
  // More events would be here in a real application
];

// Mock data for reviews
const reviews = [
  {
    id: 1,
    name: 'Анна К.',
    rating: 5,
    comment: 'Отличное место! Вкусная еда, приятная атмосфера и внимательный персонал. Особенно понравился фирменный бургер и тирамису. Обязательно вернусь снова!',
    is_approved: true,
    created_at: '2025-07-10T14:23:00'
  },
  {
    id: 2,
    name: 'Дмитрий М.',
    rating: 5,
    comment: 'Был на джазовом вечере - это было потрясающе! Отличная музыка, вкусные коктейли и приятная компания. Рекомендую всем, кто хочет хорошо провести время.',
    is_approved: true,
    created_at: '2025-07-12T19:45:00'
  },
  // More reviews would be here in a real application
];

// API Routes

// Menu endpoints
router.get('/menu', (req, res) => {
  logger.info('GET /api/menu');
  res.json(menuItems);
});

router.get('/menu/categories', (req, res) => {
  logger.info('GET /api/menu/categories');
  res.json(menuCategories);
});

router.get('/menu/:id', (req, res) => {
  const id = parseInt(req.params.id);
  logger.info(`GET /api/menu/${id}`);
  
  const menuItem = menuItems.find(item => item.id === id);
  
  if (!menuItem) {
    return res.status(404).json({ error: 'Menu item not found' });
  }
  
  res.json(menuItem);
});

// Events endpoints
router.get('/events', (req, res) => {
  logger.info('GET /api/events');
  res.json(events);
});

router.get('/events/:id', (req, res) => {
  const id = parseInt(req.params.id);
  logger.info(`GET /api/events/${id}`);
  
  const event = events.find(event => event.id === id);
  
  if (!event) {
    return res.status(404).json({ error: 'Event not found' });
  }
  
  res.json(event);
});

// Reviews endpoints
router.get('/reviews', (req, res) => {
  logger.info('GET /api/reviews');
  // Only return approved reviews
  const approvedReviews = reviews.filter(review => review.is_approved);
  res.json(approvedReviews);
});

router.post('/reviews', (req, res) => {
  logger.info('POST /api/reviews', req.body);
  
  const { name, rating, comment } = req.body;
  
  // Validate input
  if (!name || !rating || !comment) {
    return res.status(400).json({ error: 'Name, rating, and comment are required' });
  }
  
  if (rating < 1 || rating > 5) {
    return res.status(400).json({ error: 'Rating must be between 1 and 5' });
  }
  
  // In a real application, this would be saved to the database
  const newReview = {
    id: reviews.length + 1,
    name,
    rating,
    comment,
    is_approved: false, // New reviews need approval
    created_at: new Date().toISOString()
  };
  
  // For demo purposes, we'll just return the new review
  res.status(201).json(newReview);
});

// Reservation endpoints
router.post('/reservation', (req, res) => {
  logger.info('POST /api/reservation', req.body);
  
  const { name, phone, email, date, time, guests, comments } = req.body;
  
  // Validate input
  if (!name || !phone || !date || !time || !guests) {
    return res.status(400).json({ error: 'Name, phone, date, time, and guests are required' });
  }
  
  // In a real application, this would be saved to the database
  const newReservation = {
    id: 1, // In a real app, this would be generated
    name,
    phone,
    email,
    date,
    time,
    guests,
    comments,
    status: 'pending',
    created_at: new Date().toISOString()
  };
  
  // For demo purposes, we'll just return the new reservation
  res.status(201).json(newReservation);
});

router.get('/reservation/available-times', (req, res) => {
  logger.info('GET /api/reservation/available-times', req.query);
  
  const { date } = req.query;
  
  if (!date) {
    return res.status(400).json({ error: 'Date is required' });
  }
  
  // In a real application, this would check the database for available times
  // For demo purposes, we'll return a fixed set of times
  const availableTimes = [
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
    '18:00', '18:30', '19:00', '19:30', '20:00', '20:30',
    '21:00', '21:30', '22:00'
  ];
  
  res.json(availableTimes);
});

// Contact form endpoint
router.post('/contact', (req, res) => {
  logger.info('POST /api/contact', req.body);
  
  const { name, email, subject, message } = req.body;
  
  // Validate input
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Name, email, subject, and message are required' });
  }
  
  // In a real application, this would send an email or save to the database
  
  res.status(200).json({ success: true, message: 'Contact form submitted successfully' });
});

// Use route modules
// router.use('/menu', menuRoutes);
// router.use('/events', eventsRoutes);
// router.use('/reservation', reservationRoutes);
// router.use('/reviews', reviewsRoutes);

module.exports = router;