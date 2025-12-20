import React from "react";
import { Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MenuItem } from "@/types";
import { useCart } from "@/context/CartContext";

interface MenuCardProps {
  item: MenuItem;
}

const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  const { items, addToCart, updateQuantity } = useCart();
  const cartItem = items.find((i) => i.id === item.id);
  const quantity = cartItem?.quantity || 0;

  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          {item.isVeg ? (
            <span className="px-2 py-1 bg-green-500 text-primary-foreground text-xs font-semibold rounded">
              VEG
            </span>
          ) : (
            <span className="px-2 py-1 bg-red-500 text-primary-foreground text-xs font-semibold rounded">
              NON-VEG
            </span>
          )}
          {item.isBestseller && (
            <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded">
              BESTSELLER
            </span>
          )}
        </div>
        {item.isSpicy && (
          <span className="absolute top-3 right-3 text-2xl">🌶️</span>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-display text-lg font-semibold text-foreground mb-1">
          {item.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {item.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="font-display text-xl font-bold text-primary">
            ₹{item.price}
          </span>

          {quantity > 0 ? (
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => updateQuantity(item.id, quantity - 1)}
              >
                <Minus className="w-4 h-4" />
              </Button>
              <span className="w-8 text-center font-semibold">{quantity}</span>
              <Button
                variant="gold"
                size="icon"
                className="h-8 w-8"
                onClick={() => addToCart(item)}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          ) : (
            <Button variant="gold" size="sm" onClick={() => addToCart(item)}>
              <Plus className="w-4 h-4" />
              Add
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
