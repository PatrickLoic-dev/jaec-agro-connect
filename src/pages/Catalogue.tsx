import { ProductCard } from "@/components/ProductCard";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/use-toast";
import { Cart } from "@/components/Cart";

const Catalogue = () => {
  const { addItem } = useCart();
  const { toast } = useToast();

  const products = [
    {
      id: "1",
      name: "Pipettes pour poulet en cage",
      description: "Système d'abreuvement automatique pour volailles en cage, garantit un approvisionnement en eau constant et propre."
    },
    {
      id: "2", 
      name: "Pipettes pour lapin",
      description: "Pipettes spécialement conçues pour l'élevage de lapins, faciles à installer et à nettoyer."
    },
    {
      id: "3",
      name: "Abreuvoirs manuels", 
      description: "Abreuvoirs robustes pour tous types d'élevage, disponibles en différentes capacités."
    },
    {
      id: "4",
      name: "Abreuvoirs automatiques G86",
      description: "Système d'abreuvement automatique haute performance pour optimiser la consommation d'eau."
    },
    {
      id: "5",
      name: "Radiants à gaz (1000 sujets)",
      description: "Système de chauffage à gaz pour poussinière, capacité 1000 sujets, économique et efficace."
    },
    {
      id: "6", 
      name: "Radiants à gaz (1500 sujets)",
      description: "Système de chauffage à gaz pour poussinière, capacité 1500 sujets, idéal pour grandes exploitations."
    },
    {
      id: "7",
      name: "Radiants électriques",
      description: "Chauffage électrique pour élevage, contrôle précis de la température, sécurisé."
    },
    {
      id: "8",
      name: "Pulvérisateurs (toutes capacités)",
      description: "Gamme complète de pulvérisateurs pour traitement phytosanitaire, du 2L au 100L."
    },
    {
      id: "9",
      name: "Balances numériques", 
      description: "Balances de précision pour pesée du bétail et des récoltes, affichage digital."
    },
    {
      id: "10",
      name: "Produits sur commande",
      description: "Nous pouvons commander tout équipement spécialisé selon vos besoins spécifiques."
    }
  ];

  const handleAddToCart = (productName: string) => {
    addItem(productName);
    toast({
      title: "Produit ajouté !",
      description: `${productName} a été ajouté à votre panier.`,
    });
  };

  const handleWhatsAppClick = (productName: string) => {
    const message = `Bonjour JAEC GROUP,\n\nJe suis intéressé(e) par le produit suivant :\n• ${productName}\n\nPouvez-vous me donner plus d'informations ?`;
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "237655004390";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Notre Catalogue</h1>
            <p className="text-lg text-muted-foreground">
              Découvrez notre gamme complète de produits agricoles et d'équipements d'élevage
            </p>
          </div>
          <Cart />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              onAddToCart={() => handleAddToCart(product.name)}
              onWhatsAppClick={() => handleWhatsAppClick(product.name)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-muted rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Besoin d'un produit spécifique ?
            </h2>
            <p className="text-muted-foreground mb-6">
              Nous proposons également des commandes sur mesure pour répondre à tous vos besoins spécialisés.
            </p>
            <button
              onClick={() => handleWhatsAppClick("Demande de produit sur commande")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-lg font-medium transition-colors shadow-accent"
            >
              Faire une demande spéciale
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalogue;