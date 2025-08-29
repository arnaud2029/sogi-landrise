import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Ruler, 
  Euro, 
  CheckCircle, 
  Phone,
  MessageCircle,
  Eye,
  Calendar
} from "lucide-react";

const PropertyListings = () => {
  const properties = [
    {
      id: 1,
      title: "Grande Promo à N'gbékro",
      location: "N'gbékro, Yamoussoukro",
      price: "2,100,000",
      surface: ["700m²", "800m²"],
      status: "Disponible",
      features: [
        "Décapage",
        "Ouverture des voies", 
        "Bornage",
        "Plan d'urbanisme",
        "Attestation d'attribution",
        "Certificat foncier"
      ],
      paymentPlan: "ACD Global en cours",
      image: "/api/placeholder/400/300",
      discount: "Promo spéciale",
      color: "bg-gradient-to-br from-sogi-red to-red-600"
    },
    {
      id: 2,
      title: "Zone Industrielle Yamoussoukro",
      location: "Loukoukro, Yamoussoukro",
      price: "3,500,000",
      surface: ["1000m²+"],
      status: "Disponible",
      features: [
        "Zone industrielle",
        "Accès autoroute",
        "Électricité industrielle",
        "Raccordement eau",
        "Sécurité 24h/24"
      ],
      paymentPlan: "Facilités de paiement",
      image: "/api/placeholder/400/300",
      highlight: "Investissement idéal",
      color: "bg-gradient-to-br from-sogi-orange to-orange-600"
    },
    {
      id: 3,
      title: "Sahabo Terrain Premium",
      location: "Sahabo, Yamoussoukro",
      price: "2,000,000",
      surface: ["600m²", "800m²"],
      status: "Disponible",
      features: [
        "Titre foncier",
        "Décapage, bornage", 
        "Pose poteau",
        "Accès facilité"
      ],
      paymentPlan: "Payable sur 15 mois",
      image: "/api/placeholder/400/300",
      highlight: "Bien situé",
      color: "bg-gradient-to-br from-sogi-green to-green-600"
    },
    {
      id: 4,
      title: "Terrain Nanan Plateau",
      location: "Nanan Plateau, Yamoussoukro",
      price: "7,000,000",
      surface: ["1500m²+"],
      status: "Réservé",
      features: [
        "Approbation en cours",
        "Décapage, bornage",
        "Pose poteau", 
        "Situé à 300m de l'autoroute"
      ],
      paymentPlan: "Facilités disponibles",
      image: "/api/placeholder/400/300",
      highlight: "Héritage familial",
      color: "bg-gradient-to-br from-sogi-gold to-yellow-600"
    }
  ];

  return (
    <section id="offres" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-sogi-navy mb-6">
            Terrains à Vendre Yamoussoukro
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto leading-relaxed">
            Découvrez nos terrains constructibles et biens immobiliers à Yamoussoukro Côte d'Ivoire 
            avec toutes commodités. Investissement immobilier rentable avec prix attractifs et 
            facilités de paiement disponibles.
          </p>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {properties.map((property) => (
            <Card 
              key={property.id} 
              className="card-premium card-hover overflow-hidden border-0 shadow-elegant"
            >
              {/* Property Image & Badge */}
              <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200">
                <div className={`absolute inset-0 ${property.color} opacity-10`}></div>
                <div className="absolute top-4 left-4">
                  <Badge 
                    className={`${property.color} text-white border-0 font-semibold`}
                  >
                    {property.discount || property.highlight}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge 
                    variant={property.status === "Disponible" ? "default" : "secondary"}
                    className={property.status === "Disponible" 
                      ? "bg-green-500 text-white border-0" 
                      : "bg-gray-500 text-white border-0"
                    }
                  >
                    {property.status}
                  </Badge>
                </div>
                
                {/* Property Preview */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin className="w-12 h-12 mx-auto mb-2 opacity-80" />
                    <p className="text-sm font-medium opacity-90">{property.location}</p>
                  </div>
                </div>
              </div>

              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-bold text-sogi-navy">
                    {property.title}
                  </CardTitle>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-sogi-red">
                      {property.price} FCFA
                    </div>
                    <div className="text-sm text-foreground-muted">
                      {property.paymentPlan}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center text-foreground-muted mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">{property.location}</span>
                </div>

                {/* Surface Options */}
                <div className="flex items-center gap-2 mb-4">
                  <Ruler className="w-4 h-4 text-sogi-orange" />
                  <span className="text-sm font-medium">Surfaces disponibles:</span>
                  {property.surface.map((size, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {size}
                    </Badge>
                  ))}
                </div>
              </CardHeader>

              <CardContent>
                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-sogi-navy mb-3">Commodités:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {property.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <Button 
                    className="cta-primary flex-1"
                    disabled={property.status === "Réservé"}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Réserver
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Eye className="w-4 h-4 mr-2" />
                    Visiter
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1 border-green-500 text-green-600 hover:bg-green-50"
                    onClick={() => window.open("https://api.whatsapp.com/send?phone=22567575656&text=" + encodeURIComponent("Bonjour Group SOGI, je viens de votre site web"), "_blank")}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-gradient-to-br from-sogi-navy to-blue-900 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Intéressé par un de nos terrains ?
          </h3>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Contactez-nous pour plus d'informations, une visite sur site ou pour discuter des modalités de paiement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="cta-primary text-lg px-8 py-6"
              onClick={() => window.open("tel:+22567575656")}
            >
              <Phone className="w-5 h-5 mr-2" />
              +225 67 57 56 56
            </Button>
            <Button 
              size="lg" 
              className="cta-secondary text-lg px-8 py-6"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Prendre rendez-vous
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyListings;