import { motion } from "framer-motion";
import { Calendar, Users, Trophy, Award } from "lucide-react";

const timelineEvents = [
  {
    icon: Users,
    title: "Pendaftaran",
    date: "Januari - Maret 2026",
    description: "Periode pendaftaran peserta lomba Posmotion",
  },
  {
    icon: Calendar,
    title: "Technical Meet",
    date: "10 April 2026",
    description: "Rapat teknis dan verifikasi peserta",
  },
  {
    icon: Trophy,
    title: "Perlombaan",
    date: "11-16 April 2026",
    description: "Pelaksanaan semua kategori lomba",
  },
  {
    icon: Award,
    title: "Awarding Night",
    date: "17 April 2026",
    description: "Malam penganugerahan dan penutupan acara",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-ocean-cyan/20 text-ocean-deep text-sm font-medium mb-4">
            Timeline Acara
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Jadwal <span className="ocean-gradient-text">Posmotion 2026</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ikuti timeline acara Posmotion dari pendaftaran hingga awarding night
          </p>
        </motion.div>

        {/* Timeline Horizontal */}
        <div className="relative max-w-6xl mx-auto px-4">
          {/* Timeline Line - Desktop */}
          <div className="hidden md:block absolute top-24 left-8 right-8 h-1 bg-gradient-to-r from-ocean-cyan via-ocean-blue to-ocean-bright rounded-full">
            <div className="absolute inset-0 bg-gradient-to-r from-ocean-cyan/20 via-ocean-blue/20 to-ocean-bright/20 rounded-full animate-pulse" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 lg:gap-4">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Timeline Dot - Desktop */}
                <div className="hidden md:block absolute -top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-ocean-cyan border-4 border-background shadow-lg z-10 group-hover:scale-125 transition-transform duration-300">
                  <div className="absolute inset-1 rounded-full bg-ocean-bright animate-ping" />
                </div>

                {/* Mobile connector line */}
                <div className="md:hidden absolute left-8 top-20 w-0.5 h-16 bg-gradient-to-b from-ocean-cyan to-transparent" />

                {/* Card */}
                <div className="relative bg-card border border-border rounded-2xl p-6 hover:border-ocean-cyan/50 hover:shadow-xl transition-all duration-300 text-center mt-8 md:mt-12">
                  {/* Mobile dot */}
                  <div className="md:hidden absolute -top-3 left-6 w-4 h-4 rounded-full bg-ocean-cyan border-2 border-background shadow-md" />

                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-ocean-deep to-ocean-blue flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <event.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                    {event.title}
                  </h3>
                  <p className="text-ocean-cyan font-semibold text-sm mb-3">
                    {event.date}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
