export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <div className="text-white font-bold text-xl">SECO Systems</div>
          <div className="text-sm mt-1">Professional DTF Flatbed Cutters — US Market</div>
        </div>
        <div className="text-sm text-center md:text-right">
          <div>A CMYK Engineering product</div>
          <div className="mt-1">© {new Date().getFullYear()} SECO Systems. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
