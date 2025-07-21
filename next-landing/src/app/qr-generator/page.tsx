'use client';

import { useState } from 'react';

export default function QRGenerator() {
  const [qrData, setQrData] = useState('https://bardabar.ru/menu');
  const [qrSize, setQrSize] = useState(200);
  const [qrColor, setQrColor] = useState('#7A2E2E');
  const [qrBgColor, setQrBgColor] = useState('#FFFFFF');

  // Generate QR code URL using a public API
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
    qrData
  )}&size=${qrSize}x${qrSize}&color=${qrColor.replace('#', '')}&bgcolor=${qrBgColor.replace('#', '')}`;

  const handleDownload = () => {
    // In a real application, this would download the QR code
    alert('В реальном приложении здесь будет скачивание QR-кода');
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/qr-hero.jpg')" }}
        ></div>
        <div className="container mx-auto px-4 relative z-20 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            QR-код для меню
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl">
            Создайте и скачайте QR-код для быстрого доступа к нашему меню
          </p>
        </div>
      </section>

      {/* QR Generator Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* QR Code Preview */}
              <div className="flex flex-col items-center justify-center">
                <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                  <img
                    src={qrCodeUrl}
                    alt="QR Code"
                    className="mx-auto"
                    width={qrSize}
                    height={qrSize}
                  />
                </div>
                <button
                  onClick={handleDownload}
                  className="btn btn-primary w-full"
                >
                  Скачать QR-код
                </button>
              </div>

              {/* QR Code Settings */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-primary">Настройки QR-кода</h2>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="qr-data" className="block text-sm font-medium text-gray-700 mb-1">
                      URL
                    </label>
                    <input
                      type="text"
                      id="qr-data"
                      value={qrData}
                      onChange={(e) => setQrData(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="qr-size" className="block text-sm font-medium text-gray-700 mb-1">
                      Размер: {qrSize}x{qrSize}px
                    </label>
                    <input
                      type="range"
                      id="qr-size"
                      min="100"
                      max="400"
                      step="10"
                      value={qrSize}
                      onChange={(e) => setQrSize(Number(e.target.value))}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="qr-color" className="block text-sm font-medium text-gray-700 mb-1">
                      Цвет QR-кода
                    </label>
                    <div className="flex items-center">
                      <input
                        type="color"
                        id="qr-color"
                        value={qrColor}
                        onChange={(e) => setQrColor(e.target.value)}
                        className="w-12 h-10 border-0 p-0 mr-2"
                      />
                      <input
                        type="text"
                        value={qrColor}
                        onChange={(e) => setQrColor(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="qr-bg-color" className="block text-sm font-medium text-gray-700 mb-1">
                      Цвет фона
                    </label>
                    <div className="flex items-center">
                      <input
                        type="color"
                        id="qr-bg-color"
                        value={qrBgColor}
                        onChange={(e) => setQrBgColor(e.target.value)}
                        className="w-12 h-10 border-0 p-0 mr-2"
                      />
                      <input
                        type="text"
                        value={qrBgColor}
                        onChange={(e) => setQrBgColor(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setQrData('https://bardabar.ru/menu');
                        setQrSize(200);
                        setQrColor('#7A2E2E');
                        setQrBgColor('#FFFFFF');
                      }}
                      className="btn btn-outline w-full"
                    >
                      Сбросить настройки
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Instructions */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Как использовать QR-код</h2>
            <p className="max-w-2xl mx-auto text-lg">
              Простые шаги для использования QR-кода в вашем заведении
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-primary mb-4 flex justify-center">
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
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Шаг 1: Создайте QR-код</h3>
              <p className="text-gray-600">
                Настройте QR-код по вашему вкусу, выбрав размер и цвета, которые лучше всего подходят для вашего заведения.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-primary mb-4 flex justify-center">
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
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Шаг 2: Скачайте и распечатайте</h3>
              <p className="text-gray-600">
                Скачайте созданный QR-код и распечатайте его на качественной бумаге или закажите наклейки с вашим QR-кодом.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-primary mb-4 flex justify-center">
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Шаг 3: Разместите в заведении</h3>
              <p className="text-gray-600">
                Разместите QR-код на столиках, у входа или в меню. Гости смогут легко отсканировать его и получить доступ к вашему меню.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Преимущества QR-кода</h2>
            <p className="max-w-2xl mx-auto text-lg">
              Почему стоит использовать QR-код для вашего меню
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-accent text-4xl font-bold mb-2">01</div>
              <h3 className="text-xl font-bold mb-2">Удобство</h3>
              <p>Гости могут легко просматривать меню на своих устройствах</p>
            </div>

            <div className="text-center">
              <div className="text-accent text-4xl font-bold mb-2">02</div>
              <h3 className="text-xl font-bold mb-2">Экологичность</h3>
              <p>Сокращение использования бумаги для печати меню</p>
            </div>

            <div className="text-center">
              <div className="text-accent text-4xl font-bold mb-2">03</div>
              <h3 className="text-xl font-bold mb-2">Актуальность</h3>
              <p>Всегда актуальная информация о блюдах и ценах</p>
            </div>

            <div className="text-center">
              <div className="text-accent text-4xl font-bold mb-2">04</div>
              <h3 className="text-xl font-bold mb-2">Гигиеничность</h3>
              <p>Отсутствие необходимости передавать меню из рук в руки</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}