import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useMemo } from "react";
import {
  Heart, PawPrint, Menu, X, Phone, Mail, MapPin, Clock,
  ShieldCheck, Stethoscope, Award, Truck, Headphones, Tag,
  Star, ArrowRight, MessageCircle, Facebook, Instagram, Twitter,
  ChevronLeft, ChevronRight, Quote, ChevronUp, ChevronDown, Plus, Minus,
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

import tImage1 from "@/assets/1.jpeg";
import tImage2 from "@/assets/2.jpeg";
import tImage3 from "@/assets/3.jpeg";
import tImage4 from "@/assets/4.jpeg";
import tImage5 from "@/assets/5.jpeg";
import tImage6 from "@/assets/6.jpeg";
import tImage7 from "@/assets/7.jpeg";
import tImage8 from "@/assets/8.jpeg";
import tImage9 from "@/assets/9.jpeg";
import tImage10 from "@/assets/10.jpeg";
import tImage11 from "@/assets/11.jpeg";

import goldenRetriever from "@/assets/golden-retriever.png";
import beagle from "@/assets/beagle.png";
import tibetanMastiff from "@/assets/tibetan-mastiff.png";
import bichonFrise from "@/assets/bichon-frise.png";
import toyPoodle from "@/assets/toy-poodle.png";
import maltese from "@/assets/maltese.png";
import maltipoo from "@/assets/maltipoo.png";
import dachshund from "@/assets/dachshund.png";
import akita from "@/assets/akita.png";
import chowChow from "@/assets/chow-chow.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pawsome Puppies — Healthy Puppies for Sale in Delhi NCR" },
      { name: "description", content: "Looking for puppies for sale in Delhi NCR? Buy healthy, vaccinated, KCI-certified puppies in Delhi, Gurgaon, Noida, Ghaziabad & Faridabad. Connect with ethical dog breeders. Call +91 6302231051." },
      { name: "keywords", content: "pawsome, pawsome puppies, pawsome puppies delhi, pawsome puppies gurgaon, pawsome puppies noida, pawsome pet shop, puppy for sale in Delhi NCR, puppies for sale in Delhi NCR, buy puppies in Delhi, buy puppy in Delhi, dog breeder in Delhi NCR, dog breeders in Gurgaon, puppies for sale in Gurgaon, puppy shop in Noida, dog shop in Delhi, pet shop in Dwarka New Delhi, ethical dog breeders Delhi, certified puppies in Delhi, buy Labrador in Delhi, buy Golden Retriever in Delhi NCR, Shih Tzu puppy price in Delhi, Toy Poodle price in Delhi NCR" },
      { name: "robots", content: "index, follow" }
    ],
  }),
  component: Home,
});

const WHATSAPP = "916302231051";

const slides = [
  { 
    img: hero1, 
    title: "Find Your Perfect Furry Friend", 
    sub: "Buy healthy, vaccinated, and certified puppies from India's most trusted ethical breeders. We bring veterinary-certified joy directly to your doorstep with 100% health guarantees and lifetime support." 
  },
  { 
    img: hero2, 
    title: "Bring Genuine Happiness Home", 
    sub: "Every puppy deserves a loving forever home. We work with certified, transparent breeders to ensure you get a happy, active, and socialized new family member. Start your beautiful companionship journey today." 
  },
  { 
    img: hero3, 
    title: "Cute & Healthy Pups Await You", 
    sub: "Browse our hand-raised Golden Retrievers, playful Labradors, charming Huskies, and adorable Shih Tzus. Your dream puppy is just a quick WhatsApp chat away with safe, direct delivery across India." 
  },
];

type Puppy = {
  id: number; breed: string; gender: "Male" | "Female";
  price: number; img: string; desc: string;
};

