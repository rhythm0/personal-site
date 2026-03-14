export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-black/60 border-b border-neutral-900">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-semibold tracking-wide">Siyuan Qi / rhythm0</div>

        <div className="flex gap-6 text-sm text-neutral-300">
          <a href="#home" className="hover:text-white">Home</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#experience" className="hover:text-white">Experience</a>
          {/* 大屏幕显示所有项目 */}
          {/* <a href="#music" className="hover:text-white hidden md:inline">Music</a>
          <a href="#painting" className="hover:text-white hidden md:inline">Painting</a>
          <a href="#calligraphy" className="hover:text-white hidden md:inline">Calligraphy</a>
          <a href="#photography" className="hover:text-white hidden md:inline">Photography</a> */}
          
          {/* 小屏幕显示 Gallery */}
          <a href="#music" className="hover:text-white">Gallery</a>
          {/* <a href="#garden" className="hover:text-white">Garden</a> */}
        </div>
      </div>
    </nav>
  );
}