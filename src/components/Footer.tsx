export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div className="bg-neutral-900 py-4 sm:py-6 lg:py-8 px-4 sm:px-6 h-full w-full flex flex-col justify-between">
            <div className="flex shrink-0 gap-8 sm:gap-12 lg:gap-20" id="contact">
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-neutral-400 text-xs sm:text-sm">Контакты</h3>
                <a
                  href="tel:+79789403236"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  +7 (978) 940-32-36
                </a>
                <a
                  href="mailto:nik.belomyytsev@mail.ru"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  nik.belomyytsev@mail.ru
                </a>
                <span className="text-white text-sm sm:text-base">
                  г. Симферополь
                </span>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-neutral-400 text-xs sm:text-sm">Принципы</h3>
                <span className="text-white text-sm sm:text-base">Безопасность</span>
                <span className="text-white text-sm sm:text-base">Пунктуальность</span>
                <span className="text-white text-sm sm:text-base">Гибкий подход</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-end gap-4 sm:gap-0">
              <p className="text-neutral-500 text-xs sm:text-sm">
                {new Date().getFullYear()} Пассажирские перевозки · г. Симферополь
              </p>
              <a
                href="/privacy"
                className="text-neutral-500 hover:text-white transition-colors duration-300 text-xs sm:text-sm underline underline-offset-4"
              >
                Политика конфиденциальности
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
