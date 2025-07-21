'use client';

import { useState } from 'react';

// Моковые данные для категорий меню
const categories = [
  { id: 1, name: 'Все' },
  { id: 2, name: 'Бургеры' },
  { id: 3, name: 'Закуски' },
  { id: 4, name: 'Напитки' },
  { id: 5, name: 'Десерты' },
  { id: 6, name: 'Специальные предложения' },
];

// Моковые данные для блюд
const menuItems = [
  {
    id: 1,
    name: 'Бургер "Классический"',
    description: 'Сочная говяжья котлета, свежие овощи, фирменный соус и хрустящая булочка.',
    price: 450,
    category: 'Бургеры',
    image: '/burger1.jpg'
  },
  {
    id: 2,
    name: 'Бургер "Двойной сыр"',
    description: 'Две говяжьи котлеты, двойная порция сыра чеддер, маринованные огурцы и специальный соус.',
    price: 550,
    category: 'Бургеры',
    image: '/burger2.jpg'
  },
  {
    id: 3,
    name: 'Картофель фри',
    description: 'Хрустящий картофель с солью и специями. Подается с кетчупом.',
    price: 250,
    category: 'Закуски',
    image: '/fries.jpg'
  },
  {
    id: 4,
    name: 'Луковые кольца',
    description: 'Хрустящие кольца лука в панировке. Подаются с чесночным соусом.',
    price: 280,
    category: 'Закуски',
    image: '/onion-rings.jpg'
  },
  {
    id: 5,
    name: 'Лимонад домашний',
    description: 'Освежающий лимонад из свежих фруктов и ягод.',
    price: 200,
    category: 'Напитки',
    image: '/lemonade.jpg'
  },
  {
    id: 6,
    name: 'Молочный коктейль',
    description: 'Классический молочный коктейль с мороженым. Доступны разные вкусы.',
    price: 300,
    category: 'Напитки',
    image: '/milkshake.jpg'
  },
  {
    id: 7,
    name: 'Чизкейк Нью-Йорк',
    description: 'Классический чизкейк с нежной текстурой и ягодным соусом.',
    price: 350,
    category: 'Десерты',
    image: '/cheesecake.jpg'
  },
  {
    id: 8,
    name: 'Шоколадный фондан',
    description: 'Теплый шоколадный кекс с жидкой начинкой. Подается с шариком мороженого.',
    price: 380,
    category: 'Десерты',
    image: '/fondant.jpg'
  },
  {
    id: 9,
    name: 'Сет "Бар-да-бар"',
    description: 'Фирменный сет из мини-бургеров, закусок и соусов. Идеально для компании.',
    price: 1200,
    category: 'Специальные предложения',
    image: '/set.jpg'
  },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('Все');
  const [searchQuery, setSearchQuery] = useState('');

  // Фильтрация блюд по категории и поисковому запросу
  const filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === 'Все' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen py-12 bg-background">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary text-center">Меню</h1>
        
        {/* Поиск */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Поиск блюд..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              onClick={() => setSearchQuery('')}
            >
              {searchQuery && 'Очистить'}
            </button>
          </div>
        </div>
        
        {/* Фильтры по категориям */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full ${activeCategory === category.name ? 'bg-primary text-white' : 'bg-white text-primary border border-primary'}`}
              onClick={() => setActiveCategory(category.name)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Список блюд */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  Фото блюда
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-bold text-lg">₽{item.price}</span>
                  <button className="btn btn-primary py-2 px-4">В корзину</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">Блюда не найдены. Попробуйте изменить параметры поиска.</p>
          </div>
        )}
      </div>
    </main>
  );
}