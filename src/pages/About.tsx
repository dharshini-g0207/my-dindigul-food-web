import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Clock, MapPin, Utensils, Heart, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Our Story
          </h1>
          <p className="text-lg md:text-xl opacity-80 max-w-3xl mx-auto">
            From the heart of Dindigul, bringing you the authentic flavors of South India
            with recipes passed down through generations.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold mb-6">
                Welcome to Dindigul Foods
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nestled in the heart of Tamil Nadu, Dindigul is famous for its culinary heritage,
                especially the legendary Thalappakatti-style biryani. At Dindigul Foods, we bring
                this rich tradition to your table.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our chefs, trained in the traditional methods of South Indian cooking, prepare each
                dish with authentic spices and fresh ingredients. From the first bite of our crispy
                dosa to the aromatic flavors of our biryani, every dish tells a story of passion
                and tradition.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We take pride in serving not just food, but an experience that connects you to the
                cultural richness of Dindigul and the warmth of South Indian hospitality.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card rounded-xl p-6 shadow-card text-center">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-display text-2xl font-bold mb-2">10+</h3>
                <p className="text-muted-foreground text-sm">Years of Excellence</p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-card text-center">
                <Utensils className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-display text-2xl font-bold mb-2">50+</h3>
                <p className="text-muted-foreground text-sm">Authentic Dishes</p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-card text-center">
                <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-display text-2xl font-bold mb-2">5000+</h3>
                <p className="text-muted-foreground text-sm">Happy Customers</p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-card text-center">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-display text-2xl font-bold mb-2">30 min</h3>
                <p className="text-muted-foreground text-sm">Avg. Delivery Time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-center mb-12">
            Why Choose Dindigul Foods?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-8 shadow-card">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <span className="text-3xl">🌿</span>
              </div>
              <h3 className="font-display text-xl font-bold mb-3">Fresh Ingredients</h3>
              <p className="text-muted-foreground">
                We source our ingredients locally, ensuring every dish is prepared with the
                freshest vegetables, spices, and meats.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-card">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <span className="text-3xl">👨‍🍳</span>
              </div>
              <h3 className="font-display text-xl font-bold mb-3">Expert Chefs</h3>
              <p className="text-muted-foreground">
                Our chefs have decades of experience in traditional South Indian cooking,
                bringing authentic flavors to every dish.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-card">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <span className="text-3xl">🚚</span>
              </div>
              <h3 className="font-display text-xl font-bold mb-3">Fast Delivery</h3>
              <p className="text-muted-foreground">
                Hot and fresh food delivered to your doorstep within Dindigul district.
                Free delivery on orders above ₹500!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-2xl shadow-elevated p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-display text-3xl font-bold mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Call Us</p>
                      <a href="tel:9363940672" className="font-semibold text-lg hover:text-primary transition-colors">
                        +91 93639 40672
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Opening Hours</p>
                      <p className="font-semibold text-lg">6:00 AM - 10:00 PM (Daily)</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Delivery Area</p>
                      <p className="font-semibold text-lg">Dindigul District, Tamil Nadu</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center md:text-right">
                <p className="text-muted-foreground mb-6">
                  Ready to experience the authentic taste of Dindigul?
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-end">
                  <Link to="/menu">
                    <Button variant="gold" size="lg">
                      Order Now
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                  <a href="tel:9363940672">
                    <Button variant="outline" size="lg">
                      <Phone className="w-4 h-4" />
                      Call Now
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
