import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Leaf, Users, Award, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Cart } from "@/components/Cart";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto text-center">
          <div className="flex justify-end mb-4">
            <Cart />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            JAEC GROUP
          </h1>
          <p className="text-xl md:text-2xl font-medium mb-4">
            Cultiver l'avenir, élever la qualité
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Bienvenue chez JAEC GROUP, votre partenaire de confiance en produits agricoles et accessoires d'élevage à Yassa. 
            Nous vous accompagnons avec des solutions modernes, durables et testées sur le terrain.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent">
              <Link to="/catalogue">
                Découvrir nos produits
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Nos Valeurs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-nature transition-all duration-300 bg-card-gradient">
              <CardContent className="p-8">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">Professionnalisme</h3>
                <p className="text-muted-foreground">
                  Des produits testés, approuvés et conformes aux normes
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-nature transition-all duration-300 bg-card-gradient">
              <CardContent className="p-8">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">Proximité</h3>
                <p className="text-muted-foreground">
                  Une équipe disponible, à l'écoute de vos besoins
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-nature transition-all duration-300 bg-card-gradient">
              <CardContent className="p-8">
                <Leaf className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">Innovation</h3>
                <p className="text-muted-foreground">
                  Des équipements modernes adaptés à toutes les tailles d'exploitation
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Contactez-nous facilement</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-foreground">+237 655 00 43 90</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-foreground">kamga0212@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Yassa, Douala - à côté du supermarché SPAR</span>
                </div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <Button asChild size="lg" className="bg-primary hover:bg-secondary shadow-nature">
                <Link to="/contact">
                  Voir toutes les infos de contact
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;