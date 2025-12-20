import React from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

interface CartSidebarProps {
  className?: string;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ className }) => {
  const { items, updateQuantity, removeFromCart, totalPrice, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <div className={`bg-card rounded-xl p-6 shadow-card ${className}`}>
        <div className="flex items-center gap-2 mb-6">
          <ShoppingBag className="w-6 h-6 text-primary" />
          <h2 className="font-display text-xl font-bold">Your Cart</h2>
        </div>
        <div className="text-center py-8">
          <ShoppingBag className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
          <p className="text-muted-foreground">Your cart is empty</p>
          <p className="text-sm text-muted-foreground mt-1">Add some delicious items!</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-card rounded-xl shadow-card overflow-hidden ${className}`}>
      <div className="p-4 bg-primary/10 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-6 h-6 text-primary" />
            <h2 className="font-display text-xl font-bold">Your Cart</h2>
          </div>
          <span className="text-sm text-muted-foreground">{totalItems} items</span>
        </div>
      </div>

      <div className="max-h-[400px] overflow-y-auto p-4">
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex gap-3 pb-4 border-b border-border last:border-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-sm text-foreground truncate">{item.name}</h4>
                <p className="text-primary font-semibold text-sm">₹{item.price}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-6 h-6 rounded bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-6 h-6 rounded bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-auto text-destructive hover:text-destructive/80 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 bg-muted/50 border-t border-border">
        <div className="flex justify-between items-center mb-4">
          <span className="text-muted-foreground">Subtotal</span>
          <span className="font-display text-xl font-bold text-primary">₹{totalPrice}</span>
        </div>
        <Link to="/cart">
          <Button variant="gold" className="w-full" size="lg">
            View Cart & Checkout
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CartSidebar;
