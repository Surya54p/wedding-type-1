"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
    "/profile-cat-1.jpg",
    "/profile-cat-1.jpg",
    "/profile-cat-1.jpg",
    "/profile-cat-1.jpg",
    "/profile-cat-1.jpg",
    "/profile-cat-1.jpg",
];

export const Gallery = () => {
    return (
        <section id="gallery" className="py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-16 text-center">
                    <h2 className="font-serif text-4xl font-bold text-zinc-900">Pre-Wedding Gallery</h2>
                    <p className="mt-2 text-zinc-500">Capturing our moments of love before the big day</p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative aspect-square overflow-hidden rounded-2xl"
                        >
                            <Image
                                src={src}
                                alt={`Gallery image ${index + 1}`}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover:opacity-100" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
