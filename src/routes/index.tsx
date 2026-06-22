import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useMemo } from "react";
import {
  Heart, PawPrint, Menu, X, Phone, Mail, MapPin, Clock,
  ShieldCheck, Stethoscope, Award, Truck, Headphones, Tag,
  Star, ArrowRight, MessageCircle, Facebook, Instagram, Twitter,
} from "lucide-react";

import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import puppy1 from "@/assets/puppy-1.jpg";
import puppy2 from "@/assets/puppy-2.jpg";
import puppy3 from "@/assets/puppy-3.jpg";
import puppy4 from "@/assets/puppy-4.jpg";
import puppy5 from "@/assets/puppy-5.jpg";
import puppy6 from "@/assets/puppy-6.jpg";
import aboutImg from "@/assets/about.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pawfect Pups — Find Your Perfect Furry Friend" },
      { name: "description", content: "Healthy, vaccinated puppies from trusted breeders. Browse our adorable puppies and bring home happiness today." },
    ],
  }),
  component: Home,
});

const WHATSAPP = "15551234567";

const slides = [
  { img: hero1, title: "Find Your Perfect Furry Friend", sub: "Browse healthy and adorable puppies waiting for a home." },
  { img: hero2, title: "Bring Happiness Home", sub: "Trusted breeders. Healthy puppies. Lifelong love." },
  { img: hero3, title: "Cute Puppies Waiting For You", sub: "Find your new best friend today." },
];

type Puppy = {
  id: number; name: string; breed: string; age: string;
  gender: "Male" | "Female"; price: number; img: string; desc: string;
};

const puppies: Puppy[] = [
  { id: 1, name: "Biscuit", breed: "Labrador", age: "8 weeks", gender: "Male", price: 850, img: puppy1, desc: "Playful and friendly, loves cuddles and treats." },
  { id: 2, name: "Luna", breed: "Husky", age: "10 weeks", gender: "Female", price: 1200, img: puppy2, desc: "Striking blue eyes and a heart of gold." },
  { id: 3, name: "Mocha", breed: "French Bulldog", age: "9 weeks", gender: "Male", price: 1500, img: puppy3, desc: "Charming, calm, and absolutely adorable." },
  { id: 4, name: "Daisy", breed: "Shih Tzu", age: "7 weeks", gender: "Female", price: 950, img: puppy4, desc: "Tiny, fluffy, and full of personality." },
  { id: 5, name: "Rex", breed: "German Shepherd", age: "11 weeks", gender: "Male", price: 1100, img: puppy5, desc: "Smart, loyal and ready to learn." },
  { id: 6, name: "Peanut", breed: "Pug", age: "8 weeks", gender: "Male", price: 800, img: puppy6, desc: "A wrinkly little bundle of joy." },
];

const features = [
  { icon: Stethoscope, title: "Healthy Puppies", desc: "Vet-checked from day one." },
  { icon: ShieldCheck, title: "Vaccinated & Certified", desc: "Full medical records included." },
  { icon: Award, title: "Trusted Breeders", desc: "Ethical, transparent, caring." },
  { icon: Truck, title: "Safe Delivery", desc: "Door-to-door with care." },
  { icon: Headphones, title: "24/7 Support", desc: "We're here whenever you need." },
  { icon: Tag, title: "Affordable Pricing", desc: "Fair prices, no hidden fees." },
];

const testimonials = [
  { name: "Emma Carter", text: "Adopting Biscuit was the best decision. The team was amazing!", img: puppy1 },
  { name: "James Wilson", text: "Luna arrived healthy and happy. Truly trustworthy breeders.", img: puppy2 },
  { name: "Sofia Martinez", text: "Mocha brought so much joy to our family. Highly recommend!", img: puppy3 },
];

