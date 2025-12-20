import React, { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuCard from "@/components/MenuCard";
import CategoryFilter from "@/components/CategoryFilter";
import SearchBar from "@/components/SearchBar";
import CartSidebar from "@/components/CartSidebar";
import { menuItems, categories } from "@/data/menuData";

const MenuPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("category");
  
  const [selectedCategory, setSelectedCategory] = useState<string | null>(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory = !selectedCategory || item.category === selectedCategory;
      const matchesSearch =
        !searchQuery ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const currentCategory = categories.find((c) => c.id === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-8">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Our Menu</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our wide range of authentic South Indian dishes. Each dish is prepared with fresh ingredients
              and traditional recipes.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-8">
            <SearchBar onSearch={setSearchQuery} placeholder="Search for dosa, biryani, idli..." />
          </div>

          {/* Category Filter */}
          <div className="mb-8 overflow-x-auto pb-2">
            <CategoryFilter
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>

          {/* Category Description */}
          {currentCategory && (
            <div className="bg-primary/10 rounded-xl p-6 mb-8">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{currentCategory.icon}</span>
                <div>
                  <h2 className="font-display text-2xl font-bold">{currentCategory.name}</h2>
                  <p className="text-muted-foreground">{currentCategory.description}</p>
                </div>
              </div>
            </div>
          )}

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Menu Grid */}
            <div className="flex-1">
              {filteredItems.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredItems.map((item) => (
                    <MenuCard key={item.id} item={item} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <span className="text-6xl block mb-4">🔍</span>
                  <h3 className="font-display text-xl font-semibold mb-2">No dishes found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search or filter to find what you're looking for.
                  </p>
                </div>
              )}
            </div>

            {/* Cart Sidebar */}
            <div className="lg:w-80 xl:w-96">
              <div className="sticky top-24">
                <CartSidebar />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MenuPage;