const puppies: Puppy[] = [
  { id: 1, breed: "Labrador", gender: "Male", price: 850, img: puppy1, desc: "Playful, friendly, and intelligent family companion." },
  { id: 2, breed: "Husky", gender: "Female", price: 1200, img: puppy2, desc: "Striking blue eyes and a loyal, high-energy companion." },
  { id: 3, breed: "French Bulldog", gender: "Male", price: 1500, img: puppy3, desc: "Charming, adaptable, calm, and absolutely adorable." },
  { id: 4, breed: "Shih Tzu", gender: "Female", price: 950, img: puppy4, desc: "Tiny, affectionate, fluffy, and great for apartments." },
  { id: 5, breed: "German Shepherd", gender: "Male", price: 1100, img: puppy5, desc: "Smart, alert, courageous, and highly protective guardian." },
  { id: 6, breed: "Pug", gender: "Male", price: 800, img: puppy6, desc: "Wrinkly bundle of joy, loving, and extremely playful." },
  { id: 7, breed: "Golden Retriever", gender: "Male", price: 1300, img: goldenRetriever, desc: "Gentle, eager-to-please, smart, and perfect for families." },
  { id: 8, breed: "Beagle", gender: "Female", price: 900, img: beagle, desc: "Curious, merry, loving, and excellent track companion." },
  { id: 9, breed: "Tibetan Mastiff", gender: "Male", price: 2500, img: tibetanMastiff, desc: "Noble, independent, extremely protective, and large-sized." },
  { id: 10, breed: "Bichon Frisé", gender: "Female", price: 1150, img: bichonFrise, desc: "Hypoallergenic coat, cheerful, outgoing, and loves attention." },
  { id: 11, breed: "Toy Poodle", gender: "Female", price: 1400, img: toyPoodle, desc: "Exceptionally smart, highly active, proud, and easy to train." },
  { id: 12, breed: "Maltese", gender: "Female", price: 1050, img: maltese, desc: "Gentle, playful, affectionate, with a beautiful white coat." },
  { id: 13, breed: "Maltipoo", gender: "Male", price: 1250, img: maltipoo, desc: "Affectionate designer breed, friendly, and very adaptive." },
  { id: 14, breed: "Dachshund", gender: "Male", price: 950, img: dachshund, desc: "Lively, clever, courageous, and famously shape-distinctive." },
  { id: 15, breed: "Akita", gender: "Female", price: 1800, img: akita, desc: "Dignified, courageous, quiet, and deeply loyal to families." },
  { id: 16, breed: "Chow Chow", gender: "Male", price: 1600, img: chowChow, desc: "Dignified, bear-like appearance, independent, and quiet." },
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
  { name: "Aarav Sharma", role: "Milo's Owner", text: "Bringing Milo home was the best decision! He's brought so much laughter and playfulness into our house. The process was super smooth.", img: tImage1, breed: "Golden Retriever" },
  { name: "Priyanka Patel", role: "Bella's Family", text: "Pawsome Puppies is fantastic. Bella came home vet-checked, fully vaccinated, and socialized. Thank you so much!", img: tImage2, breed: "Labrador" },
  { name: "Rohan Mehta", role: "Oliver's Mom", text: "Our little Frenchie, Oliver, is the star of the neighborhood. Extremely healthy and well-behaved. Highly recommended!", img: tImage3, breed: "French Bulldog" },
  { name: "Ananya Iyer", role: "Teddy's Dad", text: "The team was supportive throughout the transition. Teddy is our dream puppy. The post-purchase advice was invaluable.", img: tImage4, breed: "Poodle" },
  { name: "Arjun Verma", role: "Daisy's Parent", text: "We are in love with Daisy. She's incredibly smart, active, and loves kids. A perfect addition to our family!", img: tImage5, breed: "Beagle" },
  { name: "Neha Gupta", role: "Rocky's Companion", text: "So grateful to Pawsome Puppies. Rocky is our protector and best friend. Excellent support even after bringing him home!", img: tImage6, breed: "German Shepherd" },
  { name: "Vikram Singh", role: "Lily's Owner", text: "Unbelievably happy with the entire process. Lily is active, affectionate, and so healthy. She is a bundle of joy.", img: tImage7, breed: "Shih Tzu" },
  { name: "Kavita Rao", role: "Coco's Dad", text: "Coco has been with us for a month and is doing wonderful. Vet confirmed he's in perfect shape. Thanks Pawsome Puppies!", img: tImage8, breed: "Pug" },
  { name: "Aditya Joshi", role: "Leo's Mom", text: "A five-star experience! From consultation to delivery, everything was handled professionally. Leo is a pure joy.", img: tImage9, breed: "Cocker Spaniel" },
  { name: "Riya Sen", role: "Maggie's Family", text: "Maggie has completed our family. She loves running in the backyard and snuggling with us in the evening.", img: tImage10, breed: "Husky" },
  { name: "Ishaan Malhotra", role: "Winston's Parent", text: "Healthy, happy, and so energetic! Winston is the best puppy we could have ever asked for. The process was stress-free.", img: tImage11, breed: "Boxer" },
];

