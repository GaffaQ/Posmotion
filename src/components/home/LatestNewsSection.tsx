import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { NewsCard } from "@/components/news/NewsCard";
import { newsData } from "@/data/newsData";

export function LatestNewsSection() {
  const latestNews = newsData.slice(0, 3);

  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12"
        >
          <div>
            <span className="inline-block px-4 py-1 rounded-full bg-ocean-cyan/20 text-ocean-deep text-sm font-medium mb-4">
              Berita Terbaru
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Kabar dari <span className="ocean-gradient-text">Samudra</span>
            </h2>
          </div>
          <Button variant="outline" asChild>
            <Link to="/news">
              Lihat Semua Berita
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestNews.map((news, index) => (
            <NewsCard key={news.id} news={news} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
