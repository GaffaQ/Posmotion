import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { NewsCard } from "@/components/news/NewsCard";
import { newsData } from "@/data/newsData";
import footerImage from "@/assets/footer.jpg";
import logoImage from "@/assets/logo.png";

const categoryOptions = [
  { id: "option1", label: "RA/TK" },
  { id: "option2", label: "SD/MI" },
  { id: "option3", label: "SMP/MTS" },
  { id: "option4", label: "SMA/MA" },
];

const NewsPage = () => {
  const [activeOption, setActiveOption] = useState<"option1" | "option2" | "option3" | "option4">("option1");

  const filteredNews = newsData.filter((news) => news.optionCategory === activeOption);

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${footerImage})` }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-ocean-deep/80" />

        {/* Decorative bubbles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                width: Math.random() * 20 + 10,
                height: Math.random() * 20 + 10,
                left: `${Math.random() * 100}%`,
                bottom: "-20px",
              }}
              animate={{
                y: [0, -400],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: Math.random() * 8 + 5,
                repeat: Infinity,
                delay: Math.random() * 4,
              }}
            />
          ))}
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full"
              >
                {/* <img src={logoImage} alt="Logo" className="w-6 h-6 object-contain" />
                <span className="text-xs md:text-sm font-medium text-cyan-200">Kompetisi Bergengsi</span> */}
              </motion.div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-4 leading-tight">
                INFO LOMBA
              </h1>
              <p className="text-lg md:text-xl text-cyan-100 max-w-2xl">
                Temukan berbagai kategori lomba menarik dan tantang kemampuanmu di Posmotion. Daftarkan dirimu sekarang dan jadi bagian dari komunitas pelajar berbakat!
              </p>
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-2xl flex items-center justify-center"
            >
              <img src={logoImage} alt="Posmotion Logo" className="w-24 h-24 md:w-32 md:h-32 object-contain" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 bg-background">
        <div className="container">
          {/* Category Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-12"
          >
            {categoryOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setActiveOption(option.id as "option1" | "option2" | "option3" | "option4")}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 border-2 ${
                  activeOption === option.id
                    ? "bg-ocean-deep text-primary-foreground border-ocean-deep shadow-lg"
                    : "bg-transparent text-ocean-deep border-ocean-deep hover:bg-ocean-deep hover:text-primary-foreground"
                }`}
              >
                {option.label}
              </button>
            ))}
          </motion.div>

          {/* News Grid 3x3 */}
          <motion.div
            key={activeOption}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredNews.slice(0, 9).map((news, index) => (
              <NewsCard 
                key={news.id} 
                news={news} 
                index={index}
                variant="default"
              />
            ))}
          </motion.div>

          {filteredNews.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">Belum ada lomba di kategori ini.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default NewsPage;
