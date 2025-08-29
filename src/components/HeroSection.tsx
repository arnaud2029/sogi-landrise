import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, CheckCircle } from "lucide-react";
import heroImage from "../assets/hero-construction.jpg";

const HeroSection = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with gradient overlay */}
      <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Agence immobilière Yamoussoukro - Vente terrain et immobilier Côte d'Ivoire GROUP SOGI" 
            className="w-full h-full object-cover"
          />
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20zm0-20c11.046 0 20 8.954 20 20s-8.954 20-20 20-20-8.954-20-20 8.954-20 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <MapPin className="w-5 h-5 text-sogi-gold" />
            <span className="text-white font-medium">Yamoussoukro, Côte d'Ivoire</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            GROUP <span className="text-shimmer">SOGI</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-white/90 mb-8">
            Agence Immobilière à Yamoussoukro - Côte d'Ivoire
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Spécialiste en vente de terrains et immobilier Yamoussoukro. Aménagement foncier, 
            bornage, plan d'urbanisme, certificat foncier. Votre terrain, votre héritage… 
            Investissez dans l'immobilier à Yamoussoukro avec Group SOGI.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            {[
              "Décapage & Bornage",
              "Plan d'urbanisme",
              "Certificat foncier"
            ].map((feature, index) => (
              <div key={index} className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                <CheckCircle className="w-5 h-5 text-sogi-gold" />
                <span className="text-white font-medium">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="cta-primary text-lg px-8 py-6 font-semibold group"
              onClick={() => document.getElementById('offres')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Découvrir nos offres
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 font-semibold bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-sogi-navy transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contactez-nous
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/20">
            {[
              { number: "500+", label: "Parcelles vendues" },
              { number: "50Ha", label: "Terrains aménagés" },
              { number: "15+", label: "Années d'expérience" },
              { number: "95%", label: "Clients satisfaits" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-sogi-gold mb-2">{stat.number}</div>
                <div className="text-white/80 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;