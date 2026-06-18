import { useState } from "react";
import Icon from "@/components/ui/icon";

const API_URL = "https://functions.poehali.dev/f7871382-2602-4f1e-81de-3705c0a948fd";

export default function Contacts() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div id="contact" className="bg-white px-6 py-20 lg:py-32">
      <div className="max-w-5xl mx-auto">
        <h3 className="uppercase text-sm tracking-wide text-neutral-500 mb-4">Контакты</h3>
        <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-16 leading-tight">
          Готовы отправиться<br />в путь вместе?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <a href="tel:+79789403236" className="flex items-center gap-3 text-neutral-700 hover:text-black transition-colors duration-300">
                <Icon name="Phone" size={16} className="text-neutral-400 shrink-0" />
                <span className="text-sm font-medium">+7 (978) 940-32-36</span>
              </a>
              <a href="mailto:nik.belomyytsev@mail.ru" className="flex items-center gap-3 text-neutral-700 hover:text-black transition-colors duration-300">
                <Icon name="Mail" size={16} className="text-neutral-400 shrink-0" />
                <span className="text-sm font-medium">nik.belomyytsev@mail.ru</span>
              </a>
              <div className="flex items-center gap-3 text-neutral-700">
                <Icon name="MapPin" size={16} className="text-neutral-400 shrink-0" />
                <span className="text-sm font-medium">г. Симферополь</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Ваше имя *"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="border border-neutral-200 px-4 py-3 text-sm outline-none focus:border-black transition-colors duration-300 bg-white"
            />
            <input
              type="tel"
              placeholder="Телефон *"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
              className="border border-neutral-200 px-4 py-3 text-sm outline-none focus:border-black transition-colors duration-300 bg-white"
            />
            <textarea
              placeholder="Маршрут, дата, пожелания..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={4}
              className="border border-neutral-200 px-4 py-3 text-sm outline-none focus:border-black transition-colors duration-300 bg-white resize-none"
            />

            {status === "success" && (
              <div className="flex items-center gap-2 text-green-700 text-sm border border-green-200 bg-green-50 px-4 py-3">
                <Icon name="CheckCircle" size={16} />
                Заявка отправлена! Мы свяжемся с вами в ближайшее время.
              </div>
            )}
            {status === "error" && (
              <div className="flex items-center gap-2 text-red-700 text-sm border border-red-200 bg-red-50 px-4 py-3">
                <Icon name="AlertCircle" size={16} />
                Ошибка отправки. Позвоните нам напрямую.
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-black text-white px-8 py-4 text-sm uppercase tracking-wide border border-black hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Отправляем..." : "Оформить заявку"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}