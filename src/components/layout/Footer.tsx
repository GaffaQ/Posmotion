import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import woyImage from "@/assets/woy.jpg";
import logoImage from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${woyImage})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-ocean-deep/80" />

      {/* Wave top decoration */}
      <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden -translate-y-[99%] z-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full">
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            fill="hsl(217 100% 34%)"
          />
        </svg>
      </div>
      
      <div className="container py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-xl">
                <img src={logoImage} alt="Posmotion Logo" className="w-10 h-10 object-contain" />
              </div>
              <span className="text-xl font-heading font-bold text-white">Posmotion</span>
            </Link>
            <p className="text-ocean-mist/95 max-w-md mb-6">
              Posmotion adalah event tahunan yang sekarang sudah mencapai tahun ke-4, bertujuan untuk mengundang berbagai pelajar baik dari tingkat TK-SMA untuk berpartisipasi dalam berbagai lomba yang akan datang.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/official.posmotion?igsh=MXFyb2d5MHZudWh1bA==" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-ocean-cyan/20 flex items-center justify-center hover:bg-ocean-cyan hover:text-ocean-deep transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5 text-cyan-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://www.tiktok.com/@official.posmotion?_r=1&_t=ZS-929Gs3qMICo" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-ocean-cyan/20 flex items-center justify-center hover:bg-ocean-cyan hover:text-ocean-deep transition-colors"
              >
                <span className="sr-only">TikTok</span>
                <svg className="w-5 h-5 text-cyan-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4 text-white">Tautan Cepat</h4>
            <ul className="space-y-3">
              {[
                { label: "Beranda", href: "/" },
                { label: "Info Lomba", href: "/news" },
                // { label: "Tentang Kami", href: "#" },
                // { label: "Galeri", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href} 
                    className="text-ocean-mist/95 hover:text-ocean-cyan transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4 text-white">Kontak</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-200 shrink-0 mt-0.5" />
                <span className="text-ocean-mist/95"><a href="https://maps.app.goo.gl/ESNs5ePTzrES74Kz5">Pondok Santi Asromo</a></span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-cyan-200 shrink-0" />
                <span className="text-ocean-mist/95"><a href="https://wa.me/6282320090805">Kontak Kami</a></span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-cyan-200 shrink-0" />
                <span className="text-ocean-mist/95"><a href="https://www.instagram.com/official.posmotion">Instagram</a></span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-ocean-cyan/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-ocean-mist/85 text-sm">
            © 2026 Posmotion. Hak Cipta Dilindungi.
          </p>
          <div className="flex gap-6 text-sm text-ocean-mist/85">
            <a href="#" className="hover:text-ocean-cyan transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-ocean-cyan transition-colors">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
