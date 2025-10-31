"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Mail, Star } from "lucide-react";

// 플레이스홀더 이미지 사용
const teamMembers = [
  {
    id: 1,
    name: "홍길동",
    role: "대표이사",
    description: "보험업계 20년 경력의 전문가로 조직을 이끌고 있습니다",
    color: "from-blue-500 to-cyan-500",
    expertise: ["경영전략", "리스크관리"],
  },
  {
    id: 2,
    name: "김영희",
    role: "임원",
    description: "고객 서비스 분야의 탁월한 전문성을 보유하고 있습니다",
    color: "from-purple-500 to-pink-500",
    expertise: ["고객관리", "서비스기획"],
  },
  {
    id: 3,
    name: "이철수",
    role: "임원",
    description: "혁신적인 보험 상품 개발을 선도합니다",
    color: "from-green-500 to-emerald-500",
    expertise: ["상품개발", "시장분석"],
  },
  {
    id: 4,
    name: "박민지",
    role: "부장",
    description: "마케팅과 브랜딩 전략의 핵심 리더입니다",
    color: "from-orange-500 to-red-500",
    expertise: ["마케팅", "브랜딩"],
  },
  {
    id: 5,
    name: "정수진",
    role: "부장",
    description: "디지털 혁신과 기술 도입을 주도합니다",
    color: "from-indigo-500 to-blue-500",
    expertise: ["IT전략", "디지털전환"],
  },
  {
    id: 6,
    name: "최동욱",
    role: "차장",
    description: "데이터 분석과 인사이트 도출의 전문가입니다",
    color: "from-teal-500 to-green-500",
    expertise: ["데이터분석", "비즈니스인텔리전스"],
  },
];

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="team" className="py-24 lg:py-32 relative overflow-hidden bg-black">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
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
            <Star className="w-4 h-4 text-[#00d255]" />
            <span className="text-sm text-white/80">OUR TEAM</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">구성원 소개</span>
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            각 분야 최고의 전문가들이 모여 함께 성장하고 있습니다
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="glass border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-300">
                {/* Profile Image Area */}
                <div className="relative aspect-square w-full overflow-hidden">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />

                  {/* Placeholder Avatar */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${member.color} p-1 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                        <span className="text-5xl font-bold text-white">{member.name[0]}</span>
                      </div>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <motion.a
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      href="#"
                      className="w-10 h-10 rounded-full glass border border-white/20 flex items-center justify-center hover:bg-white/10"
                    >
                      <Mail className="w-5 h-5 text-white" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      href="#"
                      className="w-10 h-10 rounded-full glass border border-white/20 flex items-center justify-center hover:bg-white/10"
                    >
                      <Linkedin className="w-5 h-5 text-white" />
                    </motion.a>
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-[#00d255] font-medium mb-3">{member.role}</p>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">
                    {member.description}
                  </p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs rounded-full glass border border-white/10 text-white/80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Decorative element */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${member.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-white/60 text-lg mb-6">
            우리 팀과 함께 성장하고 싶으신가요?
          </p>
          <a
            href="#recruitment"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#3182f6] to-[#00d255] text-white rounded-xl font-semibold hover-glow transition-all duration-300 hover:scale-105"
          >
            입사지원 하러가기
          </a>
        </motion.div>
      </div>
    </section>
  );
}
