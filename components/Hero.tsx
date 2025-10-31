"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp, Users } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/u8164484915_modern_cityscape_at_night_with_blue_and_green_lig_3562bf8a-13a1-42cf-b37e-0143690e62de_3.png')",
        }}
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Animated gradient background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #3182f6 0%, transparent 50%)`,
          transition: "background 0.3s ease",
        }}
      />

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => {
          const randomX = Math.random() * 100;
          const randomY = Math.random() * 100;
          const randomX2 = Math.random() * 100;
          const randomY2 = Math.random() * 100;
          const randomScale = Math.random() * 0.5 + 0.5;
          const randomScale2 = Math.random() * 0.5 + 0.5;
          const randomDuration = Math.random() * 20 + 10;

          return (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-[#3182f6] to-[#00d255] rounded-full"
              initial={{
                x: `${randomX}vw`,
                y: `${randomY}vh`,
                scale: randomScale,
              }}
              animate={{
                y: [`${randomY}vh`, `${randomY2}vh`],
                x: [`${randomX}vw`, `${randomX2}vw`],
                scale: [randomScale, randomScale2],
              }}
              transition={{
                duration: randomDuration,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{ opacity: 0.3 }}
            />
          );
        })}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border border-white/20"
          >
            <Sparkles className="w-4 h-4 text-[#00d255]" />
            <span className="text-sm text-white/90">전문가와 함께하는 보험의 미래</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-white">함께 성장하는</span>
            <br />
            <span className="gradient-text">보험업계 전문 조직</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            전문성과 열정으로 보험업계의 미래를 만들어갑니다.
            <br />
            당신의 성장이 우리의 성장입니다.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link
              href="#application"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#3182f6] to-[#00d255] text-white rounded-xl font-semibold hover-glow transition-all duration-300 hover:scale-105"
            >
              입사지원하기
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#about"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 glass border border-white/20 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
            >
              조직소개 보기
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            {[
              { icon: Users, label: "전문 인력", value: "50+" },
              { icon: TrendingUp, label: "성장률", value: "200%" },
              { icon: Sparkles, label: "고객 만족도", value: "98%" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="glass border border-white/10 rounded-xl p-6 hover:bg-white/5 transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 text-[#00d255] mb-3 mx-auto" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/50 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
