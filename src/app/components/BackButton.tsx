"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  const router = useRouter();
  const pathname = usePathname();

  // Do not show on homepage
  if (pathname === "/") return null;

  return (
    <button
      onClick={() => router.back()}
      className="fixed top-6 left-6 z-50 flex items-center gap-2 text-[#FAF5F0] bg-[#2C1B16]/60 hover:bg-[#800000]/60 px-4 py-2 rounded-full backdrop-blur-md border border-[#5C4033]/30 transition-all duration-300 shadow-lg hover:shadow-xl"
      aria-label="Go back"
    >
      <ArrowLeft size={20} />
      <span className="hidden sm:inline font-medium">Back</span>
    </button>
  );
}