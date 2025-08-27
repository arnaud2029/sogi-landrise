import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  MessageCircle, 
  Phone, 
  X, 
  Bot,
  Send,
  Minimize2
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const FloatingActions = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    {
      type: "bot",
      message: "Bonjour ! Bienvenue chez GROUP SOGI 👋\n\nComment puis-je vous aider aujourd'hui ?\n\n• 🏠 Réserver un terrain\n• 📋 Informations sur nos offres\n• 📅 Prendre rendez-vous\n• 🤝 Parler à un conseiller"
    }
  ]);

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Bonjour Group SOGI - Je souhaite des informations sur vos terrains.");
    window.open(`https://api.whatsapp.com/send?phone=2250767575656&text=${message}`, '_blank');
  };

  const handleCall = () => {
    window.open("tel:+2250767575656", '_self');
  };

  const sendMessage = () => {
    if (!chatMessage.trim()) return;

    const newMessage = { type: "user", message: chatMessage };
    setChatHistory(prev => [...prev, newMessage]);

    // Simulate bot response
    setTimeout(() => {
      let botResponse = "";
      const msg = chatMessage.toLowerCase();
      
      if (msg.includes("terrain") || msg.includes("lot") || msg.includes("parcelle")) {
        botResponse = "🏠 Nous avons plusieurs terrains disponibles :\n\n• N'gbékro : 2,100,000 FCFA (700-800m²)\n• Zone industrielle : 3,500,000 FCFA\n• Sahabo : 2,000,000 FCFA (600-800m²)\n• Nanan Plateau : 7,000,000 FCFA (1500m²+)\n\nSouhaitez-vous plus d'informations sur un terrain spécifique ?";
      } else if (msg.includes("prix") || msg.includes("coût")) {
        botResponse = "💰 Nos prix varient selon la localisation :\n\n• Terrains résidentiels : 2M - 3,5M FCFA\n• Terrains industriels : 3,5M - 7M FCFA\n• Facilités de paiement disponibles\n• Possibilité de paiement échelonné\n\nContactez-nous pour un devis personnalisé !";
      } else if (msg.includes("rdv") || msg.includes("rendez-vous") || msg.includes("visite")) {
        botResponse = "📅 Pour prendre rendez-vous :\n\n1. Via WhatsApp : +225 07 67 57 56 56\n2. Par téléphone : Appelez directement\n3. À notre bureau : Assabou, Yamoussoukro\n\nNos heures : Lun-Sam 8h-18h\nSouhaitez-vous que je vous redirige vers WhatsApp ?";
      } else if (msg.includes("service") || msg.includes("commodité")) {
        botResponse = "🛠️ Nos services incluent :\n\n✅ Aménagement foncier complet\n✅ Décapage & bornage professionnel\n✅ Ouverture des voies d'accès\n✅ Plan d'urbanisme conforme\n✅ Assistance certificat foncier\n✅ BTP & infrastructure\n\nTous nos lotissements sont livrés clés en main !";
      } else if (msg.includes("contact") || msg.includes("conseiller") || msg.includes("agent")) {
        botResponse = "🤝 Contactez directement nos conseillers :\n\n📞 Téléphone : +225 07 67 57 56 56\n📧 Email : groupsogi15@gmail.com\n📍 Bureau : Assabou, Yamoussoukro\n💬 WhatsApp : Réponse rapide garantie\n\nJe peux vous rediriger vers WhatsApp maintenant ?";
      } else {
        botResponse = "Merci pour votre message ! 😊\n\nPour une réponse plus détaillée, je vous recommande de :\n\n• 📞 Appeler : +225 07 67 57 56 56\n• 💬 WhatsApp : Contact direct\n• 📧 Email : groupsogi15@gmail.com\n\nNotre équipe vous répondra rapidement !";
      }

      setChatHistory(prev => [...prev, { type: "bot", message: botResponse }]);
    }, 1000);

    setChatMessage("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* WhatsApp Button */}
      <Button
        onClick={handleWhatsApp}
        className="float-whatsapp group"
        aria-label="Contacter via WhatsApp"
      >
        <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </Button>

      {/* Call Button */}
      <Button
        onClick={handleCall}
        className="fixed bottom-6 right-24 z-50 w-14 h-14 bg-sogi-red text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Appeler"
      >
        <Phone className="w-6 h-6" />
      </Button>

      {/* Chatbot Toggle */}
      <Button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="float-chatbot group"
        aria-label="Ouvrir le chat"
      >
        {isChatOpen ? (
          <Minimize2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
        ) : (
          <Bot className="w-5 h-5 group-hover:scale-110 transition-transform" />
        )}
      </Button>

      {/* Chat Window */}
      {isChatOpen && (
        <Card className="fixed bottom-36 right-6 z-50 w-96 max-w-[calc(100vw-2rem)] h-96 shadow-2xl border-0 bg-white">
          <CardHeader className="bg-gradient-navy text-white rounded-t-lg p-4">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg font-semibold flex items-center">
                <Bot className="w-5 h-5 mr-2" />
                Assistant GROUP SOGI
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsChatOpen(false)}
                className="text-white hover:bg-white/20"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="text-sm text-white/80">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>En ligne • Réponse rapide</span>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-0 flex flex-col h-80">
            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {chatHistory.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      msg.type === 'user'
                        ? 'bg-sogi-navy text-white'
                        : 'bg-white border shadow-sm'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{msg.message}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t bg-white">
              <div className="flex space-x-2">
                <Input
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Tapez votre message..."
                  className="flex-1 text-sm"
                />
                <Button
                  onClick={sendMessage}
                  disabled={!chatMessage.trim()}
                  className="px-3 bg-sogi-navy hover:bg-sogi-navy/90"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <div className="flex justify-center mt-2">
                <Button
                  onClick={handleWhatsApp}
                  variant="ghost"
                  size="sm"
                  className="text-xs text-green-600 hover:text-green-700"
                >
                  💬 Continuer sur WhatsApp
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default FloatingActions;