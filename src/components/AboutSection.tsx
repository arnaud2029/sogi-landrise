import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Award, 
  MapPin, 
  TrendingUp,
  CheckCircle,
  Target,
  Heart,
  Shield
} from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Shield,
      title: "Fiabilité",
      description: "Projets livrés dans les délais avec la qualité promise",
      color: "text-sogi-navy"
    },
    {
      icon: Heart,
      title: "Transparence",
      description: "Communication claire et honnête à chaque étape",
      color: "text-sogi-red"
    },
    {
      icon: Award,
      title: "Qualité",
      description: "Standards élevés et conformité aux normes",
      color: "text-sogi-gold"
    },
    {
      icon: Target,
      title: "Respect des délais",
      description: "Engagements tenus et projets livrés à temps",
      color: "text-sogi-green"
    }
  ];

  const achievements = [
    { icon: Users, number: "1000+", label: "Clients satisfaits", color: "text-sogi-navy" },
    { icon: MapPin, number: "25+", label: "Projets réalisés", color: "text-sogi-red" },
    { icon: TrendingUp, number: "100Ha", label: "Terrains aménagés", color: "text-sogi-orange" },
    { icon: Award, number: "15+", label: "Années d'expérience", color: "text-sogi-green" }
  ];

  return (
    <section id="apropos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-sogi-navy mb-6">
            Meilleure Agence Immobilière à Yamoussoukro
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto leading-relaxed">
            Leader en aménagement foncier et immobilier Yamoussoukro Côte d'Ivoire, nous transformons 
            vos projets d'achat maison, location appartement et investissement immobilier en réalité 
            avec expertise et professionnalisme.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div>
            <h3 className="text-3xl font-bold text-sogi-navy mb-6">
              Notre Mission
            </h3>
            <p className="text-lg text-foreground-muted mb-6 leading-relaxed">
              Chez GROUP SOGI, nous croyons que chaque terrain représente bien plus qu'un simple investissement : 
              c'est votre héritage, votre avenir, votre sécurité. Spécialisée dans l'immobilier Yamoussoukro, 
              notre agence immobilière accompagne particuliers et investisseurs dans la vente maison, 
              location appartement et tous projets de biens immobiliers à Yamoussoukro.
            </p>
            
            <p className="text-lg text-foreground-muted mb-8 leading-relaxed">
              De l'aménagement initial jusqu'à l'obtention des documents officiels, nous assurons un service 
              complet et personnalisé. Notre expertise couvre le décapage, le bornage, l'ouverture des voies, 
              l'élaboration des plans d'urbanisme et l'assistance pour obtenir le certificat foncier. 
              Investir dans l'immobilier à Yamoussoukro n'a jamais été aussi simple avec Group SOGI.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Aménagement foncier clés en main",
                "Accompagnement personnalisé",
                "Respect des normes et réglementations",
                "Équipe d'experts qualifiés",
                "Service après-vente de qualité"
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-foreground-muted">{item}</span>
                </li>
              ))}
            </ul>

            <Button 
              className="cta-primary text-lg px-8 py-4"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Découvrir nos projets
            </Button>
          </div>

          {/* Right Content - Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="card-premium card-hover border-0 text-center p-6">
                  <CardContent className="p-0">
                    <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center mb-4`}>
                      <IconComponent className={`w-8 h-8 ${value.color}`} />
                    </div>
                    <h4 className="text-xl font-bold text-sogi-navy mb-3">
                      {value.title}
                    </h4>
                    <p className="text-foreground-muted text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Zone d'intervention */}
        <div className="bg-gradient-to-br from-sogi-navy to-blue-900 rounded-2xl p-12 text-white mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Zone d'Intervention
            </h3>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Situés à Assabou, Yamoussoukro, nous intervenons dans toute la région 
              pour vos projets d'aménagement foncier et de construction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <MapPin className="w-12 h-12 text-sogi-gold mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Yamoussoukro Centre</h4>
              <p className="text-white/70 text-sm">Capitale politique, projets résidentiels et commerciaux</p>
            </div>
            <div>
              <MapPin className="w-12 h-12 text-sogi-orange mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Zone Industrielle</h4>
              <p className="text-white/70 text-sm">Terrains industriels et logistiques</p>
            </div>
            <div>
              <MapPin className="w-12 h-12 text-sogi-red mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Périphérie</h4>
              <p className="text-white/70 text-sm">Lotissements résidentiels accessibles</p>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card key={index} className="card-premium text-center p-6 border-0">
                <CardContent className="p-0">
                  <IconComponent className={`w-12 h-12 ${achievement.color} mx-auto mb-4`} />
                  <div className="text-3xl font-bold text-sogi-navy mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-foreground-muted text-sm">
                    {achievement.label}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;