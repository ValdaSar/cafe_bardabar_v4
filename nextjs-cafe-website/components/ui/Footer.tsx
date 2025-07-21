'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Информация о кафе */}
          <div>
            <h3 className="text-xl font-bold mb-4">Бар-да-бар</h3>
            <p className="mb-4">
              Уютное кафе с отличной кухней и атмосферой для встреч с друзьями и семейных ужинов
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-accent transition-colors">
                Facebook
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors">
                Instagram
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors">
                VK
              </a>
            </div>
          </div>
          
          {/* Навигация */}
          <div>
            <h3 className="text-xl font-bold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-accent transition-colors">
                  Меню
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-accent transition-colors">
                  Мероприятия
                </Link>
              </li>
              <li>
                <Link href="/reservation" className="hover:text-accent transition-colors">
                  Бронирование
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="hover:text-accent transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Контакты */}
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li>г. Москва, ул. Примерная, д. 123</li>
              <li>+7 (999) 123-45-67</li>
              <li>info@bardabar.ru</li>
            </ul>
          </div>
          
          {/* Часы работы */}
          <div>
            <h3 className="text-xl font-bold mb-4">Часы работы</h3>
            <ul className="space-y-2">
              <li>Пн-Чт: 12:00 - 22:00</li>
              <li>Пт-Сб: 12:00 - 23:00</li>
              <li>Вс: 12:00 - 22:00</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2025 Кафе "Бар-да-бар". Все права защищены.</p>
          <div className="mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-accent transition-colors mr-4">
              Политика конфиденциальности
            </Link>
            <Link href="/terms" className="hover:text-accent transition-colors">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}