import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Linkedin,
  ExternalLink
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Accueil", href: "#accueil" },
    { name: "À propos", href: "#apropos" },
    { name: "Services", href: "#services" },
    { name: "Offres Terrains", href: "#offres" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Aménagement foncier",
    "Décapage & Bornage", 
    "Plan d'urbanisme",
    "Certificat foncier",
    "Ouverture des voies",
    "BTP & Infrastructure"
  ];

  return (
    <footer className="bg-sogi-navy text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-sogi-red rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">GS</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">GROUP SOGI</h3>
                <p className="text-white/70 text-sm">Aménagement & BTP</p>
              </div>
            </div>
            
            <p className="text-white/80 mb-6 leading-relaxed">
              Leader en aménagement foncier à Yamoussoukro. Votre terrain, votre héritage... 
              Investissez avec Group SOGI pour un avenir sécurisé.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-white/70 hover:text-white hover:bg-white/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white/70 hover:text-white hover:bg-white/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white/70 hover:text-white hover:bg-white/10">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Liens Rapides</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Nos Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-white/70 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-sogi-red mt-1 flex-shrink-0" />
                <div className="text-white/70 text-sm">
                  <p>Assabou, Yamoussoukro</p>
                  <p>Derrière la boulangerie épi d'or</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-sogi-red flex-shrink-0" />
                <a 
                  href="tel:+22567575656" 
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  +225 67 57 56 56
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-sogi-red flex-shrink-0" />
                <a 
                  href="mailto:groupsogi15@gmail.com" 
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  groupsogi15@gmail.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-sogi-red flex-shrink-0" />
                <div className="text-white/70 text-sm">
                  <p>Lun - Sam: 8h00 - 18h00</p>
                  <p className="text-green-400 font-medium">Actuellement ouvert</p>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <h5 className="text-sm font-semibold text-white mb-3">Newsletter</h5>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Votre email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-sogi-red"
                />
                <Button className="cta-primary px-4">
                  OK
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/70 text-sm text-center md:text-left">
              <p>&copy; 2024 Group SOGI. Tous droits réservés.</p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm">
              <a 
                href="#" 
                className="text-white/70 hover:text-white transition-colors"
              >
                Mentions légales
              </a>
              <a 
                href="#" 
                className="text-white/70 hover:text-white transition-colors"
              >
                Politique de confidentialité
              </a>
              <a 
                href="https://construction.gouv.ci" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors flex items-center space-x-1"
              >
                <span>Ministère de la Construction - Côte d'Ivoire</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;