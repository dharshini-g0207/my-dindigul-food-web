import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { toast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Address } from "@/types";

const dindigulAreas = [
  "Dindigul Town",
  "Palani",
  "Kodaikanal",
  "Oddanchatram",
  "Nilakottai",
  "Batlagundu",
  "Vedasandur",
  "Natham",
  "Athoor",
  "Reddiarchatram",
  "Vadamadurai",
  "Sitharevu",
];

const Cart: React.FC = () => {
  const { items, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart();
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  const [showAddressForm, setShowAddressForm] = useState(false);
  const [address, setAddress] = useState<Address>({
    fullName: user?.name || "",
    phone: user?.phone || "",
    street: "",
    area: user?.location || "",
    city: "Dindigul",
    pincode: "",
    landmark: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const deliveryFee = totalPrice >= 500 ? 0 : 40;
  const grandTotal = totalPrice + deliveryFee;

  const validateAddress = () => {
    const newErrors: Record<string, string> = {};

    if (!address.fullName.trim()) newErrors.fullName = "Name is required";
    if (!address.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^[6-9]\d{9}$/.test(address.phone)) {
      newErrors.phone = "Enter valid 10-digit number";
    }
    if (!address.street.trim()) newErrors.street = "Street address is required";
    if (!address.area) newErrors.area = "Please select your area";
    if (!address.pincode.trim()) {
      newErrors.pincode = "Pincode is required";
    } else if (!/^\d{6}$/.test(address.pincode)) {
      newErrors.pincode = "Enter valid 6-digit pincode";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCheckout = () => {
    if (!isAuthenticated) {
      toast({
        title: "Please login first",
        description: "You need to login to place an order",
        variant: "destructive",
      });
      navigate("/auth");
      return;
    }
    setShowAddressForm(true);
  };

  const handlePlaceOrder = () => {
    if (!validateAddress()) return;

    toast({
      title: "Order Placed Successfully! 🎉",
      description: `Your order of ₹${grandTotal} will be delivered to ${address.area}, Dindigul within 30-45 minutes.`,
    });

    clearCart();
    setShowAddressForm(false);
    navigate("/");
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  if (items.length === 0 && !showAddressForm) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-20">
          <div className="container mx-auto px-4 text-center">
            <ShoppingBag className="w-24 h-24 mx-auto text-muted-foreground/30 mb-6" />
            <h1 className="font-display text-3xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Link to="/menu">
              <Button variant="gold" size="lg">
                Browse Menu
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <Link to="/menu" className="text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <h1 className="font-display text-3xl md:text-4xl font-bold">
              {showAddressForm ? "Delivery Address" : "Your Cart"}
            </h1>
          </div>

          {!showAddressForm ? (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-card rounded-xl shadow-card overflow-hidden">
                  <div className="p-4 bg-primary/10 border-b border-border">
                    <h2 className="font-display text-lg font-semibold">{items.length} Items in Cart</h2>
                  </div>

                  <div className="divide-y divide-border">
                    {items.map((item) => (
                      <div key={item.id} className="p-4 flex gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 md:w-24 md:h-24 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-display font-semibold text-foreground">{item.name}</h3>
                              <p className="text-sm text-muted-foreground line-clamp-1">{item.description}</p>
                              <p className="text-primary font-semibold mt-1">₹{item.price}</p>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-destructive hover:text-destructive/80 transition-colors p-1"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>

                          <div className="flex items-center gap-3 mt-3">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="font-semibold w-8 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                            <span className="ml-auto font-display font-bold text-lg">
                              ₹{item.price * item.quantity}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-card rounded-xl shadow-card p-6 sticky top-24">
                  <h2 className="font-display text-xl font-bold mb-6">Order Summary</h2>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-semibold">₹{totalPrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Delivery Fee</span>
                      <span className="font-semibold">
                        {deliveryFee === 0 ? (
                          <span className="text-green-600">FREE</span>
                        ) : (
                          `₹${deliveryFee}`
                        )}
                      </span>
                    </div>
                    {deliveryFee > 0 && (
                      <p className="text-xs text-muted-foreground">
                        Add ₹{500 - totalPrice} more for free delivery
                      </p>
                    )}
                    <div className="border-t border-border pt-3 flex justify-between">
                      <span className="font-display text-lg font-bold">Total</span>
                      <span className="font-display text-2xl font-bold text-primary">₹{grandTotal}</span>
                    </div>
                  </div>

                  <Button variant="gold" size="lg" className="w-full" onClick={handleCheckout}>
                    Proceed to Checkout
                  </Button>

                  <p className="text-xs text-center text-muted-foreground mt-4">
                    <MapPin className="w-4 h-4 inline mr-1" />
                    Delivery available only in Dindigul District
                  </p>
                </div>
              </div>
            </div>
          ) : (
            /* Address Form */
            <div className="max-w-2xl mx-auto">
              <div className="bg-card rounded-xl shadow-card p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h2 className="font-display text-xl font-bold">Delivery Address</h2>
                </div>

                <form className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name</label>
                      <input
                        type="text"
                        name="fullName"
                        value={address.fullName}
                        onChange={handleAddressChange}
                        placeholder="Enter your name"
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      />
                      {errors.fullName && (
                        <p className="text-destructive text-sm mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={address.phone}
                        onChange={handleAddressChange}
                        placeholder="10-digit phone number"
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      />
                      {errors.phone && (
                        <p className="text-destructive text-sm mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Street Address</label>
                    <input
                      type="text"
                      name="street"
                      value={address.street}
                      onChange={handleAddressChange}
                      placeholder="House/Flat No., Street, Building"
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                    {errors.street && (
                      <p className="text-destructive text-sm mt-1">{errors.street}</p>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-2">Area / Town</label>
                      <select
                        name="area"
                        value={address.area}
                        onChange={handleAddressChange}
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none cursor-pointer"
                      >
                        <option value="">Select area</option>
                        {dindigulAreas.map((area) => (
                          <option key={area} value={area}>
                            {area}
                          </option>
                        ))}
                      </select>
                      {errors.area && (
                        <p className="text-destructive text-sm mt-1">{errors.area}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Pincode</label>
                      <input
                        type="text"
                        name="pincode"
                        value={address.pincode}
                        onChange={handleAddressChange}
                        placeholder="6-digit pincode"
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      />
                      {errors.pincode && (
                        <p className="text-destructive text-sm mt-1">{errors.pincode}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Landmark (Optional)</label>
                    <input
                      type="text"
                      name="landmark"
                      value={address.landmark}
                      onChange={handleAddressChange}
                      placeholder="Nearby landmark for easy delivery"
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>

                  {/* Order Summary Mini */}
                  <div className="bg-muted rounded-lg p-4 mt-6">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Total Payable</span>
                      <span className="font-display text-2xl font-bold text-primary">₹{grandTotal}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {items.length} items • Cash on Delivery
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      size="lg"
                      className="flex-1"
                      onClick={() => setShowAddressForm(false)}
                    >
                      Back to Cart
                    </Button>
                    <Button
                      type="button"
                      variant="gold"
                      size="lg"
                      className="flex-1"
                      onClick={handlePlaceOrder}
                    >
                      Place Order
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
