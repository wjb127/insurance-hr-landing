"use client";

import { motion, useInView } from "framer-motion";
import { Target, Users, TrendingUp, Heart, Award, Shield, Zap, Globe } from "lucide-react";
import { useRef } from "react";

const coreValues = [
  {
    icon: Target,
    title: "비전",
    description: "보험업계를 선도하는 전문 조직으로 성장",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "협력",
    description: "함께 성장하는 팀워크와 신뢰",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: TrendingUp,
    title: "성장",
    description: "지속적인 학습과 혁신적 발전",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Heart,
    title: "가치",
    description: "고객 중심의 최상 서비스 제공",
    color: "from-red-500 to-orange-500",
  },
];

const features = [
  {
    icon: Award,
    title: "업계 최고 전문성",
    description: "오랜 경험과 노하우를 바탕으로 한 전문 서비스",
  },
  {
    icon: Shield,
    title: "안정적인 시스템",
    description: "신뢰할 수 있는 보험 솔루션 및 컨설팅",
  },
  {
    icon: Zap,
    title: "빠른 대응",
    description: "고객의 니즈에 신속하고 정확한 대응",
  },
  {
    icon: Globe,
    title: "글로벌 네트워크",
    description: "다양한 파트너사와의 협력 네트워크",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 rounded-full glass border border-white/20 mb-6"
          >
            <span className="text-sm text-white/80">ABOUT US</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">조직 소개</span>
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            우리는 보험업계의 전문성을 바탕으로 고객에게 최고의 서비스를 제공하며,
            <br className="hidden md:block" />
            구성원 모두가 함께 성장하는 조직입니다.
          </p>
        </motion.div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {coreValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <div className="glass border border-white/10 rounded-2xl p-8 h-full hover:bg-white/5 transition-all duration-300">
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${value.color} p-0.5 mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full bg-black rounded-xl flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 text-center">{value.title}</h3>
                <p className="text-white/60 text-center leading-relaxed">{value.description}</p>

                {/* Hover glow effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass border border-white/10 rounded-3xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              우리의 강점
            </h3>
            <p className="text-white/60 text-lg">
              차별화된 전문성과 시스템으로 최상의 가치를 제공합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="text-center group"
              >
                <div className="w-14 h-14 rounded-full glass border border-white/20 flex items-center justify-center mx-auto mb-4 group-hover:border-[#00d255] group-hover:bg-[#00d255]/10 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-[#00d255]" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
