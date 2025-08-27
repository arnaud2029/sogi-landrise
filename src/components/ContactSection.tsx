import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  Calendar,
  MessageCircle
} from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      details: ["Assabou, Yamoussoukro", "Derrière la boulangerie épi d'or"],
      color: "text-sogi-red"
    },
    {
      icon: Phone,
      title: "Téléphone",
      details: ["+225 07 67 57 56 56", "+225 27 33 77 32 18"],
      color: "text-sogi-orange"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["groupsogi15@gmail.com", "contact@sogigroup.com"],
      color: "text-sogi-green"
    },
    {
      icon: Clock,
      title: "Horaires",
      details: ["Lun - Sam: 8h00 - 18h00", "Actuellement ouvert"],
      color: "text-sogi-navy"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-sogi-navy mb-6">
            Contactez-nous
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto leading-relaxed">
            Notre équipe d'experts est à votre disposition pour vous accompagner dans votre projet. 
            Contactez-nous pour une consultation gratuite.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-sogi-navy mb-8">
              Informations de Contact
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index} className="card-premium border-0">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center flex-shrink-0`}>
                          <IconComponent className={`w-6 h-6 ${info.color}`} />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-sogi-navy mb-2">
                            {info.title}
                          </h4>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className={`text-foreground-muted ${idx === 1 && info.title === "Horaires" && detail.includes("ouvert") ? "text-green-600 font-medium" : ""}`}>
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <Button 
                className="w-full cta-primary"
                onClick={() => window.open("tel:+2250767575656")}
              >
                <Phone className="w-5 h-5 mr-2" />
                Appeler maintenant
              </Button>
              <Button 
                className="w-full bg-green-500 hover:bg-green-600 text-white"
                onClick={() => window.open("https://api.whatsapp.com/send?phone=2250767575656&text=Bonjour%20Group%20SOGI%20-%20Je%20souhaite%20des%20informations%20sur%20vos%20terrains.", "_blank")}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="card-premium border-0 shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-sogi-navy">
                  Demander des informations
                </CardTitle>
                <p className="text-foreground-muted">
                  Remplissez ce formulaire et nous vous recontacterons rapidement pour discuter de votre projet.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-sogi-navy">
                        Nom complet *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-2"
                        placeholder="Votre nom complet"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-sogi-navy">
                        Téléphone *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="mt-2"
                        placeholder="+225 XX XX XX XX XX"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-sogi-navy">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-2"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-sm font-medium text-sogi-navy">
                      Sujet de votre demande *
                    </Label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleSelectChange}
                      required
                      className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sogi-navy focus:border-transparent"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="terrain-residentiel">Terrain résidentiel</option>
                      <option value="terrain-industriel">Terrain industriel</option>
                      <option value="amenagement">Aménagement foncier</option>
                      <option value="btp">Projet BTP</option>
                      <option value="consultation">Consultation gratuite</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-sogi-navy">
                      Votre message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                      rows={6}
                      placeholder="Décrivez votre projet, vos besoins et vos questions..."
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button type="submit" className="cta-primary flex-1">
                      <Send className="w-5 h-5 mr-2" />
                      Envoyer le message
                    </Button>
                    <Button type="button" variant="outline" className="flex-1">
                      <Calendar className="w-5 h-5 mr-2" />
                      Prendre rendez-vous
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="card-premium border-0 overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-navy p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Notre Localisation</h3>
                <p className="text-white/80 max-w-2xl mx-auto">
                  Rendez-nous visite à notre bureau principal situé à Assabou, Yamoussoukro, 
                  derrière la boulangerie épi d'or. Parking disponible sur place.
                </p>
              </div>
              
              {/* Map Placeholder */}
              <div className="h-96 bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-sogi-navy mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-sogi-navy mb-2">GROUP SOGI</h4>
                  <p className="text-foreground-muted">Assabou, Yamoussoukro</p>
                  <p className="text-sm text-foreground-muted">Derrière la boulangerie épi d'or</p>
                  <div className="mt-4">
                    <Button 
                      variant="outline"
                      onClick={() => window.open("https://maps.google.com/?q=Assabou+Yamoussoukro+Côte+d'Ivoire", "_blank")}
                    >
                      Voir sur Google Maps
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;