"use client";

import { motion } from "framer-motion";

const wishes = [
    {
        name: "Iwan & Siska",
        message: "Congratulations on your beautiful journey together! May your life be filled with endless love and laughter.",
        time: "2 hours ago",
    },
    {
        name: "Irina Rani",
        message: "So happy for both of you! Can't wait to celebrate the big day. Wishing you all the best things in life!",
        time: "Yesterday",
    },
    {
        name: "Buddy & Sarah",
        message: "Break a leg you two! Hopefully everything goes as planned. Good luck with the big day!",
        time: "3 days ago",
    },
];

export const Guestbook = () => {
    return (
        <section id="guestbook" className="py-24">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mb-16 text-center">
                    <h2 className="font-serif text-4xl font-bold text-zinc-900">Guestbook</h2>
                    <p className="mt-2 text-zinc-500">Leave your warm wishes for the happy couple</p>
                </div>

                <div className="grid gap-12 md:grid-cols-[1fr_1.5fr]">
                    {/* Form */}
                    <div className="rounded-3xl bg-zinc-50 p-8">
                        <form className="space-y-6">
                            <div>
                                <label className="mb-2 block text-xs font-bold text-zinc-400 uppercase">Name</label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full rounded-xl border-none bg-white p-4 text-sm shadow-sm focus:ring-2 focus:ring-primary"
                                />
                            </div>
                            <div>
                                <label className="mb-2 block text-xs font-bold text-zinc-400 uppercase">Message</label>
                                <textarea
                                    rows={4}
                                    placeholder="Write your wishes..."
                                    className="w-full rounded-xl border-none bg-white p-4 text-sm shadow-sm focus:ring-2 focus:ring-primary"
                                />
                            </div>
                            <button
                                type="button"
                                className="w-full rounded-full bg-primary py-4 font-bold text-white shadow-lg transition-transform active:scale-95"
                            >
                                SEND WISHES
                            </button>
                        </form>
                    </div>

                    {/* Messages */}
                    <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                        {wishes.map((wish, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="rounded-2xl bg-zinc-50 p-6"
                            >
                                <h4 className="font-bold text-zinc-800">{wish.name}</h4>
                                <p className="mt-2 text-sm italic text-zinc-600">"{wish.message}"</p>
                                <span className="mt-3 block text-[10px] font-medium text-zinc-400 uppercase">
                                    {wish.time}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
