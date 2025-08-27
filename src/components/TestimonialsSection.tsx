import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Kouadio Jean-Baptiste",
      role: "Propriétaire à N'gbékro",
      location: "Yamoussoukro",
      rating: 5,
      text: "Excellent service ! Group SOGI a aménagé mon terrain de 800m² avec un professionnalisme remarquable. Le bornage, le décapage et l'ouverture des voies ont été réalisés dans les délais. Je recommande vivement !",
      image: "/api/placeholder/60/60",
      project: "Terrain résidentiel 800m²"
    },
    {
      name: "Adjoua Marie-Claire",
      role: "Investisseuse",
      location: "Abidjan",
      rating: 5,
      text: "J'ai acheté plusieurs parcelles via Group SOGI pour mon projet d'investissement. Leur accompagnement pour l'obtention du certificat foncier et leur transparence m'ont convaincue. Très satisfaite !",
      image: "/api/placeholder/60/60",
      project: "Investissement multi-parcelles"
    },
    {
      name: "Traoré Mamadou",
      role: "Chef d'entreprise",
      location: "Bouaké",
      rating: 5,
      text: "Pour mon projet industriel, Group SOGI a trouvé le terrain idéal dans la zone industrielle. Leur expertise technique et leur suivi personnalisé ont fait la différence. Service de qualité !",
      image: "/api/placeholder/60/60",
      project: "Terrain industriel 1500m²"
    },
    {
      name: "Bamba Fatou",
      role: "Résidente",
      location: "Yamoussoukro",
      rating: 5,
      text: "Grâce à Group SOGI, j'ai pu réaliser mon rêve d'avoir ma propre parcelle à Yamoussoukro. Facilités de paiement, suivi rigoureux, documents en règle. Rien à redire !",
      image: "/api/placeholder/60/60",
      project: "Terrain résidentiel 700m²"
    },
    {
      name: "Yao Emmanuel",
      role: "Promoteur immobilier",
      location: "Yamoussoukro",
      rating: 5,
      text: "Partenaire de confiance pour nos projets de promotion immobilière. Leur maîtrise des procédures administratives et leur réseau nous font gagner un temps précieux. Très professionnel !",
      image: "/api/placeholder/60/60",
      project: "Projet de lotissement 15 parcelles"
    },
    {
      name: "Diabaté Aminata",
      role: "Fonctionnaire",
      location: "Yamoussoukro",
      rating: 5,
      text: "Service client exceptionnel ! L'équipe de Group SOGI m'a accompagnée à chaque étape, des visites terrain jusqu'à la remise des documents. Très recommandé pour la qualité du service.",
      image: "/api/placeholder/60/60",
      project: "Terrain familial 800m²"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-sogi-navy mb-6">
            Témoignages Clients
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto leading-relaxed">
            Découvrez les expériences de nos clients satisfaits qui ont fait confiance à GROUP SOGI 
            pour leurs projets fonciers et immobiliers.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="card-premium card-hover border-0 overflow-hidden"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-4">
                  <Quote className="w-8 h-8 text-sogi-red/20" />
                  <div className="flex space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-foreground-muted mb-6 leading-relaxed text-sm">
                  "{testimonial.text}"
                </p>

                {/* Project Info */}
                <div className="bg-sogi-navy/5 rounded-lg p-3 mb-4">
                  <p className="text-xs font-medium text-sogi-navy">
                    Projet: {testimonial.project}
                  </p>
                </div>

                {/* Client Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-sogi-navy to-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sogi-navy">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-foreground-muted">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-foreground-muted">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-navy rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Rejoignez nos clients satisfaits !
          </h3>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Plus de 1000 clients nous font confiance pour leurs projets fonciers. 
            Découvrez pourquoi GROUP SOGI est le leader de l'aménagement foncier à Yamoussoukro.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-3xl font-bold text-sogi-gold mb-2">95%</div>
              <div className="text-white/80 text-sm">Clients satisfaits</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-sogi-gold mb-2">4.9/5</div>
              <div className="text-white/80 text-sm">Note moyenne</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-sogi-gold mb-2">15+</div>
              <div className="text-white/80 text-sm">Années d'expérience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-sogi-gold mb-2">100%</div>
              <div className="text-white/80 text-sm">Projets livrés</div>
            </div>
          </div>

          <Button className="cta-primary text-lg px-8 py-4">
            Démarrer votre projet
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;