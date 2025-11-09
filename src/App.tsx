import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import svgPaths from "./imports/svg-ce7bbfqwkh";
import imgSophieMargnes20242 from "figma:asset/f4f2e908de12cffc5d08953afd4e3ed0b5111198.png";
import imgFreeLayingIPhone16ProMockupAvecScreenshotInstaYoki23 from "figma:asset/4ab0af244d008c518016b42ed63827b6d6cd292a.png";
import imgMockupAlbumGrissunTest23 from "figma:asset/fc8b0097cdcb0f54cafc0fdc62781cf3f4497f86.png";
import imgFichier9BoardSuricarte from "figma:asset/51450df4aec665582846cc6c52f7678de0eb8e50.png";
import imgImage10 from "figma:asset/ffde93546cfc967c64a42aa6a0ebcbe980ffb0a0.png";
import imgMotifSitePortfolio1 from "figma:asset/b384a85c9a2c24542417c29eb66644ba93371e3a.png";
import { imgSophieMargnes20241 } from "./imports/svg-co1hi";

function IconmonstrBehance() {
  return (
    <a href="https://www.behance.net/sophiemargnes" target="_blank" rel="noopener noreferrer" aria-label="Behance" className="size-[54px] transition-transform hover:scale-110">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 54">
        <g clipPath="url(#clip0_1_122)">
          <path d={svgPaths.p1f2a7ac0} fill="black" />
        </g>
        <defs>
          <clipPath id="clip0_1_122">
            <rect fill="white" height="53.9999" width="53.9999" />
          </clipPath>
        </defs>
      </svg>
    </a>
  );
}

function IconmonstrInstagram() {
  return (
    <a href="https://www.instagram.com/sulka.studio_?igsh=MW52aWZrbnhqYTRvZA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="size-[54px] transition-transform hover:scale-110">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 54">
        <g clipPath="url(#clip0_1_119)">
          <path d={svgPaths.p9753c80} fill="black" />
        </g>
        <defs>
          <clipPath id="clip0_1_119">
            <rect fill="white" height="53.9999" width="53.9999" />
          </clipPath>
        </defs>
      </svg>
    </a>
  );
}

function IconmonstrLinkedin() {
  return (
    <a href="https://www.linkedin.com/in/sophie-margnes/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="size-[54px] transition-transform hover:scale-110">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 54">
        <g clipPath="url(#clip0_1_116)">
          <path d={svgPaths.p31eb47f0} fill="black" />
        </g>
        <defs>
          <clipPath id="clip0_1_116">
            <rect fill="white" height="53.9999" width="53.9999" />
          </clipPath>
        </defs>
      </svg>
    </a>
  );
}

function IconSouris() {
  return (
    <div className="h-[47.699px] w-[49.545px] shrink-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 48">
        <g>
          <path d={svgPaths.p27c2a80} fill="#EDDBCF" />
          <path d={svgPaths.p1358f400} fill="#EDDBCF" />
        </g>
      </svg>
    </div>
  );
}

function IconCode() {
  return (
    <div className="h-[50.797px] w-[49.675px] shrink-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 51">
        <g>
          <path d={svgPaths.p19da3a80} fill="#EDDBCF" />
          <path d={svgPaths.p1d4f500} fill="#EDDBCF" />
          <path d={svgPaths.pa6f6b80} fill="#EDDBCF" />
          <path d={svgPaths.p320a1b80} fill="#EDDBCF" />
        </g>
      </svg>
    </div>
  );
}

function IconEtoile() {
  return (
    <div className="h-[48.935px] w-[50.352px] shrink-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51 49">
        <g>
          <path d={svgPaths.p1d8ec900} fill="#EDDBCF" />
          <path d={svgPaths.p3e411d80} fill="#EDDBCF" />
        </g>
      </svg>
    </div>
  );
}

