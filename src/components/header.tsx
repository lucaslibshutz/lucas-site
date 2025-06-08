import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <header className="flex items-center justify between p-4">
      <h1 className="text-xl font-bold">My Website</h1>
      <ModeToggle />
    </header>
  );
}
