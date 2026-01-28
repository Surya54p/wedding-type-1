"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";

const EventCard = ({
    title,
    date,
    time,
    location,
    icon: Icon
}: {
    title: string;
    date: string;
    time: string;
    location: string;
    icon: any;
}) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="flex flex-col items-center rounded-3xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md md:p-12"
    >
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/50 text-primary">
            <Icon size={32} />
        </div>
        <h3 className="mb-6 font-serif text-2xl font-bold text-zinc-800">{title}</h3>

        <div className="space-y-4 text-center text-sm font-medium text-zinc-500">
            <div className="flex flex-col items-center gap-1">
                <span className="text-primary font-bold">Saturday, 26 October 2024</span>
            </div>

            <div className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-2">
                    <Clock size={16} className="text-primary" />
                    <span>{time}</span>
                </div>
            </div>

            <div className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-primary" />
                    <span>{location}</span>
                </div>
            </div>
        </div>

        <button className="mt-8 rounded-full border border-primary/30 px-6 py-2 text-xs font-bold text-primary transition-all hover:bg-primary hover:text-white">
            View on Google Maps
        </button>
    </motion.div>
);

export const Events = () => {
    return (
        <section id="schedule" className="bg-zinc-50/50 py-24">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-8 md:grid-cols-2">
                    <EventCard
                        title="The Wedding Ceremony (Akad)"
                        date="Saturday, 26 Oct 2024"
                        time="08:00 AM - 10:00 AM"
                        location="The Ritz-Carlton, Jakarta"
                        icon={Calendar}
                    />
                    <EventCard
                        title="The Reception"
                        date="Saturday, 26 Oct 2024"
                        time="11:00 AM - 01:00 PM"
                        location="The Ritz-Carlton, Jakarta"
                        icon={Clock}
                    />
                </div>
            </div>
        </section>
    );
};
