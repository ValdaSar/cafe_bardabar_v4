import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-heading font-bold text-primary">
          Бар-да-бар
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="font-medium hover:text-primary transition-colors">
            Главная
          </Link>
          <Link href="/menu" className="font-medium hover:text-primary transition-colors">
            Меню
          </Link>
          <Link href="/events" className="font-medium hover:text-primary transition-colors">
            Афиша
          </Link>
          <Link href="/reservation" className="font-medium hover:text-primary transition-colors">
            Бронирование
          </Link>
          <Link href="/contacts" className="font-medium hover:text-primary transition-colors">
            Контакты
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-500 hover:text-primary"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md p-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Главная
              </Link>
              <Link
                href="/menu"
                className="font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Меню
              </Link>
              <Link
                href="/events"
                className="font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Афиша
              </Link>
              <Link
                href="/reservation"
                className="font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Бронирование
              </Link>
              <Link
                href="/contacts"
                className="font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Контакты
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;