const SEO_SCHEMAS = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "PetStore",
      "@id": "https://pawsome-puppies.vercel.app/#petstore",
      "name": "Pawsome Puppies Delhi NCR",
      "image": "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/92e47f73-5e0a-46cd-9d36-5ef1c29309d3/id-preview-4c2e6649--36188f29-26f1-43f2-b2f5-0ad148d6bd21.lovable.app-1782141240154.png",
      "url": "https://pawsome-puppies.vercel.app/",
      "telephone": "+916302231051",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Dwarka, sec 10",
        "addressLocality": "New Delhi",
        "addressRegion": "Delhi NCR",
        "postalCode": "110075",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 28.5823,
        "longitude": 77.0597
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "09:00",
        "closes": "19:00"
      },
      "sameAs": [
        "https://facebook.com/pawsomepuppies",
        "https://instagram.com/pawsomepuppies",
        "https://twitter.com/pawsomepuppies"
      ],
      "areaServed": [
        "Delhi",
        "New Delhi",
        "Gurugram",
        "Gurgaon",
        "Noida",
        "Greater Noida",
        "Ghaziabad",
        "Faridabad",
        "Dwarka",
        "Saket",
        "Rohini"
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://pawsome-puppies.vercel.app/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How to buy a puppy in Delhi NCR from Pawsome Puppies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To buy a puppy in Delhi NCR, simply view our available breeds, click Call or WhatsApp to chat with us, choose your favorite puppy, and we will guide you through registration, KCI-certification check, health validation, and safe home delivery across Delhi, Gurgaon, Noida, Ghaziabad, and Faridabad."
          }
        },
        {
          "@type": "Question",
          "name": "Where can I find ethical dog breeders in Gurgaon or Noida?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pawsome Puppies works exclusively with certified, ethical dog breeders in Gurgaon, Noida, and the wider Delhi NCR. We pre-vet all breeders to ensure all puppies are raised in hygienic environments, socialized, and veterinary-checked from day one."
          }
        },
        {
          "@type": "Question",
          "name": "What is the average puppy price in Delhi NCR for different breeds?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The puppy price in Delhi NCR varies by breed, lineage, and registration. Typically, Labrador and Beagle puppies range from ₹25,000 to ₹45,000, Shih Tzu and Pug puppies from ₹30,000 to ₹50,000, and premium breeds like Toy Poodles, French Bulldogs, or Golden Retrievers range higher. Contact us for precise pricing."
          }
        },
        {
          "@type": "Question",
          "name": "Are the puppies vaccinated and KCI registered?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, all our purebred puppies for sale in Delhi NCR are vaccinated, dewormed, and come with their health certificates. We also facilitate KCI-registered puppies from top show-line breeders with complete pedigree records."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide home delivery for puppies in Dwarka, Noida Extension, and Indirapuram?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! We provide safe, air-conditioned doorstep pet home delivery across Delhi NCR, including Dwarka, Janakpuri, Rohini, Saket, Gurgaon DLF, Noida Extension, and Indirapuram Ghaziabad."
          }
        }
      ]
    }
  ]
};

const faqs = [
  {
    q: "How can I buy a puppy in Delhi NCR from Pawsome Puppies?",
    a: "Buying a puppy with us is simple: browse our available puppies online, contact us via Call (+91 6302231051) or WhatsApp, choose your breed (like Golden Retriever, Labrador, Toy Poodle, etc.), inspect veterinary certificates, and arrange safe, climate-controlled home delivery directly to your doorstep in Delhi, Gurgaon, Noida, Ghaziabad, or Faridabad."
  },
  {
    q: "Where do you source your puppies? Are they from ethical dog breeders?",
    a: "Yes! All our puppies come from pre-verified, KCI-certified, and ethical dog breeders in Delhi NCR. We do not work with puppy mills or backyard breeders. Every parent dog is kept in clean, social, and healthy conditions, ensuring high breed standard genetics and great temperament."
  },
  {
    q: "What is the average puppy price in Delhi NCR?",
    a: "The puppy price in Delhi NCR varies by breed and lineage. Healthy, purebred puppies like Labradors, Beagles, and German Shepherds typically start around ₹20,000 to ₹35,000. Premium and toy breeds like Toy Poodles, French Bulldogs, Bichon Frises, and Shih Tzus range from ₹30,000 to ₹60,000+. KCI-registered and imported lines may command higher prices."
  },
  {
    q: "Are the puppies vaccinated and vet-checked?",
    a: "Absolutely. Every puppy is vet-checked by certified veterinarians from day one. They are dewormed on schedule and receive age-appropriate vaccinations. We hand over a complete medical health chart, vaccination record, and a written health guarantee upon purchase."
  },
  {
    q: "Do you offer pet shop services or a physical dog shop in Dwarka or South Delhi?",
    a: "Yes, our central operational hub is in Dwarka, New Delhi. While you can view available puppies on our website and coordinate online, we also support safe pet clinic consulting and home visits by appointment to ensure full transparency."
  },
  {
    q: "Which puppy breeds are best for apartments in Noida and Gurgaon?",
    a: "For apartment living in Gurgaon and Noida, small-sized low-shedding or hypoallergenic toy breeds are ideal. We highly recommend Shih Tzus, Toy Poodles, Maltipoos, Maltese, Pug, and Bichon Frises. They adapt wonderfully to indoor living and require moderate exercise."
  }
];

