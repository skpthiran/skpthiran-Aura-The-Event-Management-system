import { motion } from "motion/react";
import { ShieldCheck, MessageSquareX, Lock } from "lucide-react";

const SafetyFeature = ({ title, description, icon: Icon }: any) => (
  <motion.div
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 30 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="flex flex-col items-center text-center p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10"
  >
    <div className="w-16 h-16 bg-orange/20 rounded-2xl flex items-center justify-center mb-6">
      <Icon className="w-8 h-8 text-orange" />
    </div>
    <h3 className="text-2xl font-serif font-bold mb-4 text-sand">{title}</h3>
    <p className="text-sand/60 leading-relaxed">{description}</p>
  </motion.div>
);

export default function Safety() {
  return (
    <section className="py-32 px-6 bg-navy relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl md:text-7xl font-serif font-bold leading-tight mb-8 text-sand">
              The Safe <br />
              <span className="text-orange italic">Haven.</span>
            </h2>
            <p className="text-xl text-sand/60 leading-relaxed max-w-2xl mx-auto">
              Meeting strangers should be exciting, not stressful. We've built AURA with 
              safety and privacy as the foundation, not an afterthought.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <SafetyFeature
            title="Gated Communication"
            description="Group chats only unlock after joining a Moment. No random DMs, no unsolicited messages. You only talk to the people you're meeting."
            icon={Lock}
          />
          <SafetyFeature
            title="Ephemeral Nature"
            description="Chats are temporary and permanently deleted after the event ends. No digital footprint, no spam, no fear of posting."
            icon={MessageSquareX}
          />
          <SafetyFeature
            title="Verified Circles"
            description="Our community-driven reporting and verification system ensures that AURA remains a safe space for everyone."
            icon={ShieldCheck}
          />
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </section>
  );
}
