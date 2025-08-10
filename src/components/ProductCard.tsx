import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, MessageCircle } from "lucide-react";

interface ProductCardProps {
  name: string;
  description?: string;
  image?: string;
  onAddToCart: () => void;
  onWhatsAppClick: () => void;
}

export const ProductCard = ({ 
  name, 
  description, 
  image, 
  onAddToCart, 
  onWhatsAppClick 
}: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-nature transition-all duration-300 hover:scale-105 bg-card-gradient border-border">
      <CardContent className="p-6">
        {image && (
          <div className="mb-4 overflow-hidden rounded-lg">
            <img 
              src={image} 
              alt={name}
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        )}
        <h3 className="font-semibold text-lg text-card-foreground mb-2">{name}</h3>
        {description && (
          <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{description}</p>
        )}
        <div className="flex gap-2">
          <Button 
            onClick={onAddToCart}
            variant="outline" 
            size="sm" 
            className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Ajouter
          </Button>
          <Button 
            onClick={onWhatsAppClick}
            size="sm"
            className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            WhatsApp
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};