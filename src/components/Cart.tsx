import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Minus, Plus, Trash2, MessageCircle } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/use-toast";

export const Cart = () => {
  const { items, removeItem, updateQuantity, clearCart, getTotalItems } = useCart();
  const { toast } = useToast();

  const generateWhatsAppMessage = () => {
    if (items.length === 0) {
      toast({
        title: "Panier vide",
        description: "Ajoutez des produits à votre panier avant de commander.",
        variant: "destructive",
      });
      return;
    }

    const message = `Bonjour JAEC GROUP,\n\nJe souhaiterais commander les produits suivants :\n\n${items
      .map(item => `• ${item.name} (Quantité: ${item.quantity})`)
      .join('\n')}\n\nMerci de me contacter pour finaliser ma commande.`;
    
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "237655004390";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    clearCart();
    
    toast({
      title: "Commande envoyée !",
      description: "Votre commande a été envoyée via WhatsApp.",
    });
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm" className="relative">
          <ShoppingCart className="w-4 h-4" />
          {getTotalItems() > 0 && (
            <Badge 
              className="absolute -top-2 -right-2 bg-accent text-accent-foreground min-w-[20px] h-5 text-xs flex items-center justify-center"
            >
              {getTotalItems()}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Mon Panier</SheetTitle>
        </SheetHeader>
        <div className="mt-6 space-y-4">
          {items.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">
              Votre panier est vide
            </p>
          ) : (
            <>
              {items.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{item.name}</h4>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="h-8 w-8 p-0"
                    >
                      <Minus className="w-3 h-3" />
                    </Button>
                    <span className="w-8 text-center text-sm">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="h-8 w-8 p-0"
                    >
                      <Plus className="w-3 h-3" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => removeItem(item.id)}
                      className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                    >
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              ))}
              <div className="space-y-2 pt-4 border-t">
                <Button 
                  onClick={generateWhatsAppMessage}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Commander via WhatsApp
                </Button>
                <Button 
                  variant="outline" 
                  onClick={clearCart}
                  className="w-full"
                >
                  Vider le panier
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};