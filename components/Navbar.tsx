export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-black/60 border-b border-neutral-900">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-semibold tracking-wide">Siyuan Qi / rhythm0</div>

        <div className="flex gap-6 text-sm text-neutral-300">
          <a href="#home" className="hover:text-white">Home</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#rhythm0" className="hover:text-white">rhythm0</a>
          <a href="#photography" className="hover:text-white">Photography</a>
        </div>
      </div>
    </nav>
  );
}