function Home() {
  const [slide, setSlide] = useState(0);
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [breed, setBreed] = useState("All");
  const [gender, setGender] = useState("All");
  const [maxPrice, setMaxPrice] = useState(1600);

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll reveal observer
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Mouse parallax for hero decorations
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setParallax({ x, y });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const breeds = useMemo(() => ["All", ...Array.from(new Set(puppies.map((p) => p.breed)))], []);

  const filtered = puppies.filter(
    (p) =>
      (breed === "All" || p.breed === breed) &&
      (gender === "All" || p.gender === gender) &&
      p.price <= maxPrice,
  );

  const waLink = (msg: string) =>
    `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-card shadow-soft" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-4 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <span className="grid place-items-center h-10 w-10 rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-soft group-hover:scale-110 transition-transform">
              <PawPrint className="h-5 w-5" />
            </span>
            <span className="font-display text-xl font-black tracking-tight">Pawfect Pups</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
            {[
              ["Home", "#home"], ["Puppies", "#puppies"],
              ["About Us", "#about"], ["Contact Us", "#contact"],
            ].map(([l, h]) => (
              <a key={h} href={h} className="relative hover:text-primary transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full">
                {l}
              </a>
            ))}
            <a href={waLink("Hi! I'm interested in your puppies.")}
              className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 hover:bg-primary transition-colors">
              <MessageCircle className="h-4 w-4" /> Chat
            </a>
          </nav>
          <button onClick={() => setNavOpen((o) => !o)} className="md:hidden grid place-items-center h-10 w-10 rounded-xl bg-card shadow-soft">
            {navOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {navOpen && (
          <div className="md:hidden glass-card border-t border-border px-5 py-4 space-y-3 animate-fade-up">
            {[["Home", "#home"], ["Puppies", "#puppies"], ["About Us", "#about"], ["Contact Us", "#contact"]].map(([l, h]) => (
              <a key={h} href={h} onClick={() => setNavOpen(false)} className="block py-2 font-semibold">{l}</a>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative h-screen min-h-[640px] w-full overflow-hidden">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-all duration-[1200ms] ease-out ${
              i === slide ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            <img
              src={s.img}
              alt={s.title}
              className={`h-full w-full object-cover ${i === slide ? "animate-ken-burns" : ""}`}
              width={1536}
              height={1024}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>
        ))}

        {/* Decorative parallax blobs */}
        <div
          className="pointer-events-none absolute -top-20 -right-20 h-80 w-80 bg-gradient-to-br from-primary/40 to-accent/40 animate-blob blur-2xl opacity-60"
          style={{ transform: `translate(${parallax.x}px, ${parallax.y}px)` }}
        />
        <div
          className="pointer-events-none absolute -bottom-32 left-10 h-72 w-72 bg-gradient-to-br from-blush/50 to-peach/50 animate-blob blur-3xl opacity-50"
          style={{ transform: `translate(${-parallax.x}px, ${-parallax.y}px)`, animationDelay: "-6s" }}
        />
        <PawPrint
          className="pointer-events-none absolute top-32 right-[18%] h-10 w-10 text-primary/40 animate-float hidden md:block"
          style={{ animationDelay: "-2s" }}
        />
        <PawPrint
          className="pointer-events-none absolute bottom-40 right-[28%] h-7 w-7 text-accent/50 animate-float hidden md:block"
          style={{ animationDelay: "-4s" }}
        />
        <Heart
          className="pointer-events-none absolute top-[28%] right-[10%] h-8 w-8 text-blush/70 fill-blush/40 animate-float hidden md:block"
        />

        <div className="relative z-10 mx-auto max-w-7xl h-full px-5 sm:px-8 flex items-center">
          <div key={slide} className="max-w-2xl animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-card/80 backdrop-blur px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary shadow-soft animate-slide-left">
              <PawPrint className="h-3.5 w-3.5 animate-wiggle" /> Pawfect Pups
            </span>
            <h1 className="mt-5 font-display text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] animate-slide-left" style={{ animationDelay: "0.1s" }}>
              <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent animate-gradient">
                {slides[slide].title}
              </span>
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-muted-foreground max-w-xl animate-slide-left" style={{ animationDelay: "0.25s" }}>
              {slides[slide].sub}
            </p>
            <div className="mt-8 flex flex-wrap gap-3 animate-slide-left" style={{ animationDelay: "0.4s" }}>
              <a href="#puppies"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground px-7 py-3.5 font-semibold shadow-soft hover:shadow-card hover:-translate-y-1 hover:scale-105 transition-all duration-300">
                View Puppies
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-card/90 backdrop-blur text-foreground px-7 py-3.5 font-semibold border border-border hover:bg-secondary hover:-translate-y-1 transition-all duration-300">
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* slide dots + progress */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2 items-center">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setSlide(i)}
              className={`relative h-2 rounded-full overflow-hidden transition-all duration-500 ${
                i === slide ? "w-14 bg-foreground/15" : "w-2 bg-foreground/30 hover:bg-foreground/50"
              }`}
              aria-label={`Slide ${i + 1}`}>
              {i === slide && (
                <span key={slide} className="absolute inset-y-0 left-0 progress-bar bg-gradient-to-r from-primary to-accent" />
              )}
            </button>
          ))}
        </div>

        {/* scroll indicator */}
        <a href="#puppies" className="absolute bottom-8 right-8 z-10 hidden md:flex flex-col items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground/60 hover:text-primary transition-colors">
          Scroll
          <span className="h-10 w-px bg-gradient-to-b from-foreground/60 to-transparent animate-pulse" />
        </a>
      </section>

      {/* PUPPIES */}
      <section id="puppies" className="relative py-24 paw-bg">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 reveal">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Available Puppies</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-black">Meet Our Furry Stars</h2>
            <p className="mt-4 text-muted-foreground">Each puppy is health-checked, vaccinated, and ready to fill your home with love.</p>
          </div>

          {/* Filters */}
          <div className="glass-card rounded-3xl p-5 sm:p-6 grid sm:grid-cols-3 gap-4 mb-10 shadow-soft reveal reveal-d1">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Breed</label>
              <select value={breed} onChange={(e) => setBreed(e.target.value)}
                className="mt-1 w-full rounded-xl bg-background border border-border px-4 py-3 font-medium">
                {breeds.map((b) => <option key={b}>{b}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Gender</label>
              <select value={gender} onChange={(e) => setGender(e.target.value)}
                className="mt-1 w-full rounded-xl bg-background border border-border px-4 py-3 font-medium">
                {["All", "Male", "Female"].map((g) => <option key={g}>{g}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Max Price: ${maxPrice}</label>
              <input type="range" min={500} max={1600} step={50} value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="mt-4 w-full accent-[color:var(--primary)]" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((p, idx) => (
              <article key={p.id} style={{ transitionDelay: `${idx * 80}ms` }} className="reveal group rounded-3xl bg-card shadow-soft hover:shadow-card transition-all hover:-translate-y-2 hover:rotate-[-0.5deg] duration-500 overflow-hidden border border-border">
                <div className="relative aspect-square overflow-hidden">
                  <img src={p.img} alt={p.name} loading="lazy" width={800} height={800}
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <span className="absolute top-4 left-4 rounded-full bg-card/90 backdrop-blur px-3 py-1 text-xs font-bold">
                    {p.gender}
                  </span>
                  <span className="absolute top-4 right-4 rounded-full bg-foreground text-background px-3 py-1 text-sm font-black">
                    ${p.price}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-2xl font-black">{p.name}</h3>
                    <span className="text-xs text-muted-foreground">{p.age}</span>
                  </div>
                  <p className="text-sm font-semibold text-primary">{p.breed}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
                  <div className="mt-5 flex gap-2">
                    <button className="flex-1 rounded-full bg-secondary text-secondary-foreground py-2.5 text-sm font-semibold hover:bg-foreground hover:text-background transition-colors">
                      View Details
                    </button>
                    <a href={waLink(`Hi! I'm interested in ${p.name} (${p.breed}).`)}
                      target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 flex-1 rounded-full bg-[color:var(--whatsapp)] text-white py-2.5 text-sm font-semibold hover:opacity-90 transition-opacity">
                      <MessageCircle className="h-4 w-4" /> WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground mt-8">No puppies match your filters yet.</p>
          )}
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 reveal">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Why Choose Us</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-black">Trusted by Loving Families</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} style={{ transitionDelay: `${i * 80}ms` }} className="reveal group rounded-3xl bg-card border border-border p-7 shadow-soft hover:shadow-card hover:-translate-y-2 transition-all duration-500">
                <div className="grid place-items-center h-14 w-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/30 text-primary group-hover:from-primary group-hover:to-accent group-hover:text-primary-foreground transition-all">
                  <f.icon className="h-7 w-7 group-hover:animate-wiggle" />
                </div>
                <h3 className="mt-5 font-display text-xl font-black">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative reveal">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-primary/20 via-accent/20 to-blush/40 blur-2xl" />
            <img src={aboutImg} alt="Family with puppy" loading="lazy" width={1024} height={1024}
              className="relative rounded-[2rem] shadow-card object-cover w-full aspect-square" />
            <div className="absolute -bottom-6 -right-6 glass-card rounded-2xl px-5 py-4 shadow-card hidden sm:flex items-center gap-3">
              <Heart className="h-6 w-6 text-[color:var(--blush)] fill-[color:var(--blush)]" />
              <div>
                <p className="text-2xl font-black">5+ Years</p>
                <p className="text-xs text-muted-foreground">of joyful adoptions</p>
              </div>
            </div>
          </div>
          <div className="reveal reveal-d2">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">About Us</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-black">Where Puppies Meet Forever Homes</h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              We are passionate about connecting loving families with healthy, happy, and well-cared-for puppies.
              Our mission is to provide trusted, ethical, and transparent puppy adoption services while ensuring
              every puppy finds a loving forever home.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                ["500+", "Happy Families"],
                ["1000+", "Puppies Adopted"],
                ["5+", "Years Experience"],
              ].map(([n, l]) => (
                <div key={l} className="rounded-2xl bg-card border border-border p-4 text-center shadow-soft">
                  <p className="font-display text-3xl font-black bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">{n}</p>
                  <p className="text-xs font-semibold text-muted-foreground mt-1">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-gradient-to-b from-secondary/40 to-background">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 reveal">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Happy Hearts</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-black">What Our Families Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} style={{ transitionDelay: `${i * 100}ms` }} className="reveal group rounded-3xl bg-card border border-border p-7 shadow-soft hover:shadow-card hover:-translate-y-2 transition-all duration-500">
                <div className="flex gap-1 text-[color:var(--accent)]">
                  {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-4 text-foreground/90 leading-relaxed">"{t.text}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <img src={t.img} alt={t.name} loading="lazy" width={48} height={48}
                    className="h-12 w-12 rounded-full object-cover" />
                  <p className="font-bold">{t.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-10">
          <div className="reveal">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Contact Us</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-black">Let's Bring Joy Home</h2>
            <p className="mt-4 text-muted-foreground">Reach out — we'd love to help you find your perfect pup.</p>
            <div className="mt-8 space-y-4">
              {[
                { Icon: Phone, t: "+1 (555) 123-4567" },
                { Icon: Mail, t: "hello@pawfectpups.com" },
                { Icon: MapPin, t: "123 Puppy Lane, Loveville" },
                { Icon: Clock, t: "Mon–Sun · 9am – 7pm" },
              ].map(({ Icon, t }, i) => (
                <div key={i} className="flex items-center gap-4 rounded-2xl bg-card border border-border p-4 shadow-soft">
                  <div className="grid place-items-center h-11 w-11 rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-semibold">{t}</span>
                </div>
              ))}
            </div>
          </div>
          <form
            className="reveal reveal-d2"
            onSubmit={(e) => {
              e.preventDefault();
              const f = new FormData(e.currentTarget);
              const msg = `Hi! I'm ${f.get("name")} (${f.get("email")}, ${f.get("phone")}). ${f.get("message")}`;
              window.open(waLink(msg), "_blank");
            }}
            className="rounded-3xl bg-card border border-border p-7 sm:p-9 shadow-card space-y-4"
          >
            <h3 className="font-display text-2xl font-black">Send us a message</h3>
            <input name="name" required maxLength={100} placeholder="Your Name"
              className="w-full rounded-xl bg-background border border-border px-4 py-3 focus:outline-none focus:border-primary" />
            <input name="email" type="email" required maxLength={255} placeholder="Email Address"
              className="w-full rounded-xl bg-background border border-border px-4 py-3 focus:outline-none focus:border-primary" />
            <input name="phone" required maxLength={30} placeholder="Phone Number"
              className="w-full rounded-xl bg-background border border-border px-4 py-3 focus:outline-none focus:border-primary" />
            <textarea name="message" required maxLength={1000} rows={4} placeholder="Tell us which puppy you love..."
              className="w-full rounded-xl bg-background border border-border px-4 py-3 focus:outline-none focus:border-primary resize-none" />
            <button type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground py-3.5 font-semibold shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all">
              Send Message <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground text-background pt-16 pb-8">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid place-items-center h-10 w-10 rounded-2xl bg-gradient-to-br from-primary to-accent">
                <PawPrint className="h-5 w-5 text-primary-foreground" />
              </span>
              <span className="font-display text-xl font-black">Pawfect Pups</span>
            </div>
            <p className="mt-4 text-sm text-background/70">Where every puppy finds a loving forever home.</p>
            <div className="mt-5 flex gap-3">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="grid place-items-center h-9 w-9 rounded-full bg-background/10 hover:bg-primary transition-colors">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/70">
              {["Home", "Puppies", "About Us", "Contact"].map((l) => (
                <li key={l}><a href={`#${l.toLowerCase().replace(/\s/g, "")}`} className="hover:text-background">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Breeds</h4>
            <ul className="space-y-2 text-sm text-background/70">
              {["Labrador", "Husky", "French Bulldog", "Shih Tzu", "Pug"].map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>+1 (555) 123-4567</li>
              <li>hello@pawfectpups.com</li>
              <li>123 Puppy Lane, Loveville</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-5 sm:px-8 mt-12 pt-6 border-t border-background/10 text-center text-sm text-background/60">
          © {new Date().getFullYear()} Pawfect Pups. Made with <Heart className="inline h-3.5 w-3.5 text-[color:var(--blush)] fill-current" /> for puppies.
        </div>
      </footer>

      {/* WhatsApp Float */}
      <a
        href={waLink("Hi! I'd love to know more about your puppies.")}
        target="_blank" rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 grid place-items-center h-14 w-14 rounded-full bg-[color:var(--whatsapp)] text-white shadow-card animate-pulse-ring hover:scale-110 transition-transform"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}
