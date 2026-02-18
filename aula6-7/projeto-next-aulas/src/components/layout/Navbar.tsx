import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full border-b border-slate-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-slate-900"
        >
          Frontend2
        </Link>

        <div className="flex items-center gap-6 text-sm font-medium text-slate-700">
          <Link href="/" className="transition hover:text-slate-900">
            Home
          </Link>
          <Link href="/about" className="transition hover:text-slate-900">
            About
          </Link>
          <Link
            href="/(dashboard)/dashboard"
            className="transition hover:text-slate-900"
          >
            Dashboard
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
