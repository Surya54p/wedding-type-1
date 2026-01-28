"use client";

import { motion } from "framer-motion";

const milestones = [
    {
        date: "SEPTEMBER 2021",
        title: "The First Meeting",
        description: "A chance encounter at a local bookstore that changed everything. We spent hours talking about our favorite poets.",
    },
    {
        date: "JANUARY 2022",
        title: "The First Trip",
        description: "Exploring the quiet beaches of Bali together was where we realized we saw the whole world together.",
    },
    {
        date: "FEBRUARY 2024",
        title: "The Proposal",
        description: "Under the starry night sky, Aris asked the most important question and Hana said 'Yes' with tears of joy.",
    },
];

export const Story = () => {
    return (
        <section id="story" className="bg-zinc-50 py-24">
            <div className="mx-auto max-w-4xl px-6">
                <div className="mb-16 text-center">
                    <h2 className="font-serif text-4xl font-bold text-zinc-900">Our Story</h2>
                    <p className="mt-2 text-zinc-500">The beautiful path that brought us to this day</p>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 h-full w-px -translate-x-1/2 bg-primary/30 hidden md:block" />

                    <div className="space-y-24">
                        {milestones.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className={`relative flex items-center justify-between ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                                    } flex-col md:flex-row`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-primary shadow-sm md:top-1/2 md:-translate-y-1/2 hidden md:block" />

                                <div className="w-full text-center md:w-[45%] md:text-left">
                                    <span className="text-[10px] font-bold tracking-widest text-primary uppercase">
                                        {item.date}
                                    </span>
                                    <h3 className="mb-3 font-serif text-xl font-bold text-zinc-800">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-zinc-500">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Spacer for MD screens */}
                                <div className="hidden w-[45%] md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
