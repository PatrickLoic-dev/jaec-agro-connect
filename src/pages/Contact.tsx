import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Facebook, MessageCircle } from "lucide-react";

const Contact = () => {
  const handleWhatsAppClick = () => {
    const message = "Bonjour JAEC GROUP, je souhaiterais obtenir des informations sur vos produits.";
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "237655004390";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+237655004390";
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:kamga0212@gmail.com";
  };

  const handleFacebookClick = () => {
    // Since we don't have the exact Facebook URL, we'll search for the page
    window.open("https://www.facebook.com/search/top?q=JAEC%20GROUP", '_blank');
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Contact & Infos Utiles</h1>
          <p className="text-xl text-muted-foreground">
            Nous sommes à votre disposition pour tous vos besoins agricoles et d'élevage
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Phone */}
          <Card className="hover:shadow-nature transition-all duration-300 bg-card-gradient cursor-pointer" onClick={handlePhoneClick}>
            <CardContent className="p-6 text-center">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2">Téléphone</h3>
              <p className="text-muted-foreground mb-4">Appelez-nous directement</p>
              <p className="text-primary font-semibold text-lg">+237 655 00 43 90</p>
            </CardContent>
          </Card>

          {/* Email */}
          <Card className="hover:shadow-nature transition-all duration-300 bg-card-gradient cursor-pointer" onClick={handleEmailClick}>
            <CardContent className="p-6 text-center">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2">Email</h3>
              <p className="text-muted-foreground mb-4">Écrivez-nous</p>
              <p className="text-primary font-semibold">kamga0212@gmail.com</p>
            </CardContent>
          </Card>

          {/* WhatsApp */}
          <Card className="hover:shadow-nature transition-all duration-300 bg-card-gradient cursor-pointer" onClick={handleWhatsAppClick}>
            <CardContent className="p-6 text-center">
              <div className="bg-accent/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MessageCircle className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2">WhatsApp</h3>
              <p className="text-muted-foreground mb-4">Chat instantané</p>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent">
                Démarrer une conversation
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Business Hours & Location */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Hours */}
          <Card className="bg-card-gradient shadow-nature">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-card-foreground mb-4">🕒 Horaires d'ouverture</h2>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Lundi - Samedi</span>
                      <span className="font-medium text-card-foreground">8h - 18h</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Dimanche</span>
                      <span className="font-medium text-destructive">Fermé</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Location */}
          <Card className="bg-card-gradient shadow-nature">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-card-foreground mb-4">📍 Notre Adresse</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Yassa, Douala</strong><br/>
                    Axe lourd - à côté du supermarché SPAR
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Emplacement stratégique pour un accès facile
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Social Media */}
        <div className="text-center">
          <Card className="bg-primary text-primary-foreground shadow-nature inline-block">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Suivez-nous sur les réseaux</h2>
              <Button 
                onClick={handleFacebookClick}
                variant="outline" 
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Facebook className="w-5 h-5 mr-2" />
                Page Facebook : JAEC GROUP
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Service Area */}
        <div className="mt-12">
          <Card className="bg-card-gradient shadow-nature">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-card-foreground mb-4">Zone de Service</h2>
              <p className="text-muted-foreground mb-4">
                Nos services d'installation et de support technique sont disponibles dans tout le Cameroun 
                grâce à notre réseau de techniciens qualifiés.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">Douala</span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">Yaoundé</span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">Bafoussam</span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">Bamenda</span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">Et plus encore...</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;