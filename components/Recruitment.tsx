"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Briefcase, Heart, Users, Rocket, Award, Coffee, BookOpen, Sparkles } from "lucide-react";
import { useRef } from "react";

const benefits = [
  {
    icon: Heart,
    title: "경쟁력 있는 급여",
    description: "업계 최고 수준의 보상 패키지",
  },
  {
    icon: Award,
    title: "4대 보험 및 퇴직금",
    description: "안정적인 복지 시스템 완비",
  },
  {
    icon: BookOpen,
    title: "자기계발 지원",
    description: "교육비 및 도서 구매 지원",
  },
  {
    icon: Coffee,
    title: "유연한 근무 환경",
    description: "자율 출퇴근 및 재택근무 가능",
  },
];

const positions = [
  {
    title: "보험 상품 개발",
    description: "혁신적인 보험 상품 기획 및 개발",
    type: "정규직",
    experience: "경력 3년 이상",
  },
  {
    title: "고객 서비스",
    description: "고객 만족을 위한 서비스 제공",
    type: "정규직",
    experience: "경력 무관",
  },
  {
    title: "마케팅",
    description: "브랜드 마케팅 및 홍보 전략 수립",
    type: "정규직",
    experience: "경력 2년 이상",
  },
  {
    title: "영업",
    description: "보험 상품 영업 및 고객 관리",
    type: "정규직",
    experience: "신입/경력",
  },
];

export default function Recruitment() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="recruitment" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/20 mb-6"
          >
            <Rocket className="w-4 h-4 text-[#00d255]" />
            <span className="text-sm text-white/80">JOIN US</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">채용 안내</span>
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            함께 성장할 인재를 기다립니다
            <br className="hidden md:block" />
            당신의 열정이 우리의 미래를 만듭니다
          </p>
        </motion.div>

        {/* Recruitment Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass border border-white/10 rounded-3xl p-8 lg:p-12 mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-0.5 flex-shrink-0">
                  <div className="w-full h-full bg-black rounded-xl flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">채용 철학</h3>
                  <p className="text-white/70 leading-relaxed">
                    우리는 성장 가능성과 열정을 가진 인재를 찾습니다.
                    경력보다는 함께 성장할 의지와 학습 능력을 중시하며,
                    다양성을 존중하는 포용적인 조직 문화를 만들어갑니다.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 p-0.5 flex-shrink-0">
                  <div className="w-full h-full bg-black rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">우리가 찾는 인재</h3>
                  <ul className="space-y-2 text-white/70">
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#00d255]" />
                      끊임없이 배우고 성장하는 자세
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#00d255]" />
                      도전적이고 혁신적인 사고
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#00d255]" />
                      팀워크와 협업 능력
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#00d255]" />
                      고객 중심적 마인드
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column - Benefits */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">주요 복리후생</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="glass border border-white/10 rounded-xl p-4 hover:bg-white/5 transition-all duration-300 group"
                  >
                    <benefit.icon className="w-8 h-8 text-[#00d255] mb-3 group-hover:scale-110 transition-transform" />
                    <h4 className="text-white font-semibold mb-1">{benefit.title}</h4>
                    <p className="text-white/60 text-sm">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Open Positions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
            모집 중인 직무
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {positions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass border border-white/10 rounded-2xl p-6 hover:border-[#00d255]/50 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold text-white group-hover:text-[#00d255] transition-colors">
                    {position.title}
                  </h4>
                  <span className="px-3 py-1 text-xs rounded-full bg-[#00d255]/20 text-[#00d255] border border-[#00d255]/30">
                    {position.type}
                  </span>
                </div>
                <p className="text-white/70 mb-4">{position.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/50">{position.experience}</span>
                  <ArrowRight className="w-5 h-5 text-white/50 group-hover:text-[#00d255] group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="glass border border-white/10 rounded-3xl p-12 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              지금 바로 지원하세요
            </h3>
            <p className="text-white/70 text-lg mb-8">
              여러분의 도전을 기다립니다. 함께 성장할 준비가 되셨나요?
            </p>
            <Link
              href="#application"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-gradient-to-r from-[#3182f6] to-[#00d255] text-white rounded-xl font-semibold hover-glow transition-all duration-300 hover:scale-105 text-lg"
            >
              입사지원하기
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
