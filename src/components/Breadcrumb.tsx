import React from "react";
import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  variant?: "light" | "dark";
}

export function Breadcrumb({ items, variant = "light" }: BreadcrumbProps) {
  const isLight = variant === "light";

  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center gap-2">
              {index > 0 && (
                <span
                  className={isLight ? "text-white/40" : "text-[#54595F]/50"}
                  aria-hidden="true"
                >
                  /
                </span>
              )}
              {isLast || !item.href ? (
                <span
                  className={
                    isLight
                      ? "text-[#FFC73B] font-bold"
                      : "text-[#3B3B3D] font-bold"
                  }
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className={`transition-colors hover:underline ${
                    isLight
                      ? "text-white/80 hover:text-white"
                      : "text-[#54595F] hover:text-[#4F67FF]"
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
