'use client';

import { useState } from 'react';

// Моковые данные для категорий меню
const menuCategories = [
  { id: 1, name: 'Бургеры' },
  { id: 2, name: 'Закуски' },
  { id: 3, name: 'Напитки' },
  { id: 4, name: 'Десерты' },
  { id: 5, name: 'Специальные предложения' },
];

export default function QrGeneratorPage() {
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [qrSize, setQrSize] = useState(200);
  const [qrColor, setQrColor] = useState('#7A2E2E');
  const [qrBgColor, setQrBgColor] = useState('#FFFFFF');
  const [qrLogo, setQrLogo] = useState(true);
  const [isGenerated, setIsGenerated] = useState(false);

  const handleCategoryToggle = (categoryId: number) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleGenerate = () => {
    setIsGenerated(true);
  };

  const handleDownload = (format: 'png' | 'svg' | 'pdf') => {
    // В реальном приложении здесь был бы код для скачивания QR-кода
    console.log(`Downloading QR code in ${format} format`);
    alert(`QR-код скачан в формате ${format}`);
  };

  return (
    <main className="min-h-screen py-12 bg-background">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary text-center">QR-генератор меню</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="md:flex gap-8">
              {/* Настройки QR-кода */}
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold mb-6 text-primary">Настройки</h2>
                
                <div className="space-y-6">
                  {/* Выбор категорий */}
                  <div>
                    <h3 className="font-bold mb-3">Выберите категории меню</h3>
                    <div className="space-y-2">
                      {menuCategories.map(category => (
                        <div key={category.id} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`category-${category.id}`}
                            checked={selectedCategories.includes(category.id)}
                            onChange={() => handleCategoryToggle(category.id)}
                            className="mr-2 h-5 w-5 text-primary focus:ring-primary"
                          />
                          <label htmlFor={`category-${category.id}`}>{category.name}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Размер QR-кода */}
                  <div>
                    <h3 className="font-bold mb-3">Размер QR-кода</h3>
                    <div className="flex items-center">
                      <input
                        type="range"
                        min="100"
                        max="400"
                        step="10"
                        value={qrSize}
                        onChange={(e) => setQrSize(Number(e.target.value))}
                        className="w-full mr-4"
                      />
                      <span>{qrSize}px</span>
                    </div>
                  </div>
                  
                  {/* Цвет QR-кода */}
                  <div>
                    <h3 className="font-bold mb-3">Цвет QR-кода</h3>
                    <div className="flex items-center">
                      <input
                        type="color"
                        value={qrColor}
                        onChange={(e) => setQrColor(e.target.value)}
                        className="mr-2 h-10 w-10 border-0"
                      />
                      <span>{qrColor}</span>
                    </div>
                  </div>
                  
                  {/* Цвет фона */}
                  <div>
                    <h3 className="font-bold mb-3">Цвет фона</h3>
                    <div className="flex items-center">
                      <input
                        type="color"
                        value={qrBgColor}
                        onChange={(e) => setQrBgColor(e.target.value)}
                        className="mr-2 h-10 w-10 border-0"
                      />
                      <span>{qrBgColor}</span>
                    </div>
                  </div>
                  
                  {/* Логотип */}
                  <div>
                    <h3 className="font-bold mb-3">Логотип</h3>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="logo"
                        checked={qrLogo}
                        onChange={(e) => setQrLogo(e.target.checked)}
                        className="mr-2 h-5 w-5 text-primary focus:ring-primary"
                      />
                      <label htmlFor="logo">Добавить логотип кафе</label>
                    </div>
                  </div>
                  
                  <button
                    className="btn btn-primary w-full py-3 mt-4"
                    onClick={handleGenerate}
                  >
                    Сгенерировать QR-код
                  </button>
                </div>
              </div>
              
              {/* Предпросмотр QR-кода */}
              <div className="md:w-1/2 mt-8 md:mt-0">
                <h2 className="text-2xl font-bold mb-6 text-primary">Предпросмотр</h2>
                
                <div className="flex flex-col items-center">
                  <div 
                    className="border rounded-lg p-4 flex items-center justify-center"
                    style={{ 
                      width: `${qrSize}px`, 
                      height: `${qrSize}px`,
                      backgroundColor: qrBgColor
                    }}
                  >
                    {isGenerated ? (
                      <div className="relative">
                        <div 
                          className="w-full h-full" 
                          style={{ 
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='none' stroke='${qrColor.replace('#', '%23')}' stroke-width='8' d='M10,10 L30,10 L30,30 L10,30 Z M40,10 L60,10 L60,30 L40,30 Z M70,10 L90,10 L90,30 L70,30 Z M10,40 L30,40 L30,60 L10,60 Z M70,40 L90,40 L90,60 L70,60 Z M10,70 L30,70 L30,90 L10,90 Z M40,70 L60,70 L60,90 L40,90 Z M70,70 L90,70 L90,90 L70,90 Z'/%3E%3C/svg%3E")`,
                            width: '100%',
                            height: '100%'
                          }}
                        ></div>
                        {qrLogo && (
                          <div 
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2"
                            style={{ width: `${qrSize * 0.2}px`, height: `${qrSize * 0.2}px` }}
                          >
                            <div className="w-full h-full flex items-center justify-center text-primary font-bold">
                              Лого
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="text-gray-400 text-center">
                        <p>QR-код будет отображен здесь</p>
                        <p className="text-sm mt-2">Нажмите "Сгенерировать QR-код"</p>
                      </div>
                    )}
                  </div>
                  
                  {isGenerated && (
                    <div className="mt-6 space-y-4 w-full">
                      <h3 className="font-bold text-center">Скачать QR-код</h3>
                      <div className="flex flex-wrap justify-center gap-4">
                        <button 
                          className="btn btn-primary py-2 px-4"
                          onClick={() => handleDownload('png')}
                        >
                          PNG
                        </button>
                        <button 
                          className="btn btn-primary py-2 px-4"
                          onClick={() => handleDownload('svg')}
                        >
                          SVG
                        </button>
                        <button 
                          className="btn btn-primary py-2 px-4"
                          onClick={() => handleDownload('pdf')}
                        >
                          PDF
                        </button>
                      </div>
                      
                      <div className="mt-4 text-center">
                        <p className="text-sm text-gray-600">
                          QR-код содержит ссылку на меню с выбранными категориями
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          {/* Инструкция по использованию */}
          <div className="mt-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-primary">Как использовать QR-код</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4 text-primary">1</div>
                <h3 className="font-bold mb-2">Настройте QR-код</h3>
                <p>Выберите категории меню, размер, цвет и другие параметры QR-кода</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4 text-primary">2</div>
                <h3 className="font-bold mb-2">Скачайте QR-код</h3>
                <p>Выберите удобный формат (PNG, SVG или PDF) и скачайте QR-код</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4 text-primary">3</div>
                <h3 className="font-bold mb-2">Разместите QR-код</h3>
                <p>Распечатайте QR-код и разместите его на столиках, в меню или на рекламных материалах</p>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-primary/10 rounded-lg">
              <h3 className="font-bold mb-2 text-primary">Совет</h3>
              <p>Для лучшего сканирования рекомендуем использовать контрастные цвета и размер не менее 200px.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}