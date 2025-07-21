'use client';

import { useState } from 'react';
import Link from 'next/link';

// Моковые данные для мероприятий
const eventTypes = [
  { id: 1, name: 'Все' },
  { id: 2, name: 'Живая музыка' },
  { id: 3, name: 'DJ-сеты' },
  { id: 4, name: 'Караоке' },
  { id: 5, name: 'Стендап' },
  { id: 6, name: 'Тематические вечеринки' },
];

const events = [
  {
    id: 1,
    title: 'Джазовый вечер',
    description: 'Вечер живой джазовой музыки от местных музыкантов. Специальное меню и коктейли.',
    date: '2025-07-25',
    time: '19:00',
    type: 'Живая музыка',
    image: '/jazz.jpg'
  },
  {
    id: 2,
    title: 'Летняя вечеринка',
    description: 'Зажигательные ритмы, освежающие коктейли и летнее настроение. DJ Алекс за пультом.',
    date: '2025-07-27',
    time: '21:00',
    type: 'DJ-сеты',
    image: '/summer-party.jpg'
  },
  {
    id: 3,
    title: 'Караоке-баттл',
    description: 'Соревнование вокалистов с призами для победителей. Предварительная запись обязательна.',
    date: '2025-07-30',
    time: '20:00',
    type: 'Караоке',
    image: '/karaoke.jpg'
  },
  {
    id: 4,
    title: 'Стендап вечер',
    description: 'Выступления начинающих и опытных комиков. Смех и хорошее настроение гарантированы.',
    date: '2025-08-02',
    time: '20:00',
    type: 'Стендап',
    image: '/standup.jpg'
  },
  {
    id: 5,
    title: 'Ретро-вечеринка',
    description: 'Музыка и атмосфера 80-х и 90-х. Дресс-код приветствуется!',
    date: '2025-08-05',
    time: '21:00',
    type: 'Тематические вечеринки',
    image: '/retro.jpg'
  },
  {
    id: 6,
    title: 'Акустический вечер',
    description: 'Уютная атмосфера и живая акустическая музыка от талантливых исполнителей.',
    date: '2025-08-10',
    time: '19:00',
    type: 'Живая музыка',
    image: '/acoustic.jpg'
  },
];

export default function EventsPage() {
  const [activeType, setActiveType] = useState('Все');

  // Фильтрация мероприятий по типу
  const filteredEvents = activeType === 'Все' 
    ? events 
    : events.filter(event => event.type === activeType);

  return (
    <main className="min-h-screen py-12 bg-background">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary text-center">Афиша мероприятий</h1>
        
        {/* Фильтры по типу мероприятия */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {eventTypes.map(type => (
            <button
              key={type.id}
              className={`px-4 py-2 rounded-full ${activeType === type.name ? 'bg-primary text-white' : 'bg-white text-primary border border-primary'}`}
              onClick={() => setActiveType(type.name)}
            >
              {type.name}
            </button>
          ))}
        </div>
        
        {/* Список мероприятий */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map(event => (
            <div key={event.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  Афиша мероприятия
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-accent font-bold">
                    {new Date(event.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })}, {event.time}
                  </span>
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">
                    {event.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="flex justify-between items-center">
                  <Link href={`/events/${event.id}`} className="text-primary font-medium hover:underline">
                    Подробнее →
                  </Link>
                  <button className="btn btn-primary py-2 px-4">Забронировать</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">Мероприятия не найдены. Попробуйте выбрать другой тип.</p>
          </div>
        )}
        
        {/* Подписка на уведомления */}
        <div className="mt-16 bg-primary text-white p-8 rounded-lg shadow-md">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Не пропустите новые мероприятия</h2>
            <p className="mb-6">Подпишитесь на уведомления о новых событиях и получайте информацию первыми</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-grow px-4 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="btn bg-accent text-white hover:bg-opacity-90 whitespace-nowrap">
                Подписаться
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}