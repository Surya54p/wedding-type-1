import Link from "next/link";

export const Navbar = () => {
    return (
        <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <div className="text-2xl font-serif font-bold text-primary">A&H</div>

                <div className="hidden space-x-8 text-sm font-medium md:flex">
                    <Link href="#couple" className="hover:text-primary transition-colors">Meet the Couple</Link>
                    <Link href="#schedule" className="hover:text-primary transition-colors">Schedule</Link>
                    <Link href="#gallery" className="hover:text-primary transition-colors">Gallery</Link>
                    <Link href="#story" className="hover:text-primary transition-colors">Our Story</Link>
                    <Link href="#guestbook" className="hover:text-primary transition-colors">Guestbook</Link>
                </div>

                <Link
                    href="#rsvp"
                    className="rounded-full bg-primary px-6 py-2 text-sm font-semibold text-white hover:bg-yellow-600 transition-all shadow-md active:scale-95"
                >
                    RSVP
                </Link>
            </div>
        </nav>
    );
};
