"use client";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div
        className="relative z-10 mx-auto mt-40 max-w-lg rounded-xl
                bg-black/30 border border-white/10 shadow-md
                backdrop-blur-md backdrop-saturate-150
                p-6 text-white"
      >
        <h1 className="text-3xl font-bold mb-4">Glassmorphism Test</h1>
        <p className="mb-4">If this looks frosty, you're set 👍</p>
        <button
          className="px-4 py-2 rounded-lg
                     bg-white/20 backdrop-blur-sm hover:bg-white/30
                     transition"
        >
          Test Button
        </button>
      </div>
    </main>
  );
}
