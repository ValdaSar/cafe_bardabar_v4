import Link from 'next/link';

export default function Menu() {
  // Mock data for menu categories
  const categories = [
    { id: 1, name: 'Бургеры', slug: 'burgers' },
    { id: 2, name: 'Закуски', slug: 'appetizers' },
    { id: 3, name: 'Салаты', slug: 'salads' },
    { id: 4, name: 'Горячие блюда', slug: 'main-courses' },
    { id: 5, name: 'Десерты', slug: 'desserts' },
    { id: 6, name: 'Напитки', slug: 'drinks' },
  ];

  // Mock data for menu items
  const menuItems = [
    {
      id: 1,
      name: 'Фирменный бургер',
      description: 'Сочная говяжья котлета, свежие овощи, фирменный соус и хрустящая булочка',
      price: 450,
      category: 'burgers',
      image: '/menu-item-1.jpg',
    },
    {
      id: 2,
      name: 'Чизбургер',
      description: 'Говяжья котлета, двойной сыр чеддер, маринованные огурцы, лук и специальный соус',
      price: 420,
      category: 'burgers',
      image: '/menu-item-2.jpg',
    },
    {
      id: 3,
      name: 'Цезарь с курицей',
      description: 'Хрустящие листья салата, нежное куриное филе, сыр пармезан и фирменная заправка',
      price: 380,
      category: 'salads',
      image: '/menu-item-3.jpg',
    },
    {
      id: 4,
      name: 'Греческий салат',
      description: 'Свежие овощи, оливки, сыр фета и оливковое масло',
      price: 350,
      category: 'salads',
      image: '/menu-item-4.jpg',
    },
    {
      id: 5,
      name: 'Картофель фри',
      description: 'Хрустящий картофель с солью и специями',
      price: 180,
      category: 'appetizers',
      image: '/menu-item-5.jpg',
    },
    {
      id: 6,
      name: 'Луковые кольца',
      description: 'Хрустящие кольца лука в панировке с соусом барбекю',
      price: 220,
      category: 'appetizers',
      image: '/menu-item-6.jpg',
    },
    {
      id: 7,
      name: 'Стейк из говядины',
      description: 'Сочный стейк из мраморной говядины с гарниром из овощей',
      price: 750,
      category: 'main-courses',
      image: '/menu-item-7.jpg',
    },
    {
      id: 8,
      name: 'Паста Карбонара',
      description: 'Классическая итальянская паста с беконом, яйцом и сыром пармезан',
      price: 420,
      category: 'main-courses',
      image: '/menu-item-8.jpg',
    },
    {
      id: 9,
      name: 'Тирамису',
      description: 'Нежный десерт с маскарпоне, печеньем савоярди, пропитанным кофе и ликером',
      price: 320,
      category: 'desserts',
      image: '/menu-item-9.jpg',
    },
    {
      id: 10,
      name: 'Чизкейк',
      description: 'Нежный чизкейк с ягодным соусом',
      price: 300,
      category: 'desserts',
      image: '/menu-item-10.jpg',
    },
    {
      id: 11,
      name: 'Латте',
      description: 'Эспрессо с молоком и нежной молочной пенкой',
      price: 180,
      category: 'drinks',
      image: '/menu-item-11.jpg',
    },
    {
      id: 12,
      name: 'Фирменный лимонад',
      description: 'Освежающий лимонад с мятой и ягодами',
      price: 220,
      category: 'drinks',
      image: '/menu-item-12.jpg',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/menu-hero.jpg')" }}
        ></div>
        <div className="container mx-auto px-4 relative z-20 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Наше меню
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl">
            Изысканные блюда, приготовленные с любовью и вниманием к деталям
          </p>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-8 bg-background sticky top-16 z-30 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <a
                key={category.id}
                href={`#${category.slug}`}
                className="px-4 py-2 bg-white rounded-full shadow-sm hover:bg-primary hover:text-white transition-colors"
              >
                {category.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {categories.map((category) => (
            <div key={category.id} id={category.slug} className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-primary border-b-2 border-primary pb-2">
                {category.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {menuItems
                  .filter((item) => item.category === category.slug)
                  .map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                    >
                      <div className="h-64 relative">
                        <div 
                          className="absolute inset-0 bg-cover bg-center"
                          style={{ backgroundImage: `url('${item.image}')` }}
                        ></div>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-center mb-3">
                          <h3 className="text-xl font-bold">{item.name}</h3>
                          <span className="text-accent font-bold">{item.price} ₽</span>
                        </div>
                        <p className="text-gray-600 mb-4">{item.description}</p>
                        <button className="text-primary font-medium hover:underline">
                          Добавить в заказ
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* QR Code CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Хотите меню всегда под рукой?</h2>
          <p className="max-w-2xl mx-auto text-lg mb-8">
            Сохраните наше меню в своем телефоне с помощью QR-кода
          </p>
          <Link href="/qr-generator" className="btn bg-white text-primary hover:bg-opacity-90">
            Получить QR-код
          </Link>
        </div>
      </section>
    </div>
  );
}