import { motion, useScroll, useTransform } from "motion/react";
import { 
  Code2, 
  Palette, 
  Layout, 
  Search, 
  Smartphone, 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Instagram,
  Star,
  CheckCircle2,
  ExternalLink
} from "lucide-react";
import { useState, useEffect } from "react";

// --- Types ---
interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tech: string[];
  result: string;
  image: string;
}

interface Review {
  id: number;
  name: string;
  company: string;
  comment: string;
  rating: number;
}

interface Stat {
  id: number;
  label: string;
  value: string;
  description: string;
}

// --- Data ---
const PROJECTS: Project[] = [
  {
    id: 1,
    title: "La Plăcinte - Redesign Digital",
    category: "Web Design & Development",
    description: "O experiență digitală complet nouă pentru cel mai iubit lanț de restaurante din Moldova.",
    tech: ["React", "Tailwind", "Framer Motion"],
    result: "+45% Rezervări Online",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "EcoMoldova Shop",
    category: "E-commerce",
    description: "Platformă de vânzare produse bio locale cu un design minimalist și flow de checkout optimizat.",
    tech: ["Next.js", "Shopify API", "UI/UX"],
    result: "Creștere vânzări cu 30%",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Chisinau Real Estate",
    category: "Real Estate Portal",
    description: "Sistem avansat de filtrare și vizualizare 3D pentru proprietăți imobiliare premium.",
    tech: ["TypeScript", "Three.js", "Node.js"],
    result: "Timp pe pagină +120%",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "TechHub Moldova",
    category: "Startup Community",
    description: "Portal comunitar pentru ecosistemul tech local, integrând evenimente și job-uri.",
    tech: ["React", "Firebase", "Design System"],
    result: "5000+ utilizatori activi",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    title: "WineTour Moldova",
    category: "Tourism App",
    description: "Ghid interactiv pentru cramele din țară, cu itinerarii personalizate.",
    tech: ["React Native", "Google Maps API"],
    result: "Top 10 App Store Moldova",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    title: "SmartCity Chisinau",
    category: "Public Service",
    description: "Dashboard pentru monitorizarea serviciilor publice și raportarea problemelor urbane.",
    tech: ["D3.js", "React", "API Integration"],
    result: "Eficiență administrativă +25%",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=800"
  }
];

const REVIEWS: Review[] = [
  {
    id: 1,
    name: "Andrei Ionescu",
    company: "CEO, TechStart MD",
    comment: "Viktor a înțeles perfect viziunea noastră. Site-ul arată premium și funcționează impecabil pe orice dispozitiv.",
    rating: 5
  },
  {
    id: 2,
    name: "Elena Munteanu",
    company: "Marketing Manager, Vinăria Purcari",
    comment: "Atenția la detalii și simțul estetic al lui Viktor sunt remarcabile. Recomand cu toată încrederea!",
    rating: 5
  },
  {
    id: 3,
    name: "Radu Popescu",
    company: "Fondator, EcoGusto",
    comment: "Colaborarea a fost fluidă, iar rezultatele au depășit așteptările. Vânzările noastre au crescut imediat după lansare.",
    rating: 5
  },
  {
    id: 4,
    name: "Cristina Rotaru",
    company: "Director, Chisinau Design Week",
    comment: "Un profesionist tânăr, dar extrem de talentat. Design-ul creat de el a dat o nouă viață brandului nostru.",
    rating: 5
  }
];

const STATS: Stat[] = [
  { id: 1, label: "Trafic Web", value: "+65%", description: "Creștere medie pentru clienții din Chișinău" },
  { id: 2, label: "Vânzări Online", value: "+40%", description: "Îmbunătățire prin optimizarea flow-ului de checkout" },
  { id: 3, label: "Conversie", value: "x2.5", description: "Rată de conversie după redesign-ul UI/UX" },
  { id: 4, label: "Proiecte", value: "50+", description: "Finalizate cu succes în ultimii 2 ani" }
];

// --- Components ---

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
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-serif font-bold tracking-tight"
        >
          Tataru<span className="text-brand-orange">Viktor</span>
        </motion.div>
        
        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest opacity-70">
          {["Despre", "Portofoliu", "Servicii", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-brand-orange transition-colors">
              {item}
            </a>
          ))}
        </div>

        <motion.a 
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 bg-brand-ink text-white rounded-full text-sm font-medium"
        >
          Hai să vorbim
        </motion.a>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center section-padding pt-32 gap-12 overflow-hidden">
      <div className="flex-1 space-y-8 text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-brand-peach text-brand-orange text-sm font-semibold mb-4">
            Disponibil pentru proiecte noi
          </span>
          <h1 className="text-6xl md:text-8xl font-serif font-bold leading-tight">
            Salut, sunt <br />
            <span className="text-brand-orange">Tataru Viktor</span>
          </h1>
          <p className="text-xl md:text-2xl text-brand-ink/60 mt-6 max-w-2xl">
            Web Developer & Designer din Chișinău, pasionat de crearea experiențelor digitale premium care aduc rezultate reale.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
        >
          <a href="#portofoliu" className="btn-primary flex items-center justify-center gap-2 group">
            Vezi portofoliul
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="btn-secondary flex items-center justify-center">
            Contactează-mă
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="flex-1 relative"
      >
        <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-gold rounded-full blur-3xl opacity-30 animate-pulse" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-orange rounded-full blur-3xl opacity-20" />
          
          <div className="relative z-10 w-full h-full rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="viktor.jpg" 
              alt="Tataru Viktor" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const About = () => {
  const skills = [
    { icon: <Code2 />, title: "Development", desc: "HTML, CSS, JS, React, TypeScript" },
    { icon: <Palette />, title: "UI/UX Design", desc: "Figma, Adobe XD, Prototyping" },
    { icon: <Smartphone />, title: "Responsive", desc: "Mobile-first approach" },
    { icon: <Search />, title: "SEO", desc: "Optimizare pentru motoare de căutare" }
  ];

  return (
    <section id="despre" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif font-bold">
              Creativ, dedicat și orientat spre <span className="text-brand-orange italic">rezultate</span>.
            </h2>
            <p className="text-lg text-brand-ink/70 leading-relaxed">
              La doar 19 ani, am reușit să transform pasiunea pentru tehnologie și design într-o carieră dedicată excelenței. Cred că un website nu trebuie doar să arate bine, ci să fie un instrument puternic de business.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {skills.map((skill, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl bg-brand-cream border border-brand-ink/5"
                >
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-orange shadow-sm mb-4">
                    {skill.icon}
                  </div>
                  <h3 className="font-bold mb-1">{skill.title}</h3>
                  <p className="text-sm text-brand-ink/60">{skill.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative p-8 bg-brand-peach rounded-[3rem]">
            <h3 className="text-2xl font-serif font-bold mb-8">Parcursul meu</h3>
            <div className="space-y-8 relative before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-brand-orange/20">
              {[
                { year: "2024 - Prezent", title: "Freelance Web Developer", desc: "Colaborări cu startup-uri din Moldova și internaționale." },
                { year: "2023", title: "Junior UI Designer", desc: "Focus pe crearea de interfețe intuitive și moderne." },
                { year: "2022", title: "Self-taught Journey", desc: "Începutul pasiunii pentru cod și design vizual." }
              ].map((item, i) => (
                <div key={i} className="pl-8 relative">
                  <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-brand-orange border-4 border-white shadow-sm" />
                  <span className="text-sm font-bold text-brand-orange">{item.year}</span>
                  <h4 className="font-bold text-lg">{item.title}</h4>
                  <p className="text-brand-ink/60">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  return (
    <section id="portofoliu" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Portofoliu Selectat</h2>
            <p className="text-brand-ink/60 max-w-md">O selecție de proiecte care demonstrează versatilitatea și atenția la detalii.</p>
          </div>
          <div className="flex gap-4">
            <span className="px-4 py-2 rounded-full bg-brand-ink text-white text-sm font-medium">Toate</span>
            <span className="px-4 py-2 rounded-full bg-white border border-brand-ink/10 text-brand-ink/60 text-sm font-medium hover:bg-brand-ink hover:text-white transition-all cursor-pointer">Web Design</span>
            <span className="px-4 py-2 rounded-full bg-white border border-brand-ink/10 text-brand-ink/60 text-sm font-medium hover:bg-brand-ink hover:text-white transition-all cursor-pointer">E-commerce</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <motion.div 
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group bg-white rounded-3xl overflow-hidden border border-brand-ink/5 card-hover"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-ink/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-ink"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
              <div className="p-8 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">{project.category}</span>
                    <h3 className="text-xl font-bold mt-1">{project.title}</h3>
                  </div>
                </div>
                <p className="text-brand-ink/60 text-sm line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-brand-cream rounded-full text-[10px] font-bold text-brand-ink/40 uppercase tracking-tighter">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="pt-4 border-t border-brand-ink/5 flex items-center gap-2 text-sm font-bold text-green-600">
                  <CheckCircle2 className="w-4 h-4" />
                  {project.result}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  return (
    <section className="section-padding bg-brand-ink text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange rounded-full blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {STATS.map((stat) => (
            <motion.div 
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center space-y-2"
            >
              <div className="text-5xl md:text-6xl font-serif font-bold text-brand-orange">
                {stat.value}
              </div>
              <div className="text-lg font-bold">{stat.label}</div>
              <p className="text-sm text-white/40 max-w-[150px] mx-auto">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { title: "Web Design", desc: "Interfețe vizuale uluitoare care captează atenția și reflectă identitatea brandului tău.", icon: <Palette className="w-8 h-8" /> },
    { title: "Web Development", desc: "Cod curat, performant și scalabil, folosind cele mai noi tehnologii din industrie.", icon: <Code2 className="w-8 h-8" /> },
    { title: "UI/UX Design", desc: "Analiză profundă a comportamentului utilizatorului pentru a crea flow-uri intuitive.", icon: <Layout className="w-8 h-8" /> },
    { title: "Optimizare SEO", desc: "Strategii pentru a urca în primele rezultate Google și a atrage trafic organic.", icon: <Search className="w-8 h-8" /> }
  ];

  return (
    <section id="servicii" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Servicii Premium</h2>
          <p className="text-brand-ink/60 text-lg">Ofer soluții complete pentru prezența ta online, de la concept vizual până la implementare tehnică.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="p-10 rounded-[2.5rem] bg-brand-cream border border-brand-ink/5 flex flex-col md:flex-row gap-8 items-start"
            >
              <div className="w-16 h-16 shrink-0 bg-white rounded-2xl flex items-center justify-center text-brand-orange shadow-sm">
                {s.icon}
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold mb-4">{s.title}</h3>
                <p className="text-brand-ink/60 leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="section-padding bg-brand-peach/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16">Ce spun clienții</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {REVIEWS.map((review) => (
            <motion.div 
              key={review.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 bg-white rounded-3xl shadow-sm border border-brand-ink/5 relative"
            >
              <div className="flex gap-1 text-brand-orange mb-6">
                {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-lg italic text-brand-ink/80 mb-8 leading-relaxed">"{review.comment}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-peach rounded-full flex items-center justify-center font-bold text-brand-orange">
                  {review.name[0]}
                </div>
                <div>
                  <div className="font-bold">{review.name}</div>
                  <div className="text-xs text-brand-ink/40 uppercase tracking-widest">{review.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Hai să creăm ceva <span className="text-brand-orange italic">uimitor</span> împreună.</h2>
              <p className="text-lg text-brand-ink/60">Ai un proiect în minte sau doar vrei să saluți? Sunt la un mesaj distanță.</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-brand-cream rounded-2xl flex items-center justify-center text-brand-orange">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-brand-ink/40 font-bold uppercase tracking-widest">Email</div>
                  <div className="text-xl font-medium">vktataru@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-brand-cream rounded-2xl flex items-center justify-center text-brand-orange">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-brand-ink/40 font-bold uppercase tracking-widest">Telefon</div>
                  <div className="text-xl font-medium">069089861</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-brand-cream rounded-2xl flex items-center justify-center text-brand-orange">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-brand-ink/40 font-bold uppercase tracking-widest">Locație</div>
                  <div className="text-xl font-medium">Chișinău, Moldova</div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {[Github, Linkedin, Instagram].map((Icon, i) => (
                <motion.a 
                  key={i}
                  href="#"
                  whileHover={{ y: -5, backgroundColor: "#F97316", color: "#fff" }}
                  className="w-12 h-12 rounded-full border border-brand-ink/10 flex items-center justify-center text-brand-ink/60 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="bg-brand-cream p-8 md:p-12 rounded-[3rem] border border-brand-ink/5">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-50">Nume</label>
                  <input type="text" className="w-full bg-white border border-brand-ink/5 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 transition-all" placeholder="Numele tău" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-50">Email</label>
                  <input type="email" className="w-full bg-white border border-brand-ink/5 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 transition-all" placeholder="email@exemplu.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest opacity-50">Mesaj</label>
                <textarea rows={5} className="w-full bg-white border border-brand-ink/5 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 transition-all resize-none" placeholder="Cum te pot ajuta?"></textarea>
              </div>
              <button type="submit" className="w-full btn-primary">Trimite Mesajul</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-brand-ink/5 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xl font-serif font-bold">
          Tataru<span className="text-brand-orange">Viktor</span>
        </div>
        <div className="text-sm text-brand-ink/40">
          © {new Date().getFullYear()} Tataru Viktor. Toate drepturile rezervate.
        </div>
        <div className="flex gap-8 text-xs font-bold uppercase tracking-widest opacity-50">
          <a href="#" className="hover:text-brand-orange transition-colors">Politica de Confidențialitate</a>
          <a href="#" className="hover:text-brand-orange transition-colors">Termeni și Condiții</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Stats />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
