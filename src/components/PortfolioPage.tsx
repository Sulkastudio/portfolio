import { ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface PortfolioPageProps {
  onBack: () => void;
}

interface ProjectData {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}

const projects: ProjectData[] = [
  {
    id: 1,
    title: "Suricarte",
    category: "Design d'Identité",
    description: "Création d'une identité visuelle complète pour une marque innovante. Ce projet englobe le logo, la charte graphique, et l'ensemble des supports de communication.",
    image: "/images/suricarte.png",
    tags: ["Branding", "Logo Design", "Charte Graphique"]
  },
  {
    id: 2,
    title: "Projet Design",
    category: "Design de Produit",
    description: "Conception et design de produit avec une approche centrée utilisateur. Focus sur l'esthétique et la fonctionnalité.",
    image: "/images/design-project.png",
    tags: ["Product Design", "Visual Design", "Packaging"]
  },
  {
    id: 3,
    title: "Yoki",
    category: "Design de Contenu",
    description: "Création de contenu visuel pour les réseaux sociaux. Stratégie de communication digitale et design d'interface pour Instagram.",
    image: "/images/yoki.png",
    tags: ["Social Media", "Content Design", "Instagram"]
  },
  {
    id: 4,
    title: "Grissun",
    category: "Design de Produit",
    description: "Design d'album et packaging musical. Création d'une identité visuelle forte pour un projet artistique.",
    image: "/images/grissun.png",
    tags: ["Album Design", "Packaging", "Visual Identity"]
  },
  {
    id: 5,
    title: "Interface Web Moderne",
    category: "Design d'Expérience",
    description: "Conception UX/UI d'une interface web moderne et intuitive. Recherche utilisateur, wireframing et prototypage.",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1eCUyMHVpJTIwZGVzaWdufGVufDF8fHx8MTc2MjcwNDcxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["UX/UI", "Web Design", "Prototype"]
  },
  {
    id: 6,
    title: "Identité de Marque",
    category: "Design d'Identité",
    description: "Développement complet d'une identité de marque incluant logo, palette de couleurs, typographie et guidelines.",
    image: "https://images.unsplash.com/photo-1762365189058-7be5b07e038b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwZGVzaWdufGVufDF8fHx8MTc2MjY3NTE1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Branding", "Identity", "Guidelines"]
  },
  {
    id: 7,
    title: "Campagne Visuelle",
    category: "Design de Contenu",
    description: "Création d'une campagne visuelle cohérente pour différents supports digitaux et print.",
    image: "https://images.unsplash.com/photo-1652805363265-b8fbf9bbdfac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwcG9ydGZvbGlvfGVufDF8fHx8MTc2MjY3NjA4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Campaign", "Visual Design", "Multi-support"]
  },
  {
    id: 8,
    title: "Espace Créatif",
    category: "Design d'Expérience",
    description: "Conception d'un environnement de travail créatif et inspirant. Design thinking et aménagement d'espace.",
    image: "https://images.unsplash.com/photo-1632937145991-91620be68319?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjI2NTI2MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Workspace", "Creative", "Design Thinking"]
  }
];

export default function PortfolioPage({ onBack }: PortfolioPageProps) {
  return (
    <div className="bg-[#fffaf8] min-h-screen">
      {/* Header with Back Button */}
      <div className="sticky top-0 z-50 bg-[#fffaf8] border-b border-black">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 h-[104px] flex items-center">
          <button 
            onClick={onBack}
            className="flex items-center gap-3 hover:opacity-70 transition-opacity"
          >
            <ArrowLeft size={24} />
            <span className="font-['Garet:Book',sans-serif] text-[18px]">Retour</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 sm:py-24 px-6 sm:px-12 max-w-[1440px] mx-auto">
        <h1 className="font-['Amarante:Regular',sans-serif] text-[clamp(40px,8vw,100px)] text-black tracking-[2.6px] text-center mb-6">
          MON PORTFOLIO
        </h1>
        <p className="font-['Garet:Book',sans-serif] text-[18px] text-black text-center max-w-[800px] mx-auto">
          Découvrez une sélection de mes projets en design graphique, identité de marque, UX/UI et création de contenu.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="px-6 sm:px-12 max-w-[1440px] mx-auto pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16">
          {projects.map((project) => (
            <div key={project.id} className="group">
              {/* Project Image */}
              <div className="aspect-[4/3] overflow-hidden rounded-[12px] mb-6">
                <ImageWithFallback 
                  alt={project.title}
                  className="size-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={project.image}
                />
              </div>

              {/* Project Info */}
              <div>
                <p className="font-['Garet:Book',sans-serif] text-[14px] text-[#b89781] mb-2 uppercase tracking-wider">
                  {project.category}
                </p>
                <h3 className="font-['Amarante:Regular',sans-serif] text-[clamp(24px,3vw,32px)] text-black mb-3 tracking-[1.2px]">
                  {project.title}
                </h3>
                <p className="font-['Garet:Book',sans-serif] text-[16px] text-black leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-[#eddbcf] px-3 py-1 rounded-full font-['Garet:Book',sans-serif] text-[14px] text-black"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#faefe8] py-16 sm:py-20 px-6 sm:px-12">
        <div className="max-w-[1440px] mx-auto text-center">
          <h2 className="font-['Amarante:Regular',sans-serif] text-[clamp(32px,5vw,52px)] text-black tracking-[2.6px] mb-6">
            UN PROJET EN TÊTE ?
          </h2>
          <p className="font-['Garet:Book',sans-serif] text-[18px] text-black mb-8 max-w-[600px] mx-auto">
            Discutons ensemble de votre projet et créons quelque chose d'unique.
          </p>
          <a 
            href="mailto:sophie@sulkastudio.com"
            className="inline-block bg-[#fffaf7] border-3 border-[#eddbcf] rounded-[16px] px-8 py-4 hover:bg-[#eddbcf] transition-colors"
          >
            <span className="font-['Amarante:Regular',sans-serif] text-[20px] text-[#b89781] tracking-[1.2px]">
              ME CONTACTER
            </span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#fffaf8] border-t border-black">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 py-8 text-center">
          <p className="font-['Garet:Book',sans-serif] text-[14px] sm:text-[16px] text-black">
            © 2025 Sophie Margnes — Made with ♥ in Bordeaux
          </p>
        </div>
      </footer>
    </div>
  );
}
