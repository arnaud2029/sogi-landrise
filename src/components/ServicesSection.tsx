import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Ruler, 
  Route, 
  FileText, 
  Building, 
  Truck,
  Award,
  ArrowRight
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: MapPin,
      title: "Aménagement Foncier",
      description: "Lotissements clés en main avec toutes les commodités nécessaires",
      features: ["Étude de faisabilité", "Plan de masse", "Viabilisation"],
      color: "text-sogi-red"
    },
    {
      icon: Truck,
      title: "Déblai & Décapage",
      description: "Préparation professionnelle des terrains avec équipements modernes",
      features: ["Terrassement", "Nivellement", "Évacuation"],
      color: "text-sogi-orange"
    },
    {
      icon: Route,
      title: "Ouverture des Voies",
      description: "Création et aménagement des voies d'accès et routes internes",
      features: ["Tracé des voies", "Empierrement", "Drainage"],
      color: "text-sogi-green"
    },
    {
      icon: Ruler,
      title: "Bornage & Géomètre",
      description: "Délimitation précise des parcelles par géomètre expert",
      features: ["Levé topographique", "Implantation", "Bornage définitif"],
      color: "text-sogi-navy"
    },
    {
      icon: FileText,
      title: "Plan d'Urbanisme",
      description: "Élaboration des plans conformes aux normes urbaines",
      features: ["Plan de lotissement", "Dossier technique", "Validation administrative"],
      color: "text-sogi-gold"
    },
    {
      icon: Award,
      title: "Certificat Foncier",
      description: "Accompagnement pour l'obtention des documents officiels",
      features: ["Attestation d'attribution", "Certificat foncier", "Titre de propriété"],
      color: "text-sogi-red"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-sogi-navy mb-6">
            Nos Services
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto leading-relaxed">
            De l'aménagement foncier à l'obtention des documents officiels, 
            nous vous accompagnons à chaque étape de votre projet immobilier.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="card-premium card-hover group cursor-pointer border-0"
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-sogi-navy mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-foreground-muted">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className={`w-2 h-2 rounded-full ${service.color.replace('text-', 'bg-')} mr-3`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="ghost" 
                    className="w-full group-hover:bg-primary group-hover:text-white transition-all duration-300"
                  >
                    En savoir plus
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-navy rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            Prêt à démarrer votre projet ?
          </h3>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Contactez nos experts pour une consultation gratuite et un devis personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="cta-primary text-lg px-8 py-6"
            >
              Demander un devis
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-sogi-navy"
            >
              Prendre rendez-vous
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;