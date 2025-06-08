"use client";

import GlassCard from "@/components/glass-card";
import { useMounted } from "@/hooks/use-mounted";

export default function Home() {
  const mounted = useMounted();

  if (!mounted) return null;

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden text-black dark:text-white transition-colors duration-300">
      {/* Gradient Background */}
      {/* <div */}
      {/* className=" */}
      {/* absolute inset-0 -z-10  */}
      {/* bg-gradient-to-br from-purple-300 via-white  */}
      {/* to-gray-300 dark:from-gray-900 dark:via-black dark:to-gray-800 */}
      {/* " */}
      {/* /> */}
      <div className="w-full h-32 rounded bg-gradient-to-r from-white to-gray-300 dark:from-gray-800 dark:to-black flex items-center justify-center text-xl font-semibold">
        Gradient Debug Box
      </div>

      {/* Text Color Test */}
      <div className="bg-white dark:bg-black text-black dark:text-white p-6 rounded shadow text-center">
        This text should switch color in dark mode
      </div>

      {/* Glass Card */}
      {/* <GlassCard className="max-w-md text-center text-black dark:text-white"> */}
      {/*   <div className="bg-white text-black dark:bg-black dark:text-white p-4 rounded"> */}
      {/*     Debug Box */}
      {/*   </div> */}
      {/* </GlassCard> */}
    </main>
  );
}
