import { motion } from "motion/react";
import { Zap, Mic2, ArrowRight } from "lucide-react";

const FeatureCard = ({ title, description, icon: Icon, image, rotate }: any) => (
  <motion.div
    whileInView={{ opacity: 1, y: 0, rotate: rotate }}
    initial={{ opacity: 0, y: 50, rotate: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="polaroid-card group cursor-pointer"
  >
    <div className="relative h-64 overflow-hidden mb-6 bg-gray-100">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg">
        <Icon className="w-6 h-6 text-orange" />
      </div>
    </div>
    <h3 className="text-3xl font-serif font-bold mb-4 text-navy">{title}</h3>
    <p className="text-navy/70 leading-relaxed mb-6">{description}</p>
    <div className="flex items-center text-orange font-semibold group-hover:translate-x-2 transition-transform">
      Learn More <ArrowRight className="ml-2 w-4 h-4" />
    </div>
  </motion.div>
);

export default function Features() {
  return (
    <section className="py-32 px-6 bg-sand relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl md:text-7xl font-serif font-bold leading-tight mb-8">
              Spontaneity, <br />
              <span className="text-orange italic">Architected.</span>
            </h2>
            <p className="text-xl text-navy/80 leading-relaxed max-w-xl">
              AURA breaks down the logic of social interaction into two distinct speeds. 
              Whether you want something instant or something planned, we've built the engine for it.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          <FeatureCard
            title="⚡ Moments"
            description="For instant, small group meetups (2–6 people) happening now. Low-friction swipe mechanics: swipe right to join, left to skip. Perfect for coffee, a quick walk, or spontaneous drinks."
            icon={Zap}
            image="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800"
            rotate={-2}
          />
          <FeatureCard
            title="🎤 Events"
            description="For larger, planned gatherings happening in the near future. Concerts, workshops, or block parties. See who's going, grab your spot, and build the hype before you even arrive."
            icon={Mic2}
            image="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800"
            rotate={3}
          />
        </div>
      </div>

      {/* Decorative Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-serif font-black text-navy/5 pointer-events-none select-none">
        AURA
      </div>
    </section>
  );
}
