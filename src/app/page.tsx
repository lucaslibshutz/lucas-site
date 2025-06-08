"use client";

import GlassCard from "@/components/glass-card";

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden text-black dark:text-white transition-colors duration-300">
      {/* Gradient Background */}
      <div
        className="
        absolute inset-0 -z-10 
        bg-gradient-to-br from-purple-300 via-white 
        to-gray-300 dark:from-gray-900 dark:via-black dark:to-gray-800
        "
      />

      {/* Glass Card */}
      <GlassCard className="max-w-md text-center text-black dark:text-white">
        <h1 className="text-2xl font-bold mb-2">Frosted UI</h1>
        <p className="mb-4 text-black/70 dark:text-white/70">
          This is a reusable glassmorphic card that responds to dark mode!
        </p>
        <button className="px-4 py-2 rounded-lg bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 transition">
          Try Me
        </button>
      </GlassCard>
    </main>
  );
}