function IconStylo() {
  return (
    <div className="h-[47.737px] w-[47.413px] shrink-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g>
          <path d={svgPaths.p2afd0b80} fill="#EDDBCF" />
          <path d={svgPaths.pbd21280} fill="#EDDBCF" />
        </g>
      </svg>
    </div>
  );
}

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="bg-[#fffaf8] min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#fffaf8] border-b border-black">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-[104px] flex items-center justify-between">
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-[112px] mx-auto font-['Garet:Book',sans-serif] text-[18px]">
            <button onClick={() => scrollToSection('hero')} className="hover:opacity-70 transition-opacity">
              Accueil
            </button>
            <button onClick={() => scrollToSection('offres')} className="hover:opacity-70 transition-opacity">
              Offres
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="hover:opacity-70 transition-opacity">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:opacity-70 transition-opacity">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden ml-auto"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-black bg-[#fffaf8] font-['Garet:Book',sans-serif] text-[18px]">
            <button 
              onClick={() => scrollToSection('hero')} 
              className="block w-full text-left px-6 py-4 hover:bg-[#faefe8] transition-colors"
            >
              Accueil
            </button>
            <button 
              onClick={() => scrollToSection('offres')} 
              className="block w-full text-left px-6 py-4 hover:bg-[#faefe8] transition-colors"
            >
              Offres
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')} 
              className="block w-full text-left px-6 py-4 hover:bg-[#faefe8] transition-colors"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="block w-full text-left px-6 py-4 hover:bg-[#faefe8] transition-colors"
            >
              Contact
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-[589px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            alt="" 
            className="size-full object-cover object-center" 
            src={imgMotifSitePortfolio1} 
          />
        </div>
        <div className="relative h-full flex flex-col justify-end pb-16 sm:pb-20 px-6 sm:px-12 lg:px-[82px] max-w-[1440px] mx-auto">
          <h1 className="font-['Amarante:Regular',sans-serif] text-[clamp(40px,9vw,120px)] text-black leading-[1.1] mb-4">
            SOPHIE MARGNES
          </h1>
          <p className="font-['Garet:Book',sans-serif] text-[clamp(20px,3.5vw,48px)] text-black">
            Designer Graphique & UX/UI
          </p>
        </div>
      </section>

      {/* Offres Section */}
      <section id="offres" className="py-16 sm:py-24 px-6 sm:px-12 lg:px-[76px] max-w-[1440px] mx-auto">
        <h2 className="font-['Amarante:Regular',sans-serif] text-[clamp(32px,4.5vw,52px)] text-black tracking-[2.6px] mb-12 sm:mb-16 text-center">
          MES OFFRES ET SERVICES
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Carte 1 - Design d'Identité */}
          <div className="bg-[#fffaf7] border-4 border-[#eddbcf] rounded-[20px] p-8 sm:p-[42px] flex flex-col gap-6">
            <div className="flex gap-6 items-center">
              <IconSouris />
              <h3 className="font-['Amarante:Regular',sans-serif] text-[clamp(20px,2.5vw,30px)] text-[#b89781] tracking-[1.5px]">
                DESIGN D'IDENTITÉ
              </h3>
            </div>
            <div className="font-['Garet:Book',sans-serif] text-[16px] text-black leading-[normal]">
              <p className="mb-0">
                Imaginer une marque, c'est mon challenge préféré.
                <br />
                {` Bien plus qu'un simple logo, on cherche ainsi à exprimer la singularité de son ADN.`}
                <br />
                <br />
              </p>
              <p className="mb-0">{`En général, je commence par un logo qui sera le coeur de la marque, mais je l'habille avec plusieurs variantes, un système de couleurs ainsi qu'un assortiment de polices. `}</p>
              <p className="mb-0">&nbsp;</p>
              <p>Le but? Faire vivre la marque au delà d'un simple logo.</p>
            </div>
          </div>

          {/* Carte 2 - Design d'Expérience */}
          <div className="bg-[#fffaf7] border-4 border-[#eddbcf] rounded-[20px] p-8 sm:p-[42px] flex flex-col gap-6">
            <div className="flex gap-6 items-center">
              <IconCode />
              <h3 className="font-['Amarante:Regular',sans-serif] text-[clamp(20px,2.5vw,30px)] text-[#b89781] tracking-[1.5px]">
                DESIGN D'EXPÉRIENCE
              </h3>
            </div>
            <div className="font-['Garet:Book',sans-serif] text-[16px] text-black leading-[normal]">
              <p className="mb-0">
                {`Je mets mes compétences de design d'expérience à votre service afin de réaliser un produit qui correspond à vos besoins, qui allie confort et efficacité dans votre usage quotidien.`}
                <br />
                <br />
                {`Je cherche à trouver des projets qui permettrons d'allier design d'expérience et un design d'interface fort et impactant, riche visuellement et original.`}
              </p>
              <p className="mb-0">&nbsp;</p>
              <p>Si vous cherchez un designer pour un projet similaire, nous serons un match !</p>
            </div>
          </div>

          {/* Carte 3 - Design de Contenu */}
          <div className="bg-[#fffaf7] border-4 border-[#eddbcf] rounded-[20px] p-8 sm:p-[42px] flex flex-col gap-6">
            <div className="flex gap-6 items-center">
              <IconStylo />
              <h3 className="font-['Amarante:Regular',sans-serif] text-[clamp(20px,2.5vw,30px)] text-[#b89781] tracking-[1.5px]">
                DESIGN DE CONTENU
              </h3>
            </div>
            <div className="font-['Garet:Book',sans-serif] text-[16px] text-black leading-[normal]">
              <p className="mb-0">{`Je propose également un service de création de contenu, pour toutes les marques qui n'ont pas le temps de gérer leur communication. `}</p>
              <p className="mb-0">&nbsp;</p>
              <p className="mb-0">{`En collaboration avec un.e photographe, je créé des visuels à publier sur vos différents canaux de communication. `}</p>
              <p className="mb-0">&nbsp;</p>
              <p>A la croisée entre community-management, design et ghost-writing, cette offre par abonnement vous permet de déléguer en toute tranquillité!</p>
            </div>
          </div>

          {/* Carte 4 - Design de Produit */}
          <div className="bg-[#fffaf7] border-4 border-[#eddbcf] rounded-[20px] p-8 sm:p-[42px] flex flex-col gap-6">
            <div className="flex gap-6 items-center">
              <IconEtoile />
              <h3 className="font-['Amarante:Regular',sans-serif] text-[clamp(20px,2.5vw,30px)] text-[#b89781] tracking-[1.5px]">
                DESIGN DE PRODUIT
              </h3>
            </div>
            <div className="font-['Garet:Book',sans-serif] text-[16px] text-black leading-[normal]">
              <p className="mb-0">Dans la veine de mon travail de branding, je suis souvent amené à faire de la création de produits.</p>
              <p className="mb-0">&nbsp;</p>
              <p className="mb-0">Que ce soit pour créer des brochures, des affiches ou des packagings produit, je donne vie à vos idées.</p>
              <p className="mb-0">Rien n'est plus satisfaisant que voir un design se matérialiser.</p>
              <p className="mb-0">&nbsp;</p>
              <p>Ce travail est souvent une continuation logique de la création de marque, pour aller un peu plus loin tout en respectant l'univers de la marque.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="bg-[#faefe8] py-12 sm:py-16">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 mb-12">
          <h2 className="font-['Amarante:Regular',sans-serif] text-[clamp(32px,4.5vw,52px)] text-black tracking-[2.6px] text-center">
            PORTFOLIO
          </h2>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 mb-12">
          <div className="aspect-[3/4] overflow-hidden">
            <img 
              alt="Suricarte project" 
              className="size-full object-cover hover:scale-105 transition-transform duration-300" 
              src={imgFichier9BoardSuricarte} 
            />
          </div>
          <div className="aspect-[3/4] overflow-hidden">
            <img 
              alt="Design project" 
              className="size-full object-cover hover:scale-105 transition-transform duration-300" 
              src={imgImage10} 
            />
          </div>
          <div className="aspect-[3/4] overflow-hidden">
            <img 
              alt="Yoki Instagram mockup" 
              className="size-full object-cover hover:scale-105 transition-transform duration-300" 
              src={imgFreeLayingIPhone16ProMockupAvecScreenshotInstaYoki23} 
            />
          </div>
          <div className="aspect-[3/4] overflow-hidden">
            <img 
              alt="Grissun album mockup" 
              className="size-full object-cover hover:scale-105 transition-transform duration-300" 
              src={imgMockupAlbumGrissunTest23} 
            />
          </div>
        </div>

        {/* View Portfolio Button */}
        <div className="flex justify-center">
          <button className="bg-[#fffaf7] border-3 border-[#eddbcf] rounded-[16px] px-6 py-3 hover:bg-[#eddbcf] transition-colors">
            <p className="font-['Amarante:Regular',sans-serif] text-[clamp(18px,2vw,24px)] text-[#b89781] tracking-[1.2px]">
              VOIR MON PORTFOLIO
            </p>
          </button>
        </div>
      </section>

      {/* A Propos Section */}
      <section className="py-16 sm:py-24 px-6 sm:px-12 lg:px-[70px] max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="relative max-w-[340px] mx-auto lg:mx-0">
            <div 
              className="w-full aspect-[427/549] mask-alpha mask-intersect mask-no-clip mask-no-repeat overflow-hidden"
              style={{ maskImage: `url('${imgSophieMargnes20241}')` }}
            >
              <img 
                alt="Sophie Margnes" 
                className="w-full h-full object-cover" 
                src={imgSophieMargnes20242} 
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <h2 className="font-['Amarante:Regular',sans-serif] text-[clamp(32px,4.5vw,52px)] text-black tracking-[2.6px] mb-8">
              A PROPOS DE MOI
            </h2>
            <p className="text-[18px] text-black leading-[normal]">
              Rien dans mon parcours n'était "tout tracé", mais c'est aussi cet aspect atypique qui fait ma force. J'ai sur me ré-inventer au fil de mes différents parcours jusqu'à arriver à trouver une discipline qui allie tout ce qui me tient à coeur: la création d'univers visuels cohérents, qui savent transmettre des émotions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 px-6 sm:px-12 lg:px-[70px] max-w-[1440px] mx-auto">
        <h2 className="font-['Amarante:Regular',sans-serif] text-[clamp(32px,4.5vw,60px)] text-black tracking-[3px] mb-8 leading-[1.2]">
          VOUS AVEZ UN PROJET ?<br />
          PRENONS CONTACT
        </h2>
        <div className="font-['Garet:Book',sans-serif] text-black leading-[normal] space-y-4">
          <p className="text-[18px] sm:text-[20px]">
            <span className="text-[18px]">{`PAR MAIL : `}</span>
            <a href="mailto:sophie@sulkastudio.com" className="text-[20px] hover:underline">
              SOPHIE@SULKASTUDIO.COM
            </a>
          </p>
          <p className="text-[18px]">
            EN PRENANT RENDEZ-VOUS DIRECTEMENT EN LIGNE (APPEL DÉCOUVERTE GRATUIT) :{' '}
            <a 
              href="https://calendly.com/sulkastudio/15min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LIEN CALENDLY
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#fffaf8] border-t border-black">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 h-[104px] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-['Garet:Book',sans-serif] text-[14px] sm:text-[16px] text-black text-center sm:text-left">
            © 2025 Sophie Margnes — Made with ♥ in Bordeaux
          </p>
          <div className="flex gap-6 sm:gap-8 items-center">
            <IconmonstrBehance />
            <IconmonstrLinkedin />
            <IconmonstrInstagram />
          </div>
        </div>
      </footer>
    </div>
  );
}
