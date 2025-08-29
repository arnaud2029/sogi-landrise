import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle, Phone, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FAQSection = () => {
  const faqs = [
    {
      question: "Quels types de terrains à vendre proposez-vous à Yamoussoukro ?",
      answer: "Nous proposons des parcelles résidentielles (700 m² / 800 m²) en lotissements équipés avec toutes commodités, prêtes à construire à Yamoussoukro. Nous avons également des terrains industriels et commerciaux dans la zone industrielle de Yamoussoukro pour investissement immobilier rentable.",
      category: "Offres"
    },
    {
      question: "Comment acheter une maison ou terrain à Yamoussoukro avec Group Sogi ?",
      answer: "Vous recevrez une attestation d'attribution et nous vous orientons vers l'obtention du certificat foncier. Nous fournissons également une assistance complète pour le bornage et l'élaboration du plan d'urbanisme pour votre achat immobilier à Yamoussoukro.",
      category: "Documents"
    },
    {
      question: "Comment réserver un lot ?",
      answer: "Vous pouvez réserver via le formulaire de réservation sur le site, par WhatsApp au +225 07 67 57 56 56 ou en venant directement à notre agence à Assabou, Yamoussoukro (derrière la boulangerie épi d'or).",
      category: "Réservation"
    },
    {
      question: "Quels sont les délais de viabilisation ?",
      answer: "Les délais dépendent du projet ; généralement l'ouverture des voies et le décapage se font en quelques semaines. La remise des documents suit la procédure administrative standard qui peut prendre 2 à 6 mois selon les cas.",
      category: "Délais"
    },
    {
      question: "Proposez-vous des facilités de paiement ?",
      answer: "Oui, nous proposons plusieurs options de financement et plans de paiement échelonnés. Contactez notre service commercial pour discuter des modalités adaptées à votre budget et vos besoins.",
      category: "Financement"
    },
    {
      question: "Puis-je visiter le terrain avant d'acheter ?",
      answer: "Bien sûr ! Nous encourageons même nos clients à visiter les terrains. Prenez rendez-vous via le bouton WhatsApp, le formulaire de contact, ou appelez-nous directement. Nos agents vous accompagneront sur site.",
      category: "Visite"
    },
    {
      question: "Quelles sont les commodités disponibles ?",
      answer: "Nos lotissements incluent : décapage professionnel, bornage par géomètre expert, ouverture des voies d'accès, plan d'urbanisme conforme, et assistance pour l'obtention des documents officiels. Certains projets incluent aussi l'électrification.",
      category: "Commodités"
    },
    {
      question: "Où êtes-vous situés et comment vous contacter ?",
      answer: "Nous sommes situés à Assabou, Yamoussoukro, derrière la boulangerie épi d'or. Vous pouvez nous contacter au +225 07 67 57 56 56, par email à groupsogi15@gmail.com, ou via WhatsApp pour une réponse rapide.",
      category: "Contact"
    }
  ];

  const categories = ["Tous", "Offres", "Documents", "Réservation", "Délais", "Financement", "Visite", "Commodités", "Contact"];

  return (
    <section id="faq" className="py-20 bg-background-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-sogi-navy/10 rounded-full px-6 py-3 mb-6">
            <HelpCircle className="w-5 h-5 text-sogi-navy" />
            <span className="text-sogi-navy font-medium">Foire Aux Questions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-sogi-navy mb-6">
            Questions Fréquentes - Immobilier Yamoussoukro
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto leading-relaxed">
            Tout savoir sur l'achat terrain et investissement immobilier à Yamoussoukro. 
            Trouvez rapidement les réponses à vos questions sur nos terrains, services et procédures.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mb-12">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="card-premium border-0 shadow-card rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-5 text-left hover:no-underline hover:bg-gray-50 transition-colors group">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-sogi-navy/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-sogi-navy group-hover:text-white transition-colors">
                      <span className="text-sm font-bold">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-sogi-red font-medium mb-1 uppercase tracking-wide">
                        {faq.category}
                      </div>
                      <h3 className="text-lg font-semibold text-sogi-navy group-hover:text-sogi-navy transition-colors">
                        {faq.question}
                      </h3>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="ml-12">
                    <p className="text-foreground-muted leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-gradient-navy rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            Une question sur nos biens immobiliers à Yamoussoukro ?
          </h3>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Notre équipe d'experts en immobilier Yamoussoukro Côte d'Ivoire est là pour vous accompagner 
            dans votre projet d'achat maison, vente terrain ou investissement immobilier rentable. 
            Contactez-nous directement pour une réponse personnalisée.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="cta-primary text-lg px-8 py-6"
            >
              <Phone className="w-5 h-5 mr-2" />
              Appeler maintenant
            </Button>
            <Button 
              size="lg" 
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg font-semibold shadow-cta hover:shadow-hover transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;