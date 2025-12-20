import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import MenuCard from "@/components/MenuCard";
import { menuItems, categories } from "@/data/menuData";
import heroBg from "@/assets/hero-bg.jpg";

const Index: React.FC = () => {
  const bestsellers = menuItems.filter((item) => item.isBestseller).slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 gradient-hero"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl animate-slide-up">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">Dindigul, Tamil Nadu</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-cream mb-6 leading-tight">
              Authentic South Indian
              <span className="text-gradient-gold block">Flavors</span>
            </h1>
            <p className="text-lg md:text-xl text-cream/80 mb-8 leading-relaxed">
              Experience the rich heritage of Dindigul's culinary traditions. From our famous Thalappakatti-style biryani
              to crispy dosas and fluffy idlis, every dish tells a story of tradition and taste.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/menu">
                <Button variant="hero" size="xl">
                  Explore Menu
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:9363940672">
                <Button variant="outline" size="xl" className="border-cream/50 text-cream hover:bg-cream hover:text-secondary">
                  Call to Order
                </Button>
              </a>
            </div>

            <div className="flex items-center gap-8 mt-12">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-primary fill-primary" />
                  ))}
                </div>
                <span className="text-cream/80 text-sm">4.8 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-cream/80 text-sm">30-45 min delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-3xl">🍛</span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">Authentic Recipes</h3>
              <p className="text-muted-foreground">
                Traditional recipes passed down through generations, preserving the true taste of Dindigul.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground">
                Quick and reliable delivery within Dindigul district. Hot food at your doorstep.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-3xl">💯</span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">Quality Ingredients</h3>
              <p className="text-muted-foreground">
                Fresh, locally sourced ingredients to ensure every dish is bursting with flavor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">Explore Our Menu</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From traditional breakfast to aromatic biryanis, discover the diverse flavors of South Indian cuisine.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.slice(0, 5).map((category) => (
              <Link
                key={category.id}
                to={`/menu?category=${category.id}`}
                className="group bg-card rounded-xl p-6 text-center shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              >
                <span className="text-4xl block mb-3">{category.icon}</span>
                <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/menu">
              <Button variant="outline" size="lg">
                View All Categories
                <ArrowRight className="w-4 h-4" />
              </Button> 
            </Link>
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">Our Bestsellers</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The dishes our customers can't stop ordering. Try them and you'll know why!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bestsellers.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/menu">
              <Button variant="gold" size="lg">
                View Full Menu
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Ready to Taste the Best of Dindigul?
          </h2>
          <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
            Order now and experience the authentic flavors of South India delivered right to your doorstep.
            Free delivery on orders above ₹500!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/menu">
              <Button variant="hero" size="xl">
                Order Now
              </Button>
            </Link>
            <a href="tel:9363940672">
              <Button variant="outline" size="xl" className="border-cream/50 text-cream hover:bg-cream hover:text-secondary">
                Call 9363940672
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
