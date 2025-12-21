import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";
import { NewsItem } from "@/data/newsData";
import { cn } from "@/lib/utils";

interface NewsCardProps {
  news: NewsItem;
  index?: number;
  variant?: "default" | "featured";
}

export function NewsCard({ news, index = 0, variant = "default" }: NewsCardProps) {
  const isFeatured = variant === "featured";

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-card shadow-md hover:shadow-lg transition-all duration-300",
        isFeatured && "md:col-span-2 md:row-span-2"
      )}
    >
      <Link to={`/news/${news.slug}`} className="block">
        {/* Image */}
        <div className={cn(
          "relative overflow-hidden",
          isFeatured ? "aspect-[16/9] md:aspect-[16/10]" : "aspect-[16/10]"
        )}>
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/80 via-ocean-deep/20 to-transparent" />
          
          {/* Category Badge */}
          <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-ocean-cyan text-ocean-deep text-xs font-semibold">
            {news.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Meta */}
          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
            <span className="flex items-center gap-1">
              <User className="w-3 h-3" />
              {news.author}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {news.date}
            </span>
          </div>

          {/* Title */}
          <h3 className={cn(
            "font-heading font-bold text-foreground group-hover:text-ocean-deep transition-colors line-clamp-2 mb-2",
            isFeatured ? "text-xl md:text-2xl" : "text-lg"
          )}>
            {news.title}
          </h3>

          {/* Excerpt */}
          <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
            {news.excerpt}
          </p>

          {/* Read More */}
          <span className="inline-flex items-center gap-2 text-ocean-deep font-semibold text-sm group-hover:gap-3 transition-all">
            Cek Detail
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
