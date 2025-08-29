import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MessageCircle } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Accueil", href: "#accueil" },
    { name: "À propos", href: "#apropos" },
    { name: "Services", href: "#services" },
    { name: "Projets", href: "#projets" },
    { name: "Offres Terrains", href: "#offres" },
    { name: "Témoignages", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-elegant transition-smooth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/6c8870ee-4b18-4a2c-8860-0e1ed9c343c0.png" 
                alt="Group SOGI Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h1 className="text-xl font-bold text-sogi-navy">GROUP SOGI</h1>
                <p className="text-xs text-foreground-muted">Aménagement & BTP</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-sogi-navy font-medium transition-smooth"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="border-sogi-navy text-sogi-navy hover:bg-sogi-navy hover:text-white"
              onClick={() => window.open("tel:+22567575656")}
            >
              <Phone className="w-4 h-4 mr-2" />
              Appeler
            </Button>
            <Button 
              className="cta-primary"
              onClick={() => window.open("https://api.whatsapp.com/send?phone=22567575656&text=" + encodeURIComponent("Bonjour Group SOGI, je viens de votre site web"), "_blank")}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Contact
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-foreground hover:text-sogi-navy hover:bg-gray-50 rounded-md transition-smooth"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-2 px-3 pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-sogi-navy text-sogi-navy hover:bg-sogi-navy hover:text-white"
                  onClick={() => window.open("tel:+22567575656")}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  +225 67 57 56 56
                </Button>
                <Button 
                  className="cta-primary"
                  onClick={() => window.open("https://api.whatsapp.com/send?phone=22567575656&text=" + encodeURIComponent("Bonjour Group SOGI, je viens de votre site web"), "_blank")}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contactez-nous
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;