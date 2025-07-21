import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero секция */}
      <section className="relative bg-primary text-white py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Кафе "Бар-да-бар"
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
            Уютное место с отличной кухней и атмосферой для встреч с друзьями и семейных ужинов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/menu" className="btn btn-accent">
              Посмотреть меню
            </Link>
            <Link href="/reservation" className="btn btn-outline text-white border-white hover:bg-white hover:text-primary">
              Забронировать столик
            </Link>
          </div>
        </div>
      </section>

      {/* О нас */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">О нашем кафе</h2>
              <p className="mb-4 text-lg">
                "Бар-да-бар" - это место, где каждый гость чувствует себя как дома. Мы создали уютное пространство, где можно насладиться вкусной едой, отличными напитками и приятной атмосферой.
              </p>
              <p className="mb-6 text-lg">
                Наша кухня сочетает традиционные рецепты с современными кулинарными тенденциями, а бар предлагает широкий выбор напитков на любой вкус.
              </p>
              <Link href="/contacts" className="btn btn-primary">
                Узнать больше
              </Link>
            </div>
            <div className="md:w-1/2 bg-gray-200 rounded-lg overflow-hidden h-80 flex items-center justify-center">
              <div className="text-gray-500 text-xl">Фото интерьера кафе</div>
            </div>
          </div>
        </div>
      </section>

      {/* Меню */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary text-center">Наше меню</h2>
          <p className="text-xl text-center mb-12">Попробуйте наши фирменные блюда</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    Фото блюда
                    <br />
                    {item}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-primary">Блюдо {item}</h3>
                  <p className="text-gray-600 mb-4">
                    Описание блюда с ингредиентами и особенностями приготовления.
                  </p>
                  <div className="flex justify-end">
                    <span className="text-primary font-bold">₽450</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/menu" className="btn btn-primary">
              Полное меню
            </Link>
          </div>
        </div>
      </section>

      {/* Мероприятия */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary text-center">Ближайшие мероприятия</h2>
          <p className="text-xl text-center mb-12">Присоединяйтесь к нашим событиям</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-background rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    Афиша мероприятия
                    <br />
                    {item}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-accent font-bold mb-2">25 июля, 19:00</div>
                  <h3 className="text-xl font-bold mb-2 text-primary">Мероприятие {item}</h3>
                  <p className="text-gray-600 mb-4">
                    Краткое описание мероприятия и что ожидает гостей.
                  </p>
                  <Link href={`/events/${item}`} className="text-primary font-medium hover:underline">
                    Подробнее →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/events" className="btn btn-primary">
              Все мероприятия
            </Link>
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary text-center">Отзывы наших гостей</h2>
          <p className="text-xl text-center mb-12">Что говорят о нас посетители</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                  А
                </div>
                <div>
                  <h3 className="font-bold text-lg">Анна М.</h3>
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
                Отличное место! Вкусная еда, приятная атмосфера и внимательный персонал. Обязательно вернусь сюда снова.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                  Д
                </div>
                <div>
                  <h3 className="font-bold text-lg">Дмитрий К.</h3>
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
                Регулярно посещаю это кафе с друзьями. Здесь всегда можно хорошо провести время и вкусно поесть. Рекомендую!
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                  Е
                </div>
                <div>
                  <h3 className="font-bold text-lg">Елена В.</h3>
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
                Уютное место с отличной кухней. Особенно понравились десерты и кофе. Персонал очень приветливый.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Забронируйте столик прямо сейчас</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Не упустите возможность провести время в приятной атмосфере с вкусной едой и напитками
          </p>
          <Link href="/reservation" className="btn bg-white text-primary hover:bg-opacity-90 text-lg px-8 py-3">
            Забронировать
          </Link>
        </div>
      </section>
    </main>
  );
}