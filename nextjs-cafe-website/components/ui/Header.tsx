'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Логотип */}
          <Link href="/" className="text-2xl font-bold">
            Бар-да-бар
          </Link>

          {/* Мобильное меню кнопка */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <span className="text-2xl">✕</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </button>

          {/* Десктопное меню */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-accent transition-colors">
              Главная
            </Link>
            <Link href="/menu" className="hover:text-accent transition-colors">
              Меню
            </Link>
            <Link href="/events" className="hover:text-accent transition-colors">
              Мероприятия
            </Link>
            <Link href="/reservation" className="hover:text-accent transition-colors">
              Бронирование
            </Link>
            <Link href="/contacts" className="hover:text-accent transition-colors">
              Контакты
            </Link>
          </nav>

          {/* Кнопка бронирования (только на десктопе) */}
          <div className="hidden md:block">
            <Link href="/reservation" className="btn btn-accent">
              Забронировать
            </Link>
          </div>
        </div>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary/95 absolute top-16 left-0 right-0 z-50">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="/"
              className="py-2 hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </Link>
            <Link
              href="/menu"
              className="py-2 hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Меню
            </Link>
            <Link
              href="/events"
              className="py-2 hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Мероприятия
            </Link>
            <Link
              href="/reservation"
              className="py-2 hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Бронирование
            </Link>
            <Link
              href="/contacts"
              className="py-2 hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Контакты
            </Link>
            <Link
              href="/reservation"
              className="btn btn-accent inline-block text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Забронировать
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}