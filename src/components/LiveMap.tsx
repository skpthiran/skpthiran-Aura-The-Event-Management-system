import { motion } from "motion/react";
import { MapPin, Users, Calendar } from "lucide-react";

const MapMarker = ({ top, left, type, delay }: any) => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: delay }}
    className="absolute z-20 group"
    style={{ top, left }}
  >
    <div className={`p-2 rounded-full shadow-lg ${type === 'moment' ? 'bg-orange text-white' : 'bg-navy text-sand'}`}>
      {type === 'moment' ? <Users className="w-4 h-4" /> : <Calendar className="w-4 h-4" />}
    </div>
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white p-2 rounded shadow-xl whitespace-nowrap text-xs font-bold text-navy">
      {type === 'moment' ? '3 People Nearby' : 'Jazz Night @ 8PM'}
    </div>
  </motion.div>
);

export default function LiveMap() {
  return (
    <section className="py-32 px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative h-[600px] risograph-map rounded-3xl overflow-hidden border-8 border-sand shadow-2xl">
          <div className="absolute inset-0 z-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 100 Q 250 50 500 100 T 1000 100" fill="none" stroke="#1A2B4C" strokeWidth="2" />
              <path d="M0 300 Q 250 350 500 300 T 1000 300" fill="none" stroke="#1A2B4C" strokeWidth="2" />
              <path d="M200 0 Q 150 250 200 500 T 200 1000" fill="none" stroke="#1A2B4C" strokeWidth="2" />
              <path d="M600 0 Q 650 250 600 500 T 600 1000" fill="none" stroke="#1A2B4C" strokeWidth="2" />
            </svg>
          </div>

          <MapMarker top="20%" left="30%" type="moment" delay={0.2} />
          <MapMarker top="45%" left="60%" type="event" delay={0.4} />
          <MapMarker top="70%" left="25%" type="moment" delay={0.6} />
          <MapMarker top="15%" left="75%" type="moment" delay={0.8} />

          <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange/10 rounded-full flex items-center justify-center">
                <MapPin className="text-orange w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-navy">The City is Alive</h4>
                <p className="text-sm text-navy/60">42 active moments nearby</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-navy text-sand rounded-lg font-bold text-sm">
              Open Map
            </button>
          </div>
        </div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl md:text-7xl font-serif font-bold leading-tight mb-8">
            The Engine of <br />
            <span className="text-orange italic">Spatial Awareness.</span>
          </h2>
          <p className="text-xl text-navy/80 leading-relaxed mb-8">
            AURA is different from standard social media. It's not about scrolling; it's about seeing. 
            Our Live Map acts as a spatial awareness tool, displaying active Moments and upcoming Events 
            so you can see exactly where the action is.
          </p>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="w-6 h-6 bg-forest/10 rounded-full flex items-center justify-center mt-1">
                <div className="w-2 h-2 bg-forest rounded-full" />
              </div>
              <p className="text-navy/80"><span className="font-bold">Real-time Density:</span> See where people are gathering without compromising privacy.</p>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-6 h-6 bg-forest/10 rounded-full flex items-center justify-center mt-1">
                <div className="w-2 h-2 bg-forest rounded-full" />
              </div>
              <p className="text-navy/80"><span className="font-bold">Frictionless Navigation:</span> Tap a moment, join the group, and get directions instantly.</p>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
