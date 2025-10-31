"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-black border-t border-white/10">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-20 relative z-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold gradient-text mb-4">Insurance HR</h3>
              <p className="text-white/70 mb-6 max-w-md leading-relaxed">
                보험업계의 미래를 만들어가는 전문가 그룹입니다.
                함께 성장하고 발전하는 조직 문화를 추구합니다.
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                {[
                  { icon: Linkedin, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Facebook, href: "#" },
                  { icon: Instagram, href: "#" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 rounded-full glass border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all"
                  >
                    <social.icon className="w-5 h-5 text-white/70" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">연락처</h3>
            <ul className="space-y-3">
              {[
                { icon: Phone, text: "02-1234-5678", href: "tel:02-1234-5678" },
                { icon: Mail, text: "contact@insurance-hr.com", href: "mailto:contact@insurance-hr.com" },
                { icon: MapPin, text: "서울특별시 강남구", href: "#" },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  className="group"
                >
                  <a
                    href={item.href}
                    className="flex items-center gap-3 text-white/60 hover:text-white transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg glass border border-white/10 flex items-center justify-center group-hover:border-[#00d255] transition-all">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm">{item.text}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">빠른 링크</h3>
            <ul className="space-y-3">
              {[
                { label: "조직소개", href: "#about" },
                { label: "구성원", href: "#team" },
                { label: "채용안내", href: "#recruitment" },
                { label: "입사지원", href: "#recruitment" },
              ].map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all text-[#00d255]" />
                    <span>{link.label}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass border border-white/10 rounded-2xl p-8 mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">채용 소식 받아보기</h3>
              <p className="text-white/60 text-sm">
                최신 채용 정보와 조직 소식을 이메일로 받아보세요
              </p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="이메일 주소를 입력하세요"
                className="flex-1 px-4 py-3 rounded-lg glass border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#00d255] transition-colors bg-white/5"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#3182f6] to-[#00d255] text-white font-medium whitespace-nowrap hover-glow transition-all"
              >
                구독하기
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/50">
              &copy; 2024 Insurance HR. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-white/50">
              <Link href="#" className="hover:text-white transition-colors">
                개인정보처리방침
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                이용약관
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                사이트맵
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3182f6] via-[#00d255] to-[#3182f6]" />
    </footer>
  );
}
