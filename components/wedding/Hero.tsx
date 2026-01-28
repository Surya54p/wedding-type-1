"use client";

import { motion } from "framer-motion";

export const Hero = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image - Using a placeholder for now as per instructions to use generate_image if needed, 
          but I'll use a descriptive div for the layout first */}
            <div
                className="absolute inset-0 bg-cover bg-center grayscale-[20%]"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=2000&auto=format&fit=crop')`, // High quality wedding placeholder
                }}
            >
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="relative flex h-full flex-col items-center justify-center px-4 text-center text-white">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-4 text-sm font-medium tracking-[0.3em] uppercase"
                >
                    Save the Date
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="mb-2 font-serif text-6xl font-bold md:text-8xl"
                >
                    Aris & Hana
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mb-12 text-lg italic text-zinc-200"
                >
                    The Beginning of Always
                </motion.p>

                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative flex items-center justify-center overflow-hidden rounded-full bg-primary px-10 py-4 font-bold text-white shadow-xl transition-all"
                >
                    <span className="relative z-10">OPEN INVITATION</span>
                    <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform group-hover:translate-x-0" />
                </motion.button>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="h-10 w-6 rounded-full border-2 border-white/50 flex justify-center p-1">
                    <div className="h-2 w-1 bg-white rounded-full" />
                </div>
            </motion.div>
        </section>
    );
};
