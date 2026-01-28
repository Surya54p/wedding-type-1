"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const CoupleCard = ({
    name,
    role,
    image,
    description,
    reverse = false
}: {
    name: string;
    role: string;
    image: string;
    description: string;
    reverse?: boolean;
}) => (
    <motion.div
        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col items-center p-4 text-center"
    >
        <div className="relative mb-8 h-80 w-64 md:h-96 md:w-72">
            <div className="absolute inset-0 -m-1 rounded-2xl border-2 border-primary" />
            <div className="relative h-full w-full overflow-hidden rounded-xl">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover"
                />
            </div>
        </div>
        <h3 className="mb-1 font-serif text-2xl font-bold text-zinc-800">{name}</h3>
        <p className="mb-4 text-xs font-bold tracking-widest text-primary uppercase">{role}</p>
        <p className="max-w-xs text-sm leading-relaxed text-zinc-500">{description}</p>
    </motion.div>
);

export const Couple = () => {
    return (
        <section id="couple" className="py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-16 text-center">
                    <h2 className="relative inline-block font-serif text-4xl font-bold text-zinc-900">
                        Meet the Couple
                        <div className="absolute -bottom-4 left-1/2 h-1 w-20 -translate-x-1/2 bg-primary" />
                    </h2>
                </div>

                <div className="flex flex-col items-center justify-center gap-12 md:flex-row md:gap-24">
                    <CoupleCard
                        name="Hana Putri"
                        role="The Bride"
                        image="https://images.unsplash.com/photo-1594463750939-ebb28c3f5fca?q=80&w=800&auto=format&fit=crop"
                        description="Daughter of Mr. Adam and Mrs. Siti. A kind heart who loves nature and morning coffee."
                    />
                    <CoupleCard
                        name="Aris Setiawan"
                        role="The Groom"
                        reverse
                        image="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop"
                        description="Son of Mr. Bambang and Mrs. Retno. A creative soul who loves photography and weekend runs."
                    />
                </div>
            </div>
        </section>
    );
};
