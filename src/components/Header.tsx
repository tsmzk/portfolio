export default function Header() {
    return (
      <header className="bg-gray-800 p-4">
        <nav>
          <ul className="flex space-x-4 justify-center">
            <li><a href="#profile" className="text-white">Profile</a></li>
            <li><a href="#skills" className="text-white">Skills</a></li>
            <li><a href="#works" className="text-white">Works</a></li>
            <li><a href="#contact" className="text-white">Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  }
  