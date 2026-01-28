"use client";

import { motion } from "framer-motion";
import { MessageCircle, Calendar } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-zinc-50/50 py-24 pb-12">
            <div className="mx-auto max-w-4xl px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="font-serif text-5xl font-bold text-primary"
                >
                    Aris & Hana
                </motion.h2>
                <p className="mt-4 text-sm text-zinc-500">Thank you for being a part of our story.</p>

                <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <button className="flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-bold text-white shadow-lg transition-transform hover:scale-105 active:scale-95">
                        <MessageCircle size={18} />
                        Share via WhatsApp
                    </button>
                    <button className="flex items-center gap-2 rounded-full bg-white px-8 py-3 font-bold text-zinc-800 shadow-md transition-transform hover:scale-105 active:scale-95 border border-zinc-100">
                        <Calendar size={18} />
                        Save to Calendar
                    </button>
                </div>

                <div className="mt-24 text-[10px] font-bold tracking-[0.2em] text-zinc-300 uppercase">
                    © 2024 Aris & Hana Wedding. Design inspired by your vision.
                </div>
            </div>
        </footer>
    );
};
