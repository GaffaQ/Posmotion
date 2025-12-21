import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Waves, Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center pt-20 pb-20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 ocean-gradient-bg opacity-10" />
        
        {/* Floating bubbles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-ocean-cyan/20"
              style={{
                width: Math.random() * 30 + 15,
                height: Math.random() * 30 + 15,
                left: `${Math.random() * 100}%`,
                bottom: "-30px",
              }}
              animate={{
                y: [0, -800],
                opacity: [0, 0.4, 0],
              }}
              transition={{
                duration: Math.random() * 8 + 6,
                repeat: Infinity,
                delay: Math.random() * 4,
              }}
            />
          ))}
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-lg mx-auto"
          >
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-flex items-center justify-center w-24 h-24 rounded-full ocean-gradient-bg mb-8"
            >
              <Waves className="w-12 h-12 text-primary-foreground" />
            </motion.div>

            <h1 className="text-8xl md:text-9xl font-heading font-bold ocean-gradient-text mb-4">
              404
            </h1>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Halaman Tidak Ditemukan
            </h2>
            <p className="text-muted-foreground mb-8">
              Sepertinya halaman yang Anda cari telah tenggelam di kedalaman samudra.
              Mari kembali ke permukaan!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" asChild>
                <Link to="/">
                  <Home className="w-4 h-4" />
                  Ke Beranda
                </Link>
              </Button>
              <Button variant="outline" size="lg" onClick={() => window.history.back()}>
                <ArrowLeft className="w-4 h-4" />
                Kembali
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
