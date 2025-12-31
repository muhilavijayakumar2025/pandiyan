import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] lg:min-h-screen flex items-center bg-[#1a1f3c] overflow-hidden pt-20">

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        {/* Network Pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #4f46e5 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />

        {/* Animated Glows */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px]"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
                Empowering Businesses <br />
                with <span className="text-[#f39c12]">Technology</span>
              </h1>

              <p className="text-lg text-blue-100/70 mb-10 leading-relaxed max-w-xl">
                Leveraging deep expertise, our team has delivered over 25 software products
                across diverse industries like agritech, healthcare, ticketing, and real estate.
                We handle everything, from design to launch and ongoing maintenance.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link
                  to="/services"
                  className="px-8 py-4 bg-[#f39c12] hover:bg-[#e67e22] text-white font-bold rounded-lg transition-all shadow-lg shadow-orange-500/20 active:scale-95 text-lg"
                >
                  Explore our works
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Visual Element */}
          <div className="relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              {/* Main Decorative Image Placeholder/Container */}
              <div className="relative z-10 w-[500px] h-[500px] mx-auto flex items-center justify-center">
                {/* Simulated Smartphone Hand Visualization */}
                <div className="absolute inset-0 flex items-center justify-center opacity-40">
                  <svg viewBox="0 0 200 200" className="w-full h-full text-blue-400">
                    <path fill="currentColor" d="M40,20 L160,20 Q170,20 170,30 L170,170 Q170,180 160,180 L40,180 Q30,180 30,170 L30,30 Q30,20 40,20 Z" className="opacity-10" />
                    <path fill="currentColor" d="M50,30 L150,30 L150,160 L50,160 Z" className="opacity-20" />
                  </svg>
                </div>

                {/* Floating Software Icons */}
                {[
                  {
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    ),
                    x: '-40%', y: '-25%', delay: 0
                  },
                  {
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    ),
                    x: '45%', y: '-35%', delay: 0.5
                  },
                  {
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                      </svg>
                    ),
                    x: '35%', y: '25%', delay: 1
                  },
                  {
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                      </svg>
                    ),
                    x: '-35%', y: '35%', delay: 1.5
                  },
                  {
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                      </svg>
                    ),
                    x: '0%', y: '-45%', delay: 2
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -25, 0],
                      x: [0, i % 2 === 0 ? 5 : -5, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{
                      duration: 5 + i,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: item.delay
                    }}
                    className="absolute bg-white/10 backdrop-blur-xl w-20 h-20 rounded-3xl flex items-center justify-center text-yellow-400 border border-white/20 shadow-2xl"
                    style={{ left: `calc(50% + ${item.x})`, top: `calc(50% + ${item.y})` }}
                  >
                    {item.icon}
                  </motion.div>
                ))}

                {/* Enhanced Nodes and Lines Effect */}
                <div className="absolute inset-0 z-0">
                  <svg className="w-full h-full opacity-40" viewBox="0 0 100 100">
                    <defs>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="0.5" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>
                    {[
                      { x: 20, y: 30 }, { x: 80, y: 40 }, { x: 50, y: 70 },
                      { x: 30, y: 80 }, { x: 70, y: 20 }, { x: 10, y: 60 },
                      { x: 90, y: 70 }, { x: 40, y: 15 }
                    ].map((p, i, arr) => (
                      <g key={i}>
                        <circle cx={p.x} cy={p.y} r="0.8" fill="#f39c12" filter="url(#glow)" />
                        {arr.slice(i + 1).map((p2, j) => {
                          const dist = Math.sqrt(Math.pow(p.x - p2.x, 2) + Math.pow(p.y - p2.y, 2));
                          if (dist < 40) {
                            return <line key={j} x1={p.x} y1={p.y} x2={p2.x} y2={p2.y} stroke="#f39c12" strokeWidth="0.1" opacity={1 - dist / 40} />;
                          }
                          return null;
                        })}
                      </g>
                    ))}
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

    </section>
  );
}



