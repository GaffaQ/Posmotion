import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Trophy, Users } from "lucide-react";
import heroImage from "@/assets/hero-ocean.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Posmotion Competition Event"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep/70 via-ocean-deep/50 to-ocean-deep/90" />
      </div>

      {/* Bubble animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-ocean-cyan/20"
            style={{
              width: Math.random() * 20 + 10,
              height: Math.random() * 20 + 10,
              left: `${Math.random() * 100}%`,
              bottom: "-20px",
            }}
            animate={{
              y: [0, -window.innerHeight - 100],
              x: [0, Math.sin(i) * 50],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container relative z-20 text-primary-foreground pt-20 flex items-center justify-center">
        {/* Centered Text content */}
        <div className="flex-1 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex justify-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ocean-cyan/20 backdrop-blur-sm border border-ocean-cyan/30">
              {/* <Trophy className="w-4 h-4 text-ocean-cyan" /> */}
              <span className="text-sm font-medium text-ocean-cyan whitespace-nowrap">Lautan Inspirasi, Samudra penuh Prestasi</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight"
          >
            Posmotion
            <br />
            <span className="text-ocean-cyan text-2xl md:text-3xl lg:text-4xl">Pondok Santi Asromo Competition</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-ocean-mist/90 max-w-2xl mb-10 mx-auto"
          >
            Event tahunan yang mengundang berbagai pelajar dari tingkat TK-SMA untuk berpartisipasi dalam berbagai lomba yang menarik dan edukatif.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="hero" size="xl" asChild>
              <a href="/news">
                <Trophy className="w-5 h-5" />
                Daftar Lomba
              </a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a href="https://wa.me/6282320090805" target="_blank" rel="noopener noreferrer">
                <Users className="w-5 h-5" />
                Hubungi Kami
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24">
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            fill="hsl(200 60% 98%)"
          />
        </svg>
      </div>
    </section>
  );
}
