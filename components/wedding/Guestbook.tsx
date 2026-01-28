"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Wish = {
  id: string;
  name: string;
  message: string;
  createdAt: string;
};

export const Guestbook = () => {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({
    name: "",
    message: "",
  });

  useEffect(() => {
    fetch("/api/guestbook")
      .then((res) => res.json())
      .then(setWishes)
      .finally(() => setLoading(false));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.message) return;

    setSubmitting(true);

    const res = await fetch("/api/guestbook", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const newWish = await res.json();
    setWishes((prev) => [newWish, ...prev]);
    setForm({ name: "", message: "" });
    setSubmitting(false);
  };

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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="mb-2 block text-xs font-bold text-zinc-400 uppercase">
                  Name
                </label>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl bg-white p-4 text-sm shadow-sm focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold text-zinc-400 uppercase">
                  Message
                </label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-xl bg-white p-4 text-sm shadow-sm focus:ring-2 focus:ring-primary"
                />
              </div>

              <button
                disabled={submitting}
                className="w-full rounded-full bg-primary py-4 font-bold text-white shadow-lg disabled:opacity-60"
              >
                {submitting ? "SENDING..." : "SEND WISHES"}
              </button>
            </form>
          </div>

          {/* Messages */}
          <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
            {loading && <p className="text-sm text-zinc-400">Loading wishes...</p>}

            {wishes.map((wish, index) => (
              <motion.div
                key={wish.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="rounded-2xl bg-zinc-50 p-6"
              >
                <h4 className="font-bold text-zinc-800">{wish.name}</h4>
                <p className="mt-2 text-sm italic text-zinc-600">
                  "{wish.message}"
                </p>
                <span className="mt-3 block text-[10px] font-medium text-zinc-400 uppercase">
                  {new Date(wish.createdAt).toLocaleDateString("en-US")}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