function Home() {
  const [slide, setSlide] = useState(0);
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showGuide, setShowGuide] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.search.includes("submitted=true")) {
      setShowThankYou(true);
      // Trigger Google Ads conversion event on successful redirect
      if (typeof (window as any).gtag === "function") {
        (window as any).gtag('event', 'conversion', {
          'send_to': 'AW-18264805339/0B0-CIj0h8QcENufq4VE',
          'value': 1.0,
          'currency': 'INR'
        });
      }
    }
  }, []);

  // Testimonials Slider State
  const [tIndex, setTIndex] = useState(0);
  const [tVisibleCount, setTVisibleCount] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setTVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setTVisibleCount(2);
      } else {
        setTVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxTIndex = testimonials.length - tVisibleCount;

  // Auto-scroll logic (resets the timer when user interacts or tIndex changes)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setTIndex((prev) => (prev >= maxTIndex ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [maxTIndex, isPaused, tIndex]);

  useEffect(() => {
    if (tIndex > maxTIndex) {
      setTIndex(Math.max(0, maxTIndex));
    }
  }, [maxTIndex, tIndex]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const t = setInterval(() => setSlide((s) => (s + 1) % slides.length), 5500);
      return () => clearInterval(t);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const onScroll = () => setScrolled(window.scrollY > 30);
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }
  }, []);

  // Scroll reveal observer
  useEffect(() => {
    if (typeof window !== "undefined") {
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
    }
  }, []);

  // Mouse parallax for hero decorations
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  useEffect(() => {
    if (typeof window !== "undefined") {
      const onMove = (e: MouseEvent) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        setParallax({ x, y });
      };
      window.addEventListener("mousemove", onMove);
      return () => window.removeEventListener("mousemove", onMove);
    }
  }, []);

  const waLink = (msg: string) =>
    `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SEO_SCHEMAS) }}
      />
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
            <span className="font-display text-xl font-black tracking-tight">Pawsome Puppies</span>
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
              <PawPrint className="h-3.5 w-3.5 animate-wiggle" /> Pawsome Puppies
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
              <a href={waLink("Hi! I'd love to know more about your puppies.")}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-card/90 backdrop-blur text-foreground px-7 py-3.5 font-semibold border border-border hover:bg-secondary hover:-translate-y-1 transition-all duration-300">
                <MessageCircle className="h-4 w-4 text-[#25D366] fill-[#25D366]" /> WhatsApp Us
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

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-7">
            {puppies.map((p, idx) => (
              <article key={p.id} style={{ transitionDelay: `${idx * 80}ms` }} className="reveal group rounded-2xl sm:rounded-3xl bg-card shadow-soft hover:shadow-card transition-all hover:-translate-y-2 hover:rotate-[-0.5deg] duration-500 overflow-hidden border border-border">
                <div className="relative aspect-square overflow-hidden">
                  <img src={p.img} alt={p.breed} loading="lazy" width={800} height={800}
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-3 sm:p-6 flex flex-col justify-between min-h-[160px] sm:min-h-[190px]">
                  <div>
                    <h3 className="font-display text-base sm:text-2xl font-black text-foreground group-hover:text-primary transition-colors">{p.breed}</h3>
                    <p className="mt-1 text-[11px] sm:text-sm leading-relaxed text-muted-foreground line-clamp-2">{p.desc}</p>
                  </div>
                  <div className="mt-3 flex flex-col sm:flex-row gap-2">
                    <a href="tel:+916302231051"
                      className="inline-flex items-center justify-center gap-1.5 rounded-lg sm:rounded-xl border border-neutral-200 bg-white text-black py-2 sm:py-2.5 text-[11px] sm:text-sm font-bold shadow-sm hover:bg-neutral-50 transition-colors w-full sm:flex-1">
                      <Phone className="h-3.5 w-3.5" /> Call Now
                    </a>
                    <a href={waLink(`Hi! I'm interested in a ${p.breed} puppy.`)}
                      target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 rounded-lg sm:rounded-xl bg-[#25D366] text-white py-2 sm:py-2.5 text-[11px] sm:text-sm font-bold shadow-sm hover:opacity-90 transition-opacity w-full sm:flex-1">
                      <MessageCircle className="h-3.5 w-3.5 fill-white text-white" /> WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
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

      {/* SERVICE AREAS */}
      <section id="locations" className="py-24 bg-card/45 backdrop-blur-sm border-y border-border animate-fade-in">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 reveal">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Delhi NCR Coverage</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-black">Serving All of Delhi NCR</h2>
            <p className="mt-4 text-muted-foreground">We connect loving homes with certified, vaccinated puppies through safe doorstep pet home delivery in all major regions.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-6">
            {[
              {
                region: "Delhi / New Delhi",
                areas: "Dwarka, Saket, Rohini, Vasant Kunj, Janakpuri, Pitampura",
                highlight: "Local Pet Shop Dwarka & South Delhi hubs. 24-hour home delivery."
              },
              {
                region: "Gurugram (Gurgaon)",
                areas: "DLF Phase 1-5, Golf Course Road, Sohna Road, Sector 56",
                highlight: "Verified dog breeders Gurgaon network. Premium KCI registered puppies."
              },
              {
                region: "Noida / Greater Noida",
                areas: "Sector 62, Sector 50, Noida Extension, Greater Noida West",
                highlight: "Ethical puppy shop Noida connection. Health-certified toy breeds."
              },
              {
                region: "Ghaziabad",
                areas: "Indirapuram, Vaishali, Vasundhara, Kavi Nagar",
                highlight: "Pet store Indirapuram partnerships. Purebred puppies for sale."
              },
              {
                region: "Faridabad & Surrounds",
                areas: "Sector 15, Sector 21, Bahadurgarh, Sonepat",
                highlight: "Safe climate-controlled transit & home delivery puppy Delhi NCR service."
              }
            ].map((loc, i) => (
              <div key={i} style={{ transitionDelay: `${i * 80}ms` }} className="reveal group rounded-2xl sm:rounded-3xl bg-card border border-border p-4 sm:p-6 shadow-soft hover:shadow-card hover:-translate-y-2 transition-all duration-500">
                <div className="grid place-items-center h-10 w-10 sm:h-12 sm:w-12 rounded-xl sm:rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:to-accent group-hover:text-primary-foreground transition-all">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 group-hover:animate-float" />
                </div>
                <h3 className="mt-4 sm:mt-5 font-display text-sm sm:text-lg font-black text-foreground group-hover:text-primary transition-colors">{loc.region}</h3>
                <p className="mt-1 sm:mt-2 text-[10px] sm:text-xs font-semibold text-primary">{loc.areas}</p>
                <p className="mt-2 sm:mt-3 text-[10px] sm:text-xs leading-relaxed text-muted-foreground">{loc.highlight}</p>
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
                <p className="text-xs text-muted-foreground">of placing happy puppies</p>
              </div>
            </div>
          </div>
          <div className="reveal reveal-d2">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">About Us</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-black">Where Puppies Meet Forever Homes</h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              We are passionate about connecting loving families with healthy, happy, and well-cared-for puppies.
              Our mission is to provide trusted, ethical, and transparent puppy services while ensuring
              every puppy finds a loving forever home.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                ["500+", "Happy Families"],
                ["1000+", "Puppies Placed"],
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
      <section className="py-24 bg-gradient-to-b from-secondary/40 to-background overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 reveal">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Happy Hearts</span>
              <h2 className="mt-3 text-4xl sm:text-5xl font-black">What Our Families Say</h2>
            </div>
            <p className="text-muted-foreground max-w-md md:text-right">
              Over 1000+ happy puppies placed in loving forever homes. Here is what some of our wonderful families have to say.
            </p>
          </div>

          <div 
            className="relative overflow-hidden py-4 -mx-3 px-3"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div 
              className="flex transition-transform duration-[800ms] ease-in-out"
              style={{ 
                transform: `translateX(-${tIndex * (100 / tVisibleCount)}%)`
              }}
            >
              {testimonials.map((t, i) => (
                <div 
                  key={i} 
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                >
                  <div className="relative group h-full rounded-3xl bg-card/60 backdrop-blur-md border border-border/80 p-5 shadow-soft hover:shadow-card-hover hover:border-primary/45 hover:-translate-y-2 transition-all duration-500 flex flex-col overflow-hidden min-h-[460px]">
                    {/* Glowing highlight background on hover */}
                    <div className="absolute -inset-px bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500 pointer-events-none" />
                    
                    {/* Big Prominent Image with Top alignment focus */}
                    <div className="relative overflow-hidden w-full h-64 rounded-2xl border border-border/50 shadow-sm flex-shrink-0 mb-5">
                      <img 
                        src={t.img} 
                        alt={t.name} 
                        loading="lazy"
                        className="h-full w-full object-cover object-[center_15%] group-hover:scale-105 transition-transform duration-700 ease-out" 
                      />
                      {/* Breed Badge overlay on image */}
                      <span className="absolute bottom-3 left-3 bg-background/80 backdrop-blur-md border border-border/50 px-3.5 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                        {t.breed}
                      </span>
                    </div>

                    {/* Card Content */}
                    <div className="relative z-10 flex-grow flex flex-col justify-between">
                      <div>
                        {/* Rating stars & Quote */}
                        <div className="flex justify-between items-center mb-4">
                          <div className="flex gap-1 text-[color:var(--accent)]">
                            {[...Array(5)].map((_, j) => (
                              <Star 
                                key={j} 
                                className="h-4 w-4 fill-current group-hover:scale-115 group-hover:rotate-[12deg] transition-transform duration-300"
                                style={{ transitionDelay: `${j * 40}ms` }}
                              />
                            ))}
                          </div>
                          <Quote className="h-8 w-8 text-primary/10 group-hover:text-primary/20 transition-colors duration-300" />
                        </div>
                        
                        {/* Testimonial text */}
                        <p className="text-foreground/80 leading-relaxed text-sm sm:text-base italic line-clamp-4 group-hover:text-foreground transition-colors duration-300">
                          "{t.text}"
                        </p>
                      </div>

                      {/* User Info Footer */}
                      <div className="mt-5 pt-4 border-t border-border/40 flex items-center justify-between">
                        <div>
                          <p className="font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                            {t.name}
                          </p>
                          <p className="text-xs text-muted-foreground font-semibold mt-1">
                            {t.role}
                          </p>
                        </div>
                        <span className="h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                          <Heart className="h-3.5 w-3.5 fill-current" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prev / Next controls and indicator dots */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {[...Array(maxTIndex + 1)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTIndex(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    tIndex === i ? "w-8 bg-primary" : "w-2.5 bg-border hover:bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => setTIndex((prev) => Math.max(0, prev - 1))}
                disabled={tIndex === 0}
                className={`grid place-items-center h-10 w-10 rounded-full border border-border bg-card shadow-soft hover:bg-accent/10 transition-all ${
                  tIndex === 0 ? "opacity-40 cursor-not-allowed" : "hover:-translate-x-0.5 active:scale-95"
                }`}
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => setTIndex((prev) => Math.min(maxTIndex, prev + 1))}
                disabled={tIndex >= maxTIndex}
                className={`grid place-items-center h-10 w-10 rounded-full border border-border bg-card shadow-soft hover:bg-accent/10 transition-all ${
                  tIndex >= maxTIndex ? "opacity-40 cursor-not-allowed" : "hover:translate-x-0.5 active:scale-95"
                }`}
                aria-label="Next testimonials"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-24 bg-secondary/35 border-t border-border">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 reveal">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Got Questions?</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-black font-display text-foreground">Frequently Asked Questions</h2>
            <p className="mt-4 text-muted-foreground text-sm">Everything you need to know about buying a puppy in Delhi NCR.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx} 
                  style={{ transitionDelay: `${idx * 50}ms` }} 
                  className="reveal border border-border rounded-3xl bg-card overflow-hidden shadow-soft hover:shadow-card transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left font-display font-bold text-base sm:text-lg text-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span className={`grid place-items-center h-8 w-8 rounded-full bg-secondary text-foreground transition-transform duration-300 ${isOpen ? "rotate-180 bg-primary text-primary-foreground" : ""}`}>
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>
                  <div 
                    className={`transition-all duration-350 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-[300px] border-t border-border/60" : "max-h-0"
                    }`}
                  >
                    <div className="px-6 py-5 text-sm sm:text-base leading-relaxed text-muted-foreground bg-secondary/20">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LOCAL SEO GUIDE */}
      <section id="seo-guide" className="py-16 bg-card border-t border-border">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-black font-display">Delhi NCR Puppy Buying & Breeder Guide</h2>
          <p className="mt-3 text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto">
            Get professional insights on buying puppies, choosing ethical breeders, and caring for your new dog in Delhi, Gurugram, and Noida.
          </p>
          
          <button 
            onClick={() => setShowGuide(!showGuide)}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white hover:bg-neutral-50 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-primary shadow-soft transition-all duration-300 cursor-pointer"
          >
            {showGuide ? "Collapse Guide" : "Read Complete Guide"}
            <ChevronUp className={`h-4 w-4 transition-transform duration-300 ${showGuide ? "" : "rotate-180"}`} />
          </button>

          {showGuide && (
            <div className="mt-8 text-left bg-card border border-border rounded-3xl p-6 sm:p-10 shadow-soft animate-fade-up space-y-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
              <h3 className="font-display text-xl font-bold text-foreground">Complete Guide to Finding a Healthy Puppy for Sale in Delhi NCR</h3>
              
              <p>
                Welcome to the ultimate resource for pet parents looking to <strong>buy puppies in Delhi</strong> or locate a trusted <strong>dog breeder in Delhi NCR</strong>. Finding the right companion is an exciting journey, but it requires careful research to ensure you support an <strong>ethical dog breeder Delhi</strong> rather than backyard operations. Whether you are searching for a playful <strong>Labrador puppy price Delhi</strong>, a majestic <strong>Golden Retriever price Noida</strong>, or an adorable <strong>Shih Tzu puppy price in Delhi</strong>, our mission at Pawsome Puppies is to make the process completely safe, transparent, and rewarding.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 my-6 text-xs sm:text-sm">
                <div className="bg-secondary/40 rounded-2xl p-5 border border-border">
                  <h4 className="font-bold text-foreground mb-2">Popular Large & Guard Breeds</h4>
                  <ul className="space-y-1.5 list-disc pl-4">
                    <li>Find a registered <strong>German Shepherd breeder Delhi NCR</strong></li>
                    <li>Premium <strong>Siberian Husky puppy price Delhi</strong> advice</li>
                    <li>Rare guard dogs like <strong>Tibetan Mastiff price in Delhi</strong></li>
                    <li>Powerful family protection dogs and active guard lines</li>
                  </ul>
                </div>
                <div className="bg-secondary/40 rounded-2xl p-5 border border-border">
                  <h4 className="font-bold text-foreground mb-2">Charming Small & Toy Breeds</h4>
                  <ul className="space-y-1.5 list-disc pl-4">
                    <li>Adorable, low-shedding <strong>Toy Poodle price in Delhi NCR</strong></li>
                    <li>Hypoallergenic companions from a <strong>Maltese puppy buy Delhi</strong> service</li>
                    <li>Tiny flat-dwellers like a <strong>Pug puppy for sale in Noida</strong></li>
                    <li>Cheerful, playful <strong>Bichon Frise puppy Delhi NCR</strong> options</li>
                  </ul>
                </div>
              </div>

              <h4 className="font-display text-lg font-bold text-foreground">Why Buying Certified, Vaccinated Puppies Matters</h4>
              <p>
                When searching for a <strong>puppy shop in Noida</strong> or browsing the <strong>best pet shop in Delhi</strong>, health credentials should be your absolute priority. Unscrupulous sellers often advertise cheap dogs, but those pets rarely have vaccinations. Every animal from our network is a <strong>vet-checked puppy Delhi NCR</strong> pet, complete with medical logs. We offer <strong>vaccinated puppies for sale Delhi</strong>, covering critical vaccinations and deworming. If you seek show qualities, we can connect you with a <strong>KCI registered puppy Gurgaon</strong> or <strong>KCI certified puppies Delhi</strong> breeders.
              </p>

              <h4 className="font-display text-lg font-bold text-foreground">Home Delivery & Regional Coverage</h4>
              <p>
                Our services extend across the entire capital territory. We coordinate climate-controlled <strong>home delivery puppy Delhi NCR</strong> service, bringing your new friend safely to your door. From a <strong>pet shop in Dwarka New Delhi</strong> to a <strong>pet store in Indirapuram Ghaziabad</strong>, we cover South Delhi, West Delhi, North Delhi, Rohini, Saket, and Noida Extension. If you want a <strong>dog breeder in Gurgaon</strong>, a <strong>dog breeders in Faridabad</strong>, or a <strong>puppies for sale in Ghaziabad</strong> hub, we can provide immediate coordination.
              </p>

              <h4 className="font-display text-lg font-bold text-foreground">Choosing the Right Breeder in Delhi</h4>
              <p>
                For families with specific breed needs, like hypoallergenic toy dogs or protective guard lines, we ensure you find the most healthy and humanely-bred pets. We work with top certified dog breeders in Delhi NCR to guarantee that you bring home a healthy, happy companion that fits your family's lifestyle.
              </p>

              <div className="pt-4 border-t border-border flex flex-wrap gap-2 text-xs justify-center text-muted-foreground/80 font-mono">
                <span>#PuppyForSaleDelhi</span> • <span>#DogBreedersGurgaon</span> • <span>#PetShopNoida</span> • <span>#KCIPuppiesDelhi</span> • <span>#ToyPoodleDelhi</span> • <span>#GoldenRetrieverDelhi</span> • <span>#ShihTzuDelhiPrice</span>
              </div>
            </div>
          )}
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
                { Icon: Phone, t: "+91 6302231051" },
                { Icon: Mail, t: "puppiespawsome6@gmail.com" },
                { Icon: MapPin, t: "Dwarka, sec 10, New Delhi" },
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
            className="reveal reveal-d2 rounded-3xl bg-card border border-border p-7 sm:p-9 shadow-card space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const f = new FormData(e.currentTarget);
              const msg = `Hi! I'm ${f.get("name")} (${f.get("email")}, ${f.get("phone")}). ${f.get("message")}`;
              window.open(waLink(msg), "_blank");
              // Update URL query parameters to trigger Google Ads conversion tracking
              if (typeof window !== "undefined") {
                window.location.search = "?submitted=true";
              }
            }}
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
              <span className="font-display text-xl font-black">Pawsome Puppies</span>
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
              <li>+91 6302231051</li>
              <li>puppiespawsome6@gmail.com</li>
              <li>Dwarka, sec 10, New Delhi</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-5 sm:px-8 mt-12 pt-6 border-t border-background/10 text-center text-sm text-background/60">
          © {new Date().getFullYear()} Pawsome Puppies. Made with <Heart className="inline h-3.5 w-3.5 text-[color:var(--blush)] fill-current" /> for puppies.
        </div>
      </footer>

      {/* WhatsApp Float */}
      <a
        href={waLink("Hi! I'd love to know more about your puppies.")}
        target="_blank" rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-8 right-6 z-50 hidden md:grid place-items-center h-14 w-14 rounded-full bg-[color:var(--whatsapp)] text-white shadow-card animate-pulse-ring hover:scale-110 transition-transform"
      >
        <MessageCircle className="h-7 w-7" />
      </a>

      {/* Mobile Bottom Navigation Bar */}
      <div className="fixed bottom-0 inset-x-0 z-50 md:hidden px-4 pb-4 pt-2 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none">
        <div className="mx-auto max-w-md w-full bg-white text-black rounded-full shadow-[0_-8px_30px_rgb(0,0,0,0.12)] border border-neutral-100 flex items-center justify-between px-8 py-2.5 pointer-events-auto">
          {/* Call Us */}
          <a href="tel:+916302231051" className="flex flex-col items-center gap-1 group">
            <span className="grid place-items-center h-10 w-10 rounded-full bg-[#00c853] text-white shadow-sm group-hover:scale-105 transition-transform">
              <Phone className="h-5 w-5 fill-white text-white" />
            </span>
            <span className="text-[10px] font-bold tracking-tight text-neutral-600">Call Us</span>
          </a>

          {/* Scroll to Top */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="grid place-items-center h-10 w-10 rounded-full border border-neutral-200 bg-white text-neutral-600 shadow-md hover:scale-105 active:scale-95 transition-transform -translate-y-2"
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-5 w-5" />
          </button>

          {/* WhatsApp */}
          <a href={waLink("Hi! I'd love to know more about your puppies.")} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 group">
            <span className="grid place-items-center h-10 w-10 rounded-full bg-[#25D366] text-white shadow-sm group-hover:scale-105 transition-transform">
              <MessageCircle className="h-5 w-5 fill-white text-white" />
            </span>
            <span className="text-[10px] font-bold tracking-tight text-neutral-600">Whatsapp</span>
          </a>
        </div>
      </div>

      {/* Thank You / Lead Conversion Success Modal */}
      {showThankYou && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-300">
          <div className="w-full max-w-md rounded-3xl bg-card border border-border p-8 text-center shadow-card animate-in zoom-in-95 duration-300">
            <div className="mx-auto grid place-items-center h-16 w-16 rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-soft mb-6">
              <ShieldCheck className="h-8 w-8" />
            </div>
            <h3 className="font-display text-3xl font-black mb-3 text-foreground">Thank You!</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Your inquiry has been successfully sent. We have opened a WhatsApp chat to finalize your puppy request. We'll be in touch shortly!
            </p>
            <button
              onClick={() => {
                setShowThankYou(false);
                if (typeof window !== "undefined") {
                  window.history.replaceState(null, "", window.location.pathname);
                }
              }}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground px-8 py-3.5 font-semibold shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
