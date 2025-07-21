import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        ></div>
        <div className="container mx-auto px-4 relative z-20 text-white">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Кафе "Бар-да-бар"
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Уютное место, где вкусная еда, приятная атмосфера и отличное настроение!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/menu" className="btn btn-primary">
                Наше меню
              </Link>
              <Link href="/reservation" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary">
                Забронировать столик
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">О нашем кафе</h2>
              <p className="mb-4">
                Кафе "Бар-да-бар" — это уникальное место в центре города, где каждый найдет что-то по душе. 
                Мы создали пространство, в котором сочетаются уютная атмосфера, изысканная кухня и отличное обслуживание.
              </p>
              <p className="mb-4">
                Наша команда профессионалов готовит для вас блюда из свежих и качественных продуктов. 
                Мы постоянно обновляем меню, чтобы удивлять вас новыми вкусами и сочетаниями.
              </p>
              <p className="mb-6">
                В "Бар-да-бар" регулярно проходят интересные мероприятия: живая музыка, тематические вечеринки, 
                мастер-классы и дегустации. Следите за нашей афишей, чтобы не пропустить ничего интересного!
              </p>
              <Link href="/contacts" className="btn btn-primary">
                Узнать больше
              </Link>
            </div>
            <div className="md:w-1/2 relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/about-image.jpg')" }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Наше меню</h2>
            <p className="max-w-2xl mx-auto text-lg">
              Попробуйте наши фирменные блюда, приготовленные с любовью и вниманием к деталям
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Menu Item 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-64 relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/menu-item-1.jpg')" }}
                ></div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold">Фирменный бургер</h3>
                  <span className="text-accent font-bold">450 ₽</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Сочная говяжья котлета, свежие овощи, фирменный соус и хрустящая булочка
                </p>
                <Link href="/menu" className="text-primary font-medium hover:underline">
                  Подробнее
                </Link>
              </div>
            </div>

            {/* Menu Item 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-64 relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/menu-item-2.jpg')" }}
                ></div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold">Цезарь с курицей</h3>
                  <span className="text-accent font-bold">380 ₽</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Хрустящие листья салата, нежное куриное филе, сыр пармезан и фирменная заправка
                </p>
                <Link href="/menu" className="text-primary font-medium hover:underline">
                  Подробнее
                </Link>
              </div>
            </div>

            {/* Menu Item 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-64 relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/menu-item-3.jpg')" }}
                ></div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold">Тирамису</h3>
                  <span className="text-accent font-bold">320 ₽</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Нежный десерт с маскарпоне, печеньем савоярди, пропитанным кофе и ликером
                </p>
                <Link href="/menu" className="text-primary font-medium hover:underline">
                  Подробнее
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/menu" className="btn btn-primary">
              Смотреть все меню
            </Link>
          </div>
        </div>
      </section>

      {/* Events Preview Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ближайшие мероприятия</h2>
            <p className="max-w-2xl mx-auto text-lg">
              Присоединяйтесь к нашим увлекательным мероприятиям и проведите время с удовольствием
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Event 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md text-text">
              <div className="h-48 relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/event-1.jpg')" }}
                ></div>
                <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                  25 июля
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Джазовый вечер</h3>
                <p className="text-gray-600 mb-4">
                  Живая музыка от лучших джазовых музыкантов города. Начало в 19:00.
                </p>
                <Link href="/events" className="text-primary font-medium hover:underline">
                  Подробнее
                </Link>
              </div>
            </div>

            {/* Event 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md text-text">
              <div className="h-48 relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/event-2.jpg')" }}
                ></div>
                <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                  27 июля
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Винная дегустация</h3>
                <p className="text-gray-600 mb-4">
                  Дегустация итальянских вин с сомелье. Начало в 18:00.
                </p>
                <Link href="/events" className="text-primary font-medium hover:underline">
                  Подробнее
                </Link>
              </div>
            </div>

            {/* Event 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md text-text">
              <div className="h-48 relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/event-3.jpg')" }}
                ></div>
                <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                  30 июля
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Стендап вечер</h3>
                <p className="text-gray-600 mb-4">
                  Выступления молодых комиков. Смех и хорошее настроение гарантированы. Начало в 20:00.
                </p>
                <Link href="/events" className="text-primary font-medium hover:underline">
                  Подробнее
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/events" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary">
              Смотреть все мероприятия
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Отзывы наших гостей</h2>
            <p className="max-w-2xl mx-auto text-lg">
              Что говорят о нас наши посетители
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-bold">Анна К.</h4>
                  <div className="flex text-accent">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "Отличное место! Вкусная еда, приятная атмосфера и внимательный персонал. 
                Особенно понравился фирменный бургер и тирамису. Обязательно вернусь снова!"
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-bold">Дмитрий М.</h4>
                  <div className="flex text-accent">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "Был на джазовом вечере - это было потрясающе! Отличная музыка, вкусные коктейли 
                и приятная компания. Рекомендую всем, кто хочет хорошо провести время."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-bold">Елена П.</h4>
                  <div className="flex text-accent">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>☆</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "Отмечали день рождения в кафе 'Бар-да-бар'. Все было на высшем уровне! 
                Отдельное спасибо официанту Максиму за внимательное обслуживание и рекомендации по меню."
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/contacts#reviews" className="btn btn-primary">
              Оставить отзыв
            </Link>
          </div>
        </div>
      </section>

      {/* Reservation CTA Section */}
      <section className="py-16 bg-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Забронируйте столик прямо сейчас</h2>
          <p className="max-w-2xl mx-auto text-lg mb-8">
            Не упустите возможность провести время в приятной атмосфере с вкусной едой и напитками
          </p>
          <Link href="/reservation" className="btn bg-white text-accent hover:bg-opacity-90">
            Забронировать столик
          </Link>
        </div>
      </section>
    </div>
  );
}