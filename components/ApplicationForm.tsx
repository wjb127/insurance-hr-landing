"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Upload, FileText, User, Mail, Phone, Briefcase, GraduationCap, CheckCircle } from "lucide-react";

export default function ApplicationForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    birthDate: "",
    position: "",
    experience: "",
    education: "",
    university: "",
    major: "",
    graduationYear: "",
    careerHistory: "",
    motivation: "",
    skills: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 추후 Supabase 연동 예정
    console.log("Form submitted:", formData);
    alert("입사지원서가 제출되었습니다. (현재는 데모 모드입니다)");
  };

  return (
    <section id="application" className="py-24 lg:py-32 relative overflow-hidden bg-black" ref={ref}>
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/20 mb-6"
          >
            <FileText className="w-4 h-4 text-[#00d255]" />
            <span className="text-sm text-white/80">APPLICATION FORM</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">입사지원서</span>
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            아래 양식을 작성하여 지원해주세요
            <br className="hidden md:block" />
            성실히 작성된 지원서는 우대 검토됩니다
          </p>
        </motion.div>

        {/* Application Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="glass border border-white/10 rounded-3xl p-8 lg:p-12">
            {/* Personal Information */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 p-0.5">
                  <div className="w-full h-full bg-black rounded-lg flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white">기본 정보</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    이름 <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="홍길동"
                    className="w-full px-4 py-3 rounded-lg glass border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#00d255] transition-colors bg-white/5"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    생년월일 <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="date"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg glass border border-white/20 text-white focus:outline-none focus:border-[#00d255] transition-colors bg-white/5"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    이메일 <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="example@email.com"
                    className="w-full px-4 py-3 rounded-lg glass border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#00d255] transition-colors bg-white/5"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    연락처 <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="010-1234-5678"
                    className="w-full px-4 py-3 rounded-lg glass border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#00d255] transition-colors bg-white/5"
                  />
                </div>
              </div>
            </div>

            {/* Position & Experience */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 p-0.5">
                  <div className="w-full h-full bg-black rounded-lg flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white">지원 정보</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    지원 직무 <span className="text-red-400">*</span>
                  </label>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg glass border border-white/20 text-white focus:outline-none focus:border-[#00d255] transition-colors bg-white/5"
                  >
                    <option value="" className="bg-black">선택해주세요</option>
                    <option value="product" className="bg-black">보험 상품 개발</option>
                    <option value="service" className="bg-black">고객 서비스</option>
                    <option value="marketing" className="bg-black">마케팅</option>
                    <option value="sales" className="bg-black">영업</option>
                    <option value="other" className="bg-black">기타</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    경력 구분 <span className="text-red-400">*</span>
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg glass border border-white/20 text-white focus:outline-none focus:border-[#00d255] transition-colors bg-white/5"
                  >
                    <option value="" className="bg-black">선택해주세요</option>
                    <option value="entry" className="bg-black">신입</option>
                    <option value="1-3" className="bg-black">1~3년</option>
                    <option value="3-5" className="bg-black">3~5년</option>
                    <option value="5+" className="bg-black">5년 이상</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 p-0.5">
                  <div className="w-full h-full bg-black rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white">학력 사항</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    최종 학력 <span className="text-red-400">*</span>
                  </label>
                  <select
                    name="education"
                    value={formData.education}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg glass border border-white/20 text-white focus:outline-none focus:border-[#00d255] transition-colors bg-white/5"
                  >
                    <option value="" className="bg-black">선택해주세요</option>
                    <option value="high-school" className="bg-black">고등학교 졸업</option>
                    <option value="associate" className="bg-black">전문대 졸업</option>
                    <option value="bachelor" className="bg-black">대학교 졸업</option>
                    <option value="master" className="bg-black">석사</option>
                    <option value="phd" className="bg-black">박사</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    학교명
                  </label>
                  <input
                    type="text"
                    name="university"
                    value={formData.university}
                    onChange={handleChange}
                    placeholder="예: 서울대학교"
                    className="w-full px-4 py-3 rounded-lg glass border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#00d255] transition-colors bg-white/5"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    전공
                  </label>
                  <input
                    type="text"
                    name="major"
                    value={formData.major}
                    onChange={handleChange}
                    placeholder="예: 경영학과"
                    className="w-full px-4 py-3 rounded-lg glass border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#00d255] transition-colors bg-white/5"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    졸업 연도
                  </label>
                  <input
                    type="text"
                    name="graduationYear"
                    value={formData.graduationYear}
                    onChange={handleChange}
                    placeholder="예: 2020"
                    className="w-full px-4 py-3 rounded-lg glass border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#00d255] transition-colors bg-white/5"
                  />
                </div>
              </div>
            </div>

            {/* Career & Skills */}
            <div className="mb-12">
              <div className="mb-6">
                <label className="block text-sm font-medium text-white/80 mb-2">
                  경력 사항
                </label>
                <textarea
                  name="careerHistory"
                  value={formData.careerHistory}
                  onChange={handleChange}
                  rows={4}
                  placeholder="주요 경력 및 담당 업무를 자유롭게 작성해주세요"
                  className="w-full px-4 py-3 rounded-lg glass border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#00d255] transition-colors bg-white/5 resize-none"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-white/80 mb-2">
                  지원 동기 <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="지원 동기 및 포부를 작성해주세요"
                  className="w-full px-4 py-3 rounded-lg glass border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#00d255] transition-colors bg-white/5 resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  보유 기술 및 자격증
                </label>
                <textarea
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  rows={3}
                  placeholder="보험 관련 자격증, 외국어, IT 기술 등을 작성해주세요"
                  className="w-full px-4 py-3 rounded-lg glass border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#00d255] transition-colors bg-white/5 resize-none"
                />
              </div>
            </div>

            {/* File Upload */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 p-0.5">
                  <div className="w-full h-full bg-black rounded-lg flex items-center justify-center">
                    <Upload className="w-5 h-5 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white">서류 첨부</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    이력서 <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      id="resume"
                    />
                    <label
                      htmlFor="resume"
                      className="flex items-center justify-center gap-3 w-full px-4 py-6 rounded-lg glass border-2 border-dashed border-white/20 text-white/60 hover:border-[#00d255] hover:text-white transition-all cursor-pointer group"
                    >
                      <Upload className="w-5 h-5 group-hover:text-[#00d255] transition-colors" />
                      <span>PDF 또는 Word 파일을 선택하세요</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    자기소개서
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      id="coverLetter"
                    />
                    <label
                      htmlFor="coverLetter"
                      className="flex items-center justify-center gap-3 w-full px-4 py-6 rounded-lg glass border-2 border-dashed border-white/20 text-white/60 hover:border-[#00d255] hover:text-white transition-all cursor-pointer group"
                    >
                      <Upload className="w-5 h-5 group-hover:text-[#00d255] transition-colors" />
                      <span>PDF 또는 Word 파일을 선택하세요</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy Agreement */}
            <div className="mb-8">
              <div className="glass border border-white/10 rounded-xl p-6">
                <div className="flex items-start gap-3 mb-4">
                  <CheckCircle className="w-5 h-5 text-[#00d255] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-semibold mb-2">개인정보 수집 및 이용 동의</h4>
                    <p className="text-white/60 text-sm leading-relaxed mb-4">
                      회사는 채용 전형을 위해 아래와 같이 개인정보를 수집 및 이용합니다.
                    </p>
                    <ul className="text-white/60 text-sm space-y-2 mb-4">
                      <li>• 수집 항목: 이름, 생년월일, 연락처, 이메일, 학력, 경력</li>
                      <li>• 이용 목적: 채용 전형 진행 및 결과 통보</li>
                      <li>• 보유 기간: 채용 전형 종료 후 6개월</li>
                    </ul>
                  </div>
                </div>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    required
                    className="w-5 h-5 rounded border-2 border-white/20 bg-white/5 checked:bg-[#00d255] checked:border-[#00d255] focus:outline-none focus:ring-2 focus:ring-[#00d255]/50 transition-all"
                  />
                  <span className="text-white/80 group-hover:text-white transition-colors">
                    개인정보 수집 및 이용에 동의합니다 <span className="text-red-400">*</span>
                  </span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-[#3182f6] to-[#00d255] text-white font-bold text-lg hover-glow transition-all duration-300"
            >
              입사지원서 제출하기
            </motion.button>

            <p className="text-white/50 text-sm text-center mt-4">
              * 표시는 필수 입력 항목입니다
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
