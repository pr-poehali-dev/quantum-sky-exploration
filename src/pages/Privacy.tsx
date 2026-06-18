import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

export default function Privacy() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white px-6 py-12 max-w-3xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-neutral-500 hover:text-black transition-colors duration-300 mb-10 uppercase text-sm tracking-wide"
      >
        <Icon name="ArrowLeft" size={16} />
        Назад
      </button>

      <h1 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-2">Политика конфиденциальности</h1>
      <p className="text-neutral-400 text-sm mb-10">г. Симферополь · {new Date().getFullYear()}</p>

      <div className="flex flex-col gap-8 text-neutral-700 leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold text-neutral-900 mb-2">1. Общие положения</h2>
          <p>Настоящая политика конфиденциальности регулирует порядок обработки и использования персональных данных пользователей, обратившихся за услугами пассажирских перевозок.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-900 mb-2">2. Какие данные мы собираем</h2>
          <p>Мы можем собирать следующие данные: имя, номер телефона, адрес электронной почты, информацию о маршруте и времени поездки. Данные передаются только при оформлении заказа или обратной связи.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-900 mb-2">3. Цели обработки данных</h2>
          <p>Персональные данные используются исключительно для организации и подтверждения заказа, связи с клиентом, а также улучшения качества сервиса. Данные не передаются третьим лицам без согласия пользователя.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-900 mb-2">4. Хранение данных</h2>
          <p>Персональные данные хранятся только в период, необходимый для выполнения заказа и соблюдения законодательных требований.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-900 mb-2">5. Права пользователя</h2>
          <p>Вы вправе запросить изменение, удаление или уточнение своих данных, обратившись по адресу: <a href="mailto:nik.belomyytsev@mail.ru" className="underline underline-offset-4 hover:text-black transition-colors">nik.belomyytsev@mail.ru</a> или по телефону <a href="tel:+79789403236" className="underline underline-offset-4 hover:text-black transition-colors">+7 (978) 940-32-36</a>.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-900 mb-2">6. Контакты</h2>
          <p>По всем вопросам, связанным с обработкой персональных данных: г. Симферополь, <a href="mailto:nik.belomyytsev@mail.ru" className="underline underline-offset-4 hover:text-black transition-colors">nik.belomyytsev@mail.ru</a>.</p>
        </section>
      </div>
    </div>
  );
}
