'use client';

import { useState } from 'react';

// Моковые данные для доступного времени
const availableTimes = [
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', 
  '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
  '18:00', '18:30', '19:00', '19:30', '20:00', '20:30',
  '21:00', '21:30', '22:00'
];

export default function ReservationPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: 2,
    comments: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Очистка ошибки при изменении поля
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Пожалуйста, укажите ваше имя';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Пожалуйста, укажите номер телефона';
    } else if (!/^(\+7|8)[0-9]{10}$/.test(formData.phone.replace(/\s+/g, ''))) {
      newErrors.phone = 'Пожалуйста, укажите корректный номер телефона';
    }
    
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Пожалуйста, укажите корректный email';
    }
    
    if (!formData.date) {
      newErrors.date = 'Пожалуйста, выберите дату';
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (selectedDate < today) {
        newErrors.date = 'Дата не может быть в прошлом';
      }
    }
    
    if (!formData.time) {
      newErrors.time = 'Пожалуйста, выберите время';
    }
    
    if (formData.guests < 1) {
      newErrors.guests = 'Количество гостей должно быть не менее 1';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Имитация отправки данных на сервер
    try {
      // В реальном приложении здесь был бы запрос к API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSuccess(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        date: '',
        time: '',
        guests: 2,
        comments: ''
      });
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
      setErrors({ submit: 'Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen py-12 bg-background">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary text-center">Бронирование столика</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              {/* Информация о бронировании */}
              <div className="md:w-1/3 bg-primary text-white p-8">
                <h2 className="text-2xl font-bold mb-6">Информация</h2>
                
                <div className="mb-6">
                  <h3 className="font-bold mb-2">Часы работы</h3>
                  <p>Пн-Чт: 12:00 - 22:00</p>
                  <p>Пт-Сб: 12:00 - 23:00</p>
                  <p>Вс: 12:00 - 22:00</p>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-bold mb-2">Контакты</h3>
                  <p>Телефон: +7 (999) 123-45-67</p>
                  <p>Email: info@bardabar.ru</p>
                </div>
                
                <div>
                  <h3 className="font-bold mb-2">Адрес</h3>
                  <p>г. Москва, ул. Примерная, д. 123</p>
                </div>
              </div>
              
              {/* Форма бронирования */}
              <div className="md:w-2/3 p-8">
                {isSuccess ? (
                  <div className="text-center py-8">
                    <div className="text-5xl mb-4 text-green-500">✓</div>
                    <h2 className="text-2xl font-bold mb-4 text-primary">Бронирование успешно!</h2>
                    <p className="mb-6">Мы получили вашу заявку и свяжемся с вами в ближайшее время для подтверждения.</p>
                    <button 
                      className="btn btn-primary"
                      onClick={() => setIsSuccess(false)}
                    >
                      Новое бронирование
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 mb-2" htmlFor="name">
                          Имя <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                          placeholder="Иван Иванов"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 mb-2" htmlFor="phone">
                          Телефон <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                          placeholder="+7 (999) 123-45-67"
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 mb-2" htmlFor="email">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                          placeholder="example@mail.ru"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 mb-2" htmlFor="guests">
                          Количество гостей <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="number"
                          id="guests"
                          name="guests"
                          min="1"
                          max="20"
                          value={formData.guests}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${errors.guests ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.guests && <p className="text-red-500 text-sm mt-1">{errors.guests}</p>}
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 mb-2" htmlFor="date">
                          Дата <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${errors.date ? 'border-red-500' : 'border-gray-300'}`}
                          min={new Date().toISOString().split('T')[0]}
                        />
                        {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 mb-2" htmlFor="time">
                          Время <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${errors.time ? 'border-red-500' : 'border-gray-300'}`}
                        >
                          <option value="">Выберите время</option>
                          {availableTimes.map(time => (
                            <option key={time} value={time}>{time}</option>
                          ))}
                        </select>
                        {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
                      </div>
                      
                      <div className="md:col-span-2">
                        <label className="block text-gray-700 mb-2" htmlFor="comments">
                          Комментарии
                        </label>
                        <textarea
                          id="comments"
                          name="comments"
                          value={formData.comments}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          rows={4}
                          placeholder="Особые пожелания, предпочтения по размещению и т.д."
                        ></textarea>
                      </div>
                    </div>
                    
                    {errors.submit && (
                      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-6">
                        {errors.submit}
                      </div>
                    )}
                    
                    <div className="mt-8">
                      <button
                        type="submit"
                        className="btn btn-primary w-full py-3"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Отправка...' : 'Забронировать столик'}
                      </button>
                    </div>
                    
                    <p className="text-sm text-gray-500 mt-4">
                      * Обязательные поля для заполнения
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
          
          {/* Дополнительная информация */}
          <div className="mt-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-primary">Информация о бронировании</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-primary">Правила бронирования</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Бронирование доступно не менее чем за 2 часа до посещения</li>
                  <li>Столик сохраняется за вами в течение 15 минут от указанного времени</li>
                  <li>При опоздании более чем на 15 минут, пожалуйста, предупредите нас по телефону</li>
                  <li>Для групп более 8 человек рекомендуем бронировать заранее по телефону</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 text-primary">Часто задаваемые вопросы</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold">Нужно ли подтверждение бронирования?</h4>
                    <p>Да, мы свяжемся с вами по телефону для подтверждения бронирования.</p>
                  </div>
                  <div>
                    <h4 className="font-bold">Можно ли отменить бронирование?</h4>
                    <p>Да, вы можете отменить бронирование, позвонив нам не менее чем за 2 часа до указанного времени.</p>
                  </div>
                  <div>
                    <h4 className="font-bold">Есть ли у вас депозит за бронирование?</h4>
                    <p>Нет, бронирование бесплатное. Однако для больших групп или особых мероприятий может потребоваться предоплата.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}