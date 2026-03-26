import { motion } from "motion/react";
import { Apple, Smartphone, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-orange py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-7xl md:text-9xl font-serif font-bold leading-tight mb-8 text-white tracking-tighter">
            The End of <br />
            <span className="text-navy italic">Social Friction.</span>
          </h2>
          <p className="text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto mb-12 font-light">
            Boredom ends. Opportunity begins. Join the movement and rewire your real world today.
          </p>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-24"
        >
          <button className="tactile-button-navy group">
            <Apple className="mr-2 w-5 h-5" />
            Download for iOS
          </button>
          <button className="tactile-button group bg-white text-orange shadow-[0_4px_0_0_rgba(0,0,0,0.1)]">
            <Smartphone className="mr-2 w-5 h-5" />
            Download for Android
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-24 border-t border-white/20 items-center">
          <div className="text-left">
            <h3 className="text-3xl font-serif font-bold text-navy mb-4">AURA</h3>
            <p className="text-white/70 text-sm">© 2026 AURA Social. All rights reserved.</p>
          </div>
          <div className="flex justify-center gap-8">
            <Instagram className="w-6 h-6 text-white cursor-pointer hover:text-navy transition-colors" />
            <Twitter className="w-6 h-6 text-white cursor-pointer hover:text-navy transition-colors" />
            <Linkedin className="w-6 h-6 text-white cursor-pointer hover:text-navy transition-colors" />
          </div>
          <div className="text-right flex flex-col gap-2">
            <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Contact Us</a>
          </div>
        </div>
      </div>

      {/* Decorative Background Text */}
      <div className="absolute bottom-0 left-0 w-full text-[30vw] font-serif font-black text-white/10 pointer-events-none select-none leading-none -mb-20">
        AURA
      </div>
    </footer>
  );
}
