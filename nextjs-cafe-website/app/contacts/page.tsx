'use client';

import { useState } from 'react';

export default function ContactsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
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
    
    if (!formData.email.trim()) {
      newErrors.email = 'Пожалуйста, укажите ваш email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Пожалуйста, укажите корректный email';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Пожалуйста, укажите тему сообщения';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Пожалуйста, введите текст сообщения';
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
        email: '',
        subject: '',
        message: ''
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
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary text-center">Контакты</h1>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              {/* Контактная информация */}
              <div className="md:w-1/2 bg-primary text-white p-8">
                <h2 className="text-2xl font-bold mb-6">Наши контакты</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mr-4 text-2xl">📍</div>
                    <div>
                      <h3 className="font-bold mb-1">Адрес</h3>
                      <p>г. Москва, ул. Примерная, д. 123</p>
                      <p className="text-sm mt-1">Рядом с метро "Примерная"</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 text-2xl">📞</div>
                    <div>
                      <h3 className="font-bold mb-1">Телефон</h3>
                      <p>+7 (999) 123-45-67</p>
                      <p className="text-sm mt-1">Ежедневно с 10:00 до 22:00</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 text-2xl">✉️</div>
                    <div>
                      <h3 className="font-bold mb-1">Email</h3>
                      <p>info@bardabar.ru</p>
                      <p className="text-sm mt-1">Мы отвечаем в течение 24 часов</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 text-2xl">🕒</div>
                    <div>
                      <h3 className="font-bold mb-1">Часы работы</h3>
                      <p>Пн-Чт: 12:00 - 22:00</p>
                      <p>Пт-Сб: 12:00 - 23:00</p>
                      <p>Вс: 12:00 - 22:00</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="font-bold mb-3">Мы в социальных сетях</h3>
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
              </div>
              
              {/* Форма обратной связи */}
              <div className="md:w-1/2 p-8">
                <h2 className="text-2xl font-bold mb-6 text-primary">Напишите нам</h2>
                
                {isSuccess ? (
                  <div className="text-center py-8">
                    <div className="text-5xl mb-4 text-green-500">✓</div>
                    <h3 className="text-xl font-bold mb-4 text-primary">Сообщение отправлено!</h3>
                    <p className="mb-6">Спасибо за ваше сообщение. Мы ответим вам в ближайшее время.</p>
                    <button 
                      className="btn btn-primary"
                      onClick={() => setIsSuccess(false)}
                    >
                      Отправить еще сообщение
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
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
                        <label className="block text-gray-700 mb-2" htmlFor="email">
                          Email <span className="text-red-500">*</span>
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
                        <label className="block text-gray-700 mb-2" htmlFor="subject">
                          Тема <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${errors.subject ? 'border-red-500' : 'border-gray-300'}`}
                          placeholder="Тема сообщения"
                        />
                        {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 mb-2" htmlFor="message">
                          Сообщение <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                          rows={6}
                          placeholder="Ваше сообщение..."
                        ></textarea>
                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                      </div>
                    </div>
                    
                    {errors.submit && (
                      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-6">
                        {errors.submit}
                      </div>
                    )}
                    
                    <div className="mt-6">
                      <button
                        type="submit"
                        className="btn btn-primary w-full py-3"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
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
          
          {/* Карта */}
          <div className="mt-12 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-96 bg-gray-200 relative">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-xl">
                Здесь будет карта с расположением кафе
              </div>
            </div>
          </div>
          
          {/* Часто задаваемые вопросы */}
          <div className="mt-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-primary">Часто задаваемые вопросы</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2 text-primary">Есть ли у вас парковка?</h3>
                <p>Да, у нас есть бесплатная парковка для гостей кафе на 15 машиномест.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2 text-primary">Можно ли приходить с детьми?</h3>
                <p>Конечно! У нас есть детское меню и игровая зона для детей.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2 text-primary">Есть ли у вас вегетарианские блюда?</h3>
                <p>Да, в нашем меню представлены вегетарианские и веганские блюда.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2 text-primary">Можно ли заказать доставку?</h3>
                <p>Да, мы осуществляем доставку в пределах 5 км от кафе. Минимальная сумма заказа - 1000 рублей.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}