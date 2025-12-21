import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 ocean-gradient-bg opacity-90" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-ocean-cyan/10"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: Math.random() * 4 + 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center text-primary-foreground"
        >
          <Mail className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Bergabung dengan Komunitas Pecinta Laut
          </h2>
          <p className="text-lg text-ocean-mist/90 mb-8 max-w-xl mx-auto">
            Dapatkan informasi terbaru tentang konservasi laut, tips diving, dan berita
            eksklusif langsung di inbox Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="ocean" 
              size="xl"
              className="bg-primary-foreground text-ocean-deep hover:bg-ocean-cyan"
            >
              <Mail className="w-5 h-5" />
              Hubungi Kami
            </Button>
            <Button 
              variant="hero-outline" 
              size="xl"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-ocean-deep"
            >
              Daftar Sekarang
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
