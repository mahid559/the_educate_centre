"use client";

import React from "react";
import { motion } from "framer-motion";
import { cardLiftProps } from "@/lib/motion";

interface FeatureCardProps {
  title: string;
  description: string;
  accent?: "blue" | "pink" | "teal" | "yellow";
  icon?: React.ReactNode;
  index?: number;
}

export function FeatureCard({
  title,
  description,
  accent = "blue",
  icon,
  index = 0,
}: FeatureCardProps) {
  const getAccentStyles = () => {
    switch (accent) {
      case "pink":
        return {
          cardBg: "bg-[#F73775] text-white",
          iconBg: "bg-white text-[#F73775]",
          titleColor: "text-white",
          descColor: "text-white/90",
          dotColor: "bg-white",
          dividerColor: "border-white/20",
        };
      case "teal":
        return {
          cardBg: "bg-[#00CDC4] text-white",
          iconBg: "bg-white text-[#008982]",
          titleColor: "text-white",
          descColor: "text-white/90",
          dotColor: "bg-white",
          dividerColor: "border-white/20",
        };
      case "yellow":
        return {
          cardBg: "bg-[#FFC73B] text-[#3B3B3D]",
          iconBg: "bg-white text-[#B87C00]",
          titleColor: "text-[#3B3B3D]",
          descColor: "text-[#3B3B3D]/90",
          dotColor: "bg-[#3B3B3D]",
          dividerColor: "border-black/10",
        };
      case "blue":
      default:
        return {
          cardBg: "bg-[#4F67FF] text-white",
          iconBg: "bg-white text-[#4F67FF]",
          titleColor: "text-white",
          descColor: "text-white/90",
          dotColor: "bg-white",
          dividerColor: "border-white/20",
        };
    }
  };

  const styles = getAccentStyles();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      {...cardLiftProps}
      className={`${styles.cardBg} rounded-[28px] p-7 sm:p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between`}
    >
      <div>
        {icon && (
          <div
            className={`w-14 h-14 rounded-2xl ${styles.iconBg} flex items-center justify-center mb-6 shadow-md`}
          >
            {icon}
          </div>
        )}
        <h3 className={`text-xl sm:text-2xl font-extrabold mb-3 font-[var(--font-ubuntu)] leading-tight ${styles.titleColor}`}>
          {title}
        </h3>
        <p className={`text-sm ${styles.descColor} leading-relaxed`}>
          {description}
        </p>
      </div>

      <div className={`mt-6 pt-4 border-t ${styles.dividerColor} flex items-center gap-2`}>
        <span className={`w-2 h-2 rounded-full ${styles.dotColor}`} />
        <span className={`text-[11px] font-bold uppercase tracking-wider ${styles.descColor}`}>
          Educatee Core Standard
        </span>
      </div>
    </motion.div>
  );
}
