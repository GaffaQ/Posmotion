import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { newsData } from "@/data/newsData";
import { ArrowLeft, Calendar, User, Mail, UserPlus, Trophy } from "lucide-react";
import footerImage from "@/assets/footer.jpg";

const NewsDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const news = newsData.find((n) => n.slug === slug);

  if (!news) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="text-4xl font-heading font-bold text-foreground mb-4">
              Lomba Tidak Ditemukan
            </h1>
            <Button variant="default" asChild>
              <Link to="/news">
                <ArrowLeft className="w-4 h-4" />
                Kembali ke Info Lomba
              </Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  const renderFormattedText = (
    text: string,
    formatting?: Array<{ type: "bold" | "italic" | "underline"; start: number; end: number }>
  ) => {
    if (!formatting || formatting.length === 0) {
      return text;
    }

    const sortedFormatting = [...formatting].sort((a, b) => a.start - b.start);
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;

    sortedFormatting.forEach((format, index) => {
      if (format.start > lastIndex) {
        parts.push(text.slice(lastIndex, format.start));
      }

      const formattedText = text.slice(format.start, format.end);
      let element: React.ReactNode = formattedText;

      switch (format.type) {
        case "bold":
          element = <strong key={index} className="font-bold">{formattedText}</strong>;
          break;
        case "italic":
          element = <em key={index} className="italic">{formattedText}</em>;
          break;
        case "underline":
          element = <span key={index} className="underline decoration-ocean-cyan decoration-2">{formattedText}</span>;
          break;
      }

      parts.push(element);
      lastIndex = format.end;
    });

    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }

    return parts;
  };

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative pt-28 pb-16 overflow-hidden">
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
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-end"
          >
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex-shrink-0"
            >
              <Button
                variant="outline"
                size="sm"
                asChild
                className="bg-white/15 backdrop-blur-sm border-white/30 text-white hover:bg-white/25 hover:border-white/50 rounded-lg"
              >
                <Link to="/news" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Kembali ke Info Lomba
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20">
            <path 
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
              fill="hsl(200 60% 98%)"
            />
          </svg>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 bg-background">
        <div className="container max-w-4xl">
          {/* Title placed above the main image */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="mb-2 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/20 border border-cyan-300/50">
              <Trophy className="w-4 h-4 text-cyan-600" />
              <span className="text-xs md:text-sm font-medium text-cyan-700">{news.category}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight">
              {news.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-muted-foreground text-sm md:text-base mt-3">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {news.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {news.date}
              </span>
            </div>
          </motion.div>

          {/* Content Images */}
          {news.contentImages && news.contentImages.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mb-12 flex justify-center"
            >
              <div className="w-full max-w-2xl space-y-4">
                {news.contentImages.map((img, idx) => (
                  <motion.img
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + idx * 0.1 }}
                    src={img}
                    alt={`${news.title} - gambar ${idx + 1}`}
                    className="w-full h-auto rounded-xl shadow-lg object-cover"
                  />
                ))}
              </div>
            </motion.div>
          )}

          {/* Article Content */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="prose prose-lg max-w-none"
          >
            {/* Subtitle */}
            {news.content.subtitle && (
              <h2 className="text-xl md:text-2xl font-heading font-semibold text-ocean-deep mb-6">
                {news.content.subtitle}
              </h2>
            )}

            {/* Paragraphs */}
            {news.content.paragraphs.map((paragraph, index) => {
              switch (paragraph.type) {
                case "subtitle":
                  return (
                    <motion.h3
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="text-lg md:text-xl font-heading font-semibold text-foreground mt-8 mb-4"
                    >
                      {paragraph.text}
                    </motion.h3>
                  );
                case "quote":
                  return (
                    <motion.blockquote
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="my-8 pl-6 border-l-4 border-ocean-cyan bg-ocean-cyan/10 py-4 pr-4 rounded-r-lg italic text-foreground/80"
                    >
                      "{paragraph.text}"
                    </motion.blockquote>
                  );
                default:
                  return (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="text-foreground/80 leading-relaxed mb-6"
                    >
                      {renderFormattedText(paragraph.text, paragraph.formatting)}
                    </motion.p>
                  );
              }
            })}
          </motion.article>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-12 pt-8 border-t border-border"
          >
            <h4 className="text-lg font-heading font-semibold text-foreground mb-4">
              Tertarik untuk bergabung?
            </h4>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="contact" size="lg" asChild>
                <a href="https://wa.me/6282320090805" target="_blank" rel="noopener noreferrer">
                  <Mail className="w-5 h-5" />
                  Kontak Kami
                </a>
              </Button>
              <Button variant="register" size="lg" asChild>
                <a href={news.registrationLink} target="_blank" rel="noopener noreferrer">
                  <UserPlus className="w-5 h-5" />
                  Daftar Sekarang
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default NewsDetailPage;
