import Link from 'next/link';

export default function Events() {
  // Mock data for event types
  const eventTypes = [
    { id: 1, name: 'Все', slug: 'all' },
    { id: 2, name: 'Живая музыка', slug: 'live-music' },
    { id: 3, name: 'DJ-сеты', slug: 'dj-sets' },
    { id: 4, name: 'Дегустации', slug: 'tastings' },
    { id: 5, name: 'Стендап', slug: 'standup' },
  ];

  // Mock data for events
  const events = [
    {
      id: 1,
      title: 'Джазовый вечер',
      description: 'Живая музыка от лучших джазовых музыкантов города. Специальное меню и атмосфера настоящего джаз-клуба.',
      date: '2025-07-25',
      time: '19:00',
      type: 'live-music',
      image: '/event-1.jpg',
    },
    {
      id: 2,
      title: 'Винная дегустация',
      description: 'Дегустация итальянских вин с профессиональным сомелье. В программе: 5 сортов вина, закуски, рассказ об особенностях производства.',
      date: '2025-07-27',
      time: '18:00',
      type: 'tastings',
      image: '/event-2.jpg',
    },
    {
      id: 3,
      title: 'Стендап вечер',
      description: 'Выступления молодых комиков. Смех и хорошее настроение гарантированы. Специальное коктейльное меню.',
      date: '2025-07-30',
      time: '20:00',
      type: 'standup',
      image: '/event-3.jpg',
    },
    {
      id: 4,
      title: 'DJ Макс - Ретро вечеринка',
      description: 'Лучшие хиты 80-х и 90-х. Танцы до утра и специальные коктейли в стиле ретро.',
      date: '2025-08-02',
      time: '21:00',
      type: 'dj-sets',
      image: '/event-4.jpg',
    },
    {
      id: 5,
      title: 'Акустический вечер',
      description: 'Уютная атмосфера и живая акустическая музыка. Выступление молодых исполнителей.',
      date: '2025-08-05',
      time: '19:30',
      type: 'live-music',
      image: '/event-5.jpg',
    },
    {
      id: 6,
      title: 'Дегустация крафтового пива',
      description: 'Презентация новых сортов крафтового пива от локальных производителей. Специальное меню закусок.',
      date: '2025-08-08',
      time: '18:00',
      type: 'tastings',
      image: '/event-6.jpg',
    },
    {
      id: 7,
      title: 'DJ Ночь - Электронная музыка',
      description: 'Лучшие треки электронной музыки от известного DJ. Специальное коктейльное меню и световое шоу.',
      date: '2025-08-10',
      time: '22:00',
      type: 'dj-sets',
      image: '/event-7.jpg',
    },
    {
      id: 8,
      title: 'Стендап батл',
      description: 'Соревнование молодых комиков. Приходите поддержать участников и посмеяться от души.',
      date: '2025-08-15',
      time: '20:00',
      type: 'standup',
      image: '/event-8.jpg',
    },
  ];

  // Format date function
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      day: 'numeric', 
      month: 'long',
      year: 'numeric'
    };
    return new Date(dateString).toLocaleDateString('ru-RU', options);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/events-hero.jpg')" }}
        ></div>
        <div className="container mx-auto px-4 relative z-20 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Афиша мероприятий
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl">
            Присоединяйтесь к нашим увлекательным мероприятиям и проведите время с удовольствием
          </p>
        </div>
      </section>

      {/* Event Filters */}
      <section className="py-8 bg-background sticky top-16 z-30 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {eventTypes.map((type) => (
              <a
                key={type.id}
                href={`#${type.slug}`}
                className="px-4 py-2 bg-white rounded-full shadow-sm hover:bg-primary hover:text-white transition-colors"
              >
                {type.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="h-64 relative">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${event.image}')` }}
                  ></div>
                  <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                    {formatDate(event.date)}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-bold">{event.title}</h3>
                    <span className="text-primary font-medium">{event.time}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                      {eventTypes.find(type => type.slug === event.type)?.name}
                    </span>
                    <Link href={`/events/${event.id}`} className="text-primary font-medium hover:underline">
                      Подробнее
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Не пропустите новые мероприятия</h2>
          <p className="max-w-2xl mx-auto text-lg mb-8">
            Подпишитесь на нашу рассылку, чтобы первыми узнавать о новых мероприятиях и специальных предложениях
          </p>
          <div className="max-w-md mx-auto">
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-grow px-4 py-3 rounded-md focus:outline-none text-gray-800"
                required
              />
              <button type="submit" className="btn bg-accent text-white hover:bg-opacity-90 whitespace-nowrap">
                Подписаться
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}