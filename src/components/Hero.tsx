import { motion } from "motion/react";
import { Apple, Smartphone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background Collage Elements */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <motion.img
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: -12 }}
          transition={{ duration: 1, delay: 0.2 }}
          src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=800"
          className="absolute top-10 left-10 w-64 h-80 object-cover border-8 border-white shadow-2xl"
          alt="Candid friends"
          referrerPolicy="no-referrer"
        />
        <motion.img
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 8 }}
          transition={{ duration: 1, delay: 0.4 }}
          src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80&w=800"
          className="absolute bottom-10 right-10 w-72 h-96 object-cover border-8 border-white shadow-2xl"
          alt="Late night street"
          referrerPolicy="no-referrer"
        />
        <motion.img
          initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: -5 }}
          transition={{ duration: 1, delay: 0.6 }}
          src="https://images.unsplash.com/photo-1514525253344-48568348624b?auto=format&fit=crop&q=80&w=800"
          className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-48 h-64 object-cover border-8 border-white shadow-2xl"
          alt="Clinking glasses"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-10 max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1 mb-6 text-sm font-semibold tracking-widest uppercase border border-navy/20 rounded-full text-navy/60">
            Social Discovery Redefined
          </span>
          <h1 className="text-7xl md:text-9xl font-serif font-bold leading-tight mb-8 tracking-tighter">
            Rewiring the <br />
            <span className="text-orange italic">Real World.</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-12 text-navy/80 leading-relaxed font-light">
            Turn boredom into action. Turn strangers into temporary social circles. 
            Find spontaneous meetups happening right now.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <button className="tactile-button group">
            <Apple className="mr-2 w-5 h-5" />
            Download for iOS
          </button>
          <button className="tactile-button-navy group">
            <Smartphone className="mr-2 w-5 h-5" />
            Download for Android
          </button>
        </motion.div>
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 text-navy/20"
      >
        <div className="w-px h-24 bg-gradient-to-b from-navy/40 to-transparent" />
      </motion.div>
    </section>
  );
}
