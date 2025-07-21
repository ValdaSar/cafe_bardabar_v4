-- Database schema for Бар-да-бар cafe

-- Drop tables if they exist
DROP TABLE IF EXISTS reservations;
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS menu_items;
DROP TABLE IF EXISTS menu_categories;
DROP TABLE IF EXISTS events;
DROP TABLE IF EXISTS team_members;

-- Create menu_categories table
CREATE TABLE menu_categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description TEXT,
    sort_order INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create menu_items table
CREATE TABLE menu_items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    category_id INTEGER REFERENCES menu_categories(id),
    image_url VARCHAR(500),
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create events table
CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    date_time TIMESTAMP NOT NULL,
    type VARCHAR(50),
    image_url VARCHAR(500),
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create reviews table
CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    comment TEXT NOT NULL,
    is_approved BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create team_members table
CREATE TABLE team_members (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    position VARCHAR(100) NOT NULL,
    description TEXT,
    photo_url VARCHAR(500),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create reservations table
CREATE TABLE reservations (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(100),
    date DATE NOT NULL,
    time TIME NOT NULL,
    guests INTEGER NOT NULL,
    comments TEXT,
    status VARCHAR(20) NOT NULL DEFAULT 'pending',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes
CREATE INDEX idx_menu_items_category ON menu_items(category_id, is_active);
CREATE INDEX idx_events_date_time ON events(date_time, is_active);
CREATE INDEX idx_reviews_approved ON reviews(is_approved, created_at);
CREATE INDEX idx_reservations_date_time ON reservations(date, time);

-- Insert sample data for menu_categories
INSERT INTO menu_categories (name, description, sort_order) VALUES
('Бургеры', 'Наши фирменные бургеры', 1),
('Закуски', 'Закуски к пиву и не только', 2),
('Салаты', 'Свежие и вкусные салаты', 3),
('Горячие блюда', 'Основные блюда', 4),
('Десерты', 'Сладкие десерты', 5),
('Напитки', 'Прохладительные и горячие напитки', 6);

-- Insert sample data for menu_items
INSERT INTO menu_items (name, description, price, category_id, image_url, is_active) VALUES
('Фирменный бургер', 'Сочная говяжья котлета, свежие овощи, фирменный соус и хрустящая булочка', 450, 1, '/menu-item-1.jpg', TRUE),
('Чизбургер', 'Говяжья котлета, двойной сыр чеддер, маринованные огурцы, лук и специальный соус', 420, 1, '/menu-item-2.jpg', TRUE),
('Цезарь с курицей', 'Хрустящие листья салата, нежное куриное филе, сыр пармезан и фирменная заправка', 380, 3, '/menu-item-3.jpg', TRUE),
('Греческий салат', 'Свежие овощи, оливки, сыр фета и оливковое масло', 350, 3, '/menu-item-4.jpg', TRUE),
('Картофель фри', 'Хрустящий картофель с солью и специями', 180, 2, '/menu-item-5.jpg', TRUE),
('Луковые кольца', 'Хрустящие кольца лука в панировке с соусом барбекю', 220, 2, '/menu-item-6.jpg', TRUE),
('Стейк из говядины', 'Сочный стейк из мраморной говядины с гарниром из овощей', 750, 4, '/menu-item-7.jpg', TRUE),
('Паста Карбонара', 'Классическая итальянская паста с беконом, яйцом и сыром пармезан', 420, 4, '/menu-item-8.jpg', TRUE),
('Тирамису', 'Нежный десерт с маскарпоне, печеньем савоярди, пропитанным кофе и ликером', 320, 5, '/menu-item-9.jpg', TRUE),
('Чизкейк', 'Нежный чизкейк с ягодным соусом', 300, 5, '/menu-item-10.jpg', TRUE),
('Латте', 'Эспрессо с молоком и нежной молочной пенкой', 180, 6, '/menu-item-11.jpg', TRUE),
('Фирменный лимонад', 'Освежающий лимонад с мятой и ягодами', 220, 6, '/menu-item-12.jpg', TRUE);

-- Insert sample data for events
INSERT INTO events (title, description, date_time, type, image_url, is_active) VALUES
('Джазовый вечер', 'Живая музыка от лучших джазовых музыкантов города. Специальное меню и атмосфера настоящего джаз-клуба.', '2025-07-25 19:00:00', 'live-music', '/event-1.jpg', TRUE),
('Винная дегустация', 'Дегустация итальянских вин с профессиональным сомелье. В программе: 5 сортов вина, закуски, рассказ об особенностях производства.', '2025-07-27 18:00:00', 'tastings', '/event-2.jpg', TRUE),
('Стендап вечер', 'Выступления молодых комиков. Смех и хорошее настроение гарантированы. Специальное коктейльное меню.', '2025-07-30 20:00:00', 'standup', '/event-3.jpg', TRUE),
('DJ Макс - Ретро вечеринка', 'Лучшие хиты 80-х и 90-х. Танцы до утра и специальные коктейли в стиле ретро.', '2025-08-02 21:00:00', 'dj-sets', '/event-4.jpg', TRUE);

-- Insert sample data for reviews
INSERT INTO reviews (name, rating, comment, is_approved) VALUES
('Анна К.', 5, 'Отличное место! Вкусная еда, приятная атмосфера и внимательный персонал. Особенно понравился фирменный бургер и тирамису. Обязательно вернусь снова!', TRUE),
('Дмитрий М.', 5, 'Был на джазовом вечере - это было потрясающе! Отличная музыка, вкусные коктейли и приятная компания. Рекомендую всем, кто хочет хорошо провести время.', TRUE),
('Елена П.', 4, 'Отмечали день рождения в кафе "Бар-да-бар". Все было на высшем уровне! Отдельное спасибо официанту Максиму за внимательное обслуживание и рекомендации по меню.', TRUE);

-- Insert sample data for team_members
INSERT INTO team_members (name, position, description, photo_url) VALUES
('Алексей Иванов', 'Шеф-повар', 'Опытный шеф-повар с 15-летним стажем работы в лучших ресторанах Москвы и Европы.', '/team-1.jpg'),
('Мария Петрова', 'Управляющий', 'Профессиональный управляющий с опытом работы в ресторанном бизнесе более 10 лет.', '/team-2.jpg'),
('Дмитрий Сидоров', 'Бармен', 'Креативный бармен, создатель фирменных коктейлей нашего кафе.', '/team-3.jpg');