import Icon from "@/components/ui/icon";

export default function Contacts() {
  return (
    <div id="contact" className="bg-white px-6 py-20 lg:py-32">
      <div className="max-w-5xl mx-auto">
        <h3 className="uppercase text-sm tracking-wide text-neutral-500 mb-4">Контакты</h3>
        <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-16 leading-tight">
          Готовы отправиться<br />в путь вместе?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <a
            href="tel:+79789403236"
            className="group flex flex-col gap-3 border border-neutral-200 p-8 hover:border-black transition-colors duration-300"
          >
            <Icon name="Phone" size={28} className="text-neutral-400 group-hover:text-black transition-colors duration-300" />
            <span className="uppercase text-xs tracking-wide text-neutral-400">Телефон</span>
            <span className="text-lg font-medium text-neutral-900">+7 (978) 940-32-36</span>
          </a>

          <a
            href="mailto:nik.belomyytsev@mail.ru"
            className="group flex flex-col gap-3 border border-neutral-200 p-8 hover:border-black transition-colors duration-300"
          >
            <Icon name="Mail" size={28} className="text-neutral-400 group-hover:text-black transition-colors duration-300" />
            <span className="uppercase text-xs tracking-wide text-neutral-400">Email</span>
            <span className="text-lg font-medium text-neutral-900">nik.belomyytsev@mail.ru</span>
          </a>

          <div className="flex flex-col gap-3 border border-neutral-200 p-8">
            <Icon name="MapPin" size={28} className="text-neutral-400" />
            <span className="uppercase text-xs tracking-wide text-neutral-400">Адрес</span>
            <span className="text-lg font-medium text-neutral-900">г. Симферополь</span>
          </div>
        </div>

        <div className="mt-12">
          <a
            href="tel:+79789403236"
            className="inline-block bg-black text-white px-8 py-4 text-sm uppercase tracking-wide border border-black hover:bg-white hover:text-black transition-all duration-300"
          >
            Оформить заказ
          </a>
        </div>
      </div>
    </div>
  );
}
