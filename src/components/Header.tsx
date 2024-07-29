export default function Header() {
  return (
    <header className="bg-gray-900 text-white fixed top-0 w-full z-20">
      <div className="container mx-auto px-4 py-2 flex justify-center">
        <nav className="space-x-8 text-lg flex">
          <a href="#about" className="hover:text-gray-300">
            About me
          </a>
          <a href="#skills" className="hover:text-gray-300">
            Skills
          </a>
          <a href="#works" className="hover:text-gray-300">
            Works
          </a>
          <a href="#contact" className="hover:text-gray-300">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
