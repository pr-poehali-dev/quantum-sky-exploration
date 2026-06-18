import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/c7bdc2d5-ec99-41e1-b97c-b45445c49778/files/69412df7-1e64-4591-94a0-bf6b2571c8fc.jpg"
          alt="Грузовые автомобили на трассе"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          НАДЁЖНОСТЬ —<br />НАША ПРОФЕССИЯ
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl mx-auto opacity-90">
          Доставить вовремя — наш главный принцип
        </p>
      </div>
    </div>
  );
}