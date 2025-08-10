import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Lightbulb, MapPin, Users, Award } from "lucide-react";

const APropos = () => {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">À propos de JAEC GROUP</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Une entreprise camerounaise dynamique au service de l'agriculture et de l'élevage modernes
          </p>
        </div>

        {/* Main Description */}
        <div className="bg-card-gradient rounded-lg p-8 mb-12 shadow-nature">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="/lovable-uploads/28c400f3-ac03-4ad4-81fa-5532e8fac53a.png" 
                alt="JAEC GROUP Logo" 
                className="w-48 h-auto mx-auto mb-6"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-card-foreground mb-4">Notre Entreprise</h2>
              <p className="text-muted-foreground leading-relaxed">
                JAEC GROUP est une entreprise camerounaise dynamique, spécialisée dans la vente de produits 
                phytosanitaires et d'accessoires modernes pour l'élevage et l'agriculture. Basée à Yassa Douala, 
                sur l'axe lourd à côté du supermarché SPAR, notre boutique bénéficie d'un emplacement stratégique 
                pour desservir efficacement les agriculteurs et éleveurs de toute la région.
              </p>
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="mb-12">
          <Card className="bg-card-gradient shadow-nature">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-card-foreground mb-4">🎯 Notre Mission</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Fournir des solutions durables, fiables et accessibles aux producteurs locaux afin de 
                    booster leur rendement et améliorer la qualité de leurs activités agricoles et d'élevage.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">🌱 Nos Valeurs</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-nature transition-all duration-300 bg-card-gradient">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">Professionnalisme</h3>
                <p className="text-muted-foreground">
                  Des produits testés, approuvés et conformes aux normes
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-nature transition-all duration-300 bg-card-gradient">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">Proximité</h3>
                <p className="text-muted-foreground">
                  Une équipe disponible, à l'écoute de vos besoins
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-nature transition-all duration-300 bg-card-gradient">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Lightbulb className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  Des équipements modernes adaptés à toutes les tailles d'exploitation
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Services */}
        <div className="mb-12">
          <Card className="bg-primary text-primary-foreground shadow-nature">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Notre Engagement</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Ce que nous offrons</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      <span>Gamme complète de produits agricoles</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      <span>Équipements d'élevage modernes</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      <span>Conseils techniques personnalisés</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Nos services</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      <span>Démonstrations pratiques</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      <span>Service d'installation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      <span>Réseau de techniciens qualifiés</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Location */}
        <div>
          <Card className="bg-card-gradient shadow-nature">
            <CardContent className="p-8">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-card-foreground mb-4">Notre Emplacement Stratégique</h2>
                <p className="text-muted-foreground mb-4">
                  Nous sommes idéalement situés à Yassa Douala, sur l'axe lourd à côté du supermarché SPAR.
                </p>
                <p className="text-muted-foreground">
                  Cette position stratégique nous permet de desservir efficacement tous les agriculteurs 
                  et éleveurs de la région avec nos services d'installation disponibles dans tout le Cameroun.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default APropos;