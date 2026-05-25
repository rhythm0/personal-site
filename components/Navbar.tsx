import { siteSections } from "../data/sections";

export default function Navbar() {
  const navbarSections = siteSections.filter((section) => section.showInNavbar);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-black/60 border-b border-neutral-900">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-semibold tracking-wide">Siyuan Qi / rhythm0</div>

        <div className="flex gap-6 text-sm text-neutral-300">
          <a href="#home" className="hover:text-white">Home</a>
          {navbarSections.map((section) => (
            <a key={section.id} href={`#${section.id}`} className="hover:text-white">
              {section.navbarLabel ?? section.navTitle}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
