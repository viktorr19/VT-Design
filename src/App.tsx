import { motion, useScroll, useTransform } from "motion/react";
import { 
  Code2, Palette, Layout, Search, Smartphone, ArrowRight, Mail, Phone, MapPin, Github, Linkedin, Instagram, Star, CheckCircle2, ExternalLink
} from "lucide-react";
import { useState, useEffect } from "react";

const PROJECTS = [
  { id: 1, title: "La Plăcinte - Redesign Digital", category: "Web Design & Development", description: "O experiență digitală complet nouă pentru cel mai iubit lanț de restaurante din Moldova.", tech: ["React", "Tailwind", "Framer Motion"], result: "+45% Rezervări Online", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800" },
  { id: 2, title: "EcoMoldova Shop", category: "E-commerce", description: "Platformă de vânzare produse bio locale cu un design minimalist și flow de checkout optimizat.", tech: ["Next.js", "Shopify API", "UI/UX"], result: "Creștere vânzări cu 30%", image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800" },
  { id: 3, title: "Chisinau Real Estate", category: "Real Estate Portal", description: "Sistem avansat de filtrare și vizualizare 3D pentru proprietăți imobiliare premium.", tech: ["TypeScript", "Three.js", "Node.js"], result: "Timp pe pagină +120%", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800" },
  { id: 4, title: "TechHub Moldova", category: "Startup Community", description: "Portal comunitar pentru ecosistemul tech local, integrând evenimente și job-uri.", tech: ["React", "Firebase", "Design System"], result: "5000+ utilizatori activi", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800" },
  { id: 5, title: "WineTour Moldova", category: "Tourism App", description: "Ghid interactiv pentru cramele din țară, cu itinerarii personalizate.", tech: ["React Native", "Google Maps API"], result: "Top 10 App Store Moldova", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800" },
  { id: 6, title: "SmartCity Chisinau", category: "Public Service", description: "Dashboard pentru monitorizarea serviciilor publice și raportarea problemelor urbane.", tech: ["D3.js", "React", "API Integration"], result: "Eficiență administrativă +25%", image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=800" }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-nav py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-serif font-bold tracking-tight">Tataru<span className="text-brand-orange">Viktor</span></div>
        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest opacity-70">
          {["Despre", "Portofoliu", "Servicii", "Contact"].map((item) => (<a key={item} href={`#${item.toLowerCase()}`} className="hover:text-brand-orange transition-colors">{item}</a>))}
        </div>
        <a href="#contact" className="px-6 py-2 bg-brand-ink text-white rounded-full text-sm font-medium">Hai să vorbim</a>
      </div>
    </nav>
  );
};

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center section-padding pt-32 gap-12 overflow-hidden">
        <div className="flex-1 space-y-8 text-center lg:text-left">
          <h1 className="text-6xl md:text-8xl font-serif font-bold leading-tight">Salut, sunt <br /><span className="text-brand-orange">Tataru Viktor</span></h1>
          <p className="text-xl md:text-2xl text-brand-ink/60 mt-6 max-w-2xl">Web Developer & Designer din Chișinău, pasionat de crearea experiențelor digitale premium.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#portofoliu" className="btn-primary">Vezi portofoliul</a>
            <a href="#contact" className="btn-secondary">Contactează-mă</a>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
            <div className="relative z-10 w-full h-full rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
              <img src="viktor.jpg" alt="Tataru Viktor" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
      {/* Adaugă restul secțiunilor aici similar sau simplificat */}
    </div>
  );
}
