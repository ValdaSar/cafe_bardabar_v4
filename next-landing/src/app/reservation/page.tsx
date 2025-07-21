import ReservationForm from '@/components/forms/ReservationForm';

export default function Reservation() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/reservation-hero.jpg')" }}
        ></div>
        <div className="container mx-auto px-4 relative z-20 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Бронирование столика
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl">
            Забронируйте столик заранее и проведите время в приятной атмосфере
          </p>
        </div>
      </section>

      {/* Reservation Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-primary text-center">
              Заполните форму бронирования
            </h2>
            <p className="text-gray-600 mb-8 text-center">
              Мы свяжемся с вами для подтверждения бронирования
            </p>
            
            <ReservationForm />
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Working Hours */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-primary mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Часы работы</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Понедельник - Четверг:</span>
                  <span>12:00 - 23:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Пятница - Суббота:</span>
                  <span>12:00 - 01:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Воскресенье:</span>
                  <span>12:00 - 22:00</span>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-primary mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Контактная информация</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="font-medium mr-2">Телефон:</span>
                  <a href="tel:+74951234567" className="text-primary hover:underline">
                    +7 (495) 123-45-67
                  </a>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">Email:</span>
                  <a href="mailto:info@bardabar.ru" className="text-primary hover:underline">
                    info@bardabar.ru
                  </a>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">Адрес:</span>
                  <span>ул. Примерная, 123, Москва</span>
                </li>
              </ul>
            </div>

            {/* FAQ */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-primary mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Часто задаваемые вопросы</h3>
              <ul className="space-y-4">
                <li>
                  <h4 className="font-medium">Нужно ли вносить предоплату?</h4>
                  <p className="text-gray-600">
                    Нет, предоплата не требуется. Мы свяжемся с вами для подтверждения бронирования.
                  </p>
                </li>
                <li>
                  <h4 className="font-medium">Как долго действует бронь?</h4>
                  <p className="text-gray-600">
                    Бронь действует 15 минут от указанного времени. Если вы опаздываете, пожалуйста, предупредите нас.
                  </p>
                </li>
                <li>
                  <h4 className="font-medium">Можно ли отменить бронирование?</h4>
                  <p className="text-gray-600">
                    Да, вы можете отменить бронирование, позвонив нам не менее чем за 2 часа до указанного времени.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}