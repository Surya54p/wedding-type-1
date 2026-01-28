"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 12,
        hours: 5,
        minutes: 45,
        seconds: 30
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
                if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
                return prev;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const items = [
        { label: "Days", value: timeLeft.days },
        { label: "Hours", value: timeLeft.hours },
        { label: "Minutes", value: timeLeft.minutes },
        { label: "Seconds", value: timeLeft.seconds },
    ];

    return (
        <section className="bg-zinc-50 py-16">
            <div className="mx-auto max-w-4xl px-4 text-center">
                <h3 className="mb-10 text-xs font-bold tracking-[0.4em] text-primary uppercase">
                    Counting Down to Forever
                </h3>

                <div className="flex justify-center gap-4 md:gap-8">
                    {items.map((item, index) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex w-20 flex-col items-center rounded-xl bg-white p-4 shadow-sm md:w-28"
                        >
                            <span className="text-3xl font-bold text-zinc-800 md:text-4xl">
                                {String(item.value).padStart(2, '0')}
                            </span>
                            <span className="mt-1 text-[10px] font-bold tracking-wider text-zinc-400 uppercase">
                                {item.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
