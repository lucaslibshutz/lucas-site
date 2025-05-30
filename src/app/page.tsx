import ThemeToggle from "@/components/ThemeToggle";

export default function HomePage() {
  return (
    <main className="min-h screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      <h1 className="text-4xl font-semibold p8">Hello, dark/light mode!</h1>
      <ThemeToggle />
    </main>
  );
}
