
import Layout from '@/components/Layout';
import OutfitCard from '@/components/OutfitCard';
import WardrobeStats from '@/components/WardrobeStats';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Search, Plus, Sparkles, TrendingUp, Calendar } from 'lucide-react';

const Index = () => {
  const todayOutfits = [
    {
      title: "Executive Meeting",
      items: ["Navy Blazer", "Crisp White Shirt", "Tailored Trousers", "Leather Oxfords"],
      occasion: "Professional",
      weather: "22°C"
    },
    {
      title: "Evening Dinner",
      items: ["Silk Dress", "Statement Heels", "Delicate Jewelry", "Cashmere Wrap"],
      occasion: "Date Night",
      weather: "18°C"
    }
  ];

  const recentItems = [
    { name: "Silk Blouse", brand: "Zara", color: "Cream", category: "Tops" },
    { name: "Denim Jacket", brand: "Levi's", color: "Light Blue", category: "Outerwear" },
    { name: "Ankle Boots", brand: "Steve Madden", color: "Black", category: "Shoes" }
  ];

  return (
    <Layout>
      <div className="p-6 space-y-8">
        {/* Welcome Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-orange-50 px-4 py-2 rounded-full border border-amber-200/50 mb-4">
            <span className="text-2xl">☀️</span>
            <span className="text-sm font-medium text-amber-700">Good Morning</span>
          </div>
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-3 leading-tight">
            Ready to look <span className="text-gradient">amazing</span> today?
          </h2>
          <p className="text-gray-600 text-lg">Let's curate the perfect outfit for your day</p>
        </div>

        {/* Stats */}
        <WardrobeStats />

        {/* Today's Suggestions */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Today's Outfits</h3>
              <p className="text-sm text-gray-600">Curated just for you</p>
            </div>
            <Button className="gradient-primary text-white shadow-md hover:shadow-lg transition-all duration-200">
              <Plus size={16} className="mr-2" />
              Create New
            </Button>
          </div>
          
          <div className="space-y-4">
            {todayOutfits.map((outfit, index) => (
              <OutfitCard key={index} {...outfit} />
            ))}
          </div>
        </section>

        {/* AI Insights */}
        <Card className="p-6 gradient-accent border-0 shadow-soft">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
              <Sparkles className="text-white" size={20} />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">✨ AI Style Insight</h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                Based on your wardrobe analysis, you have a strong preference for classic, versatile pieces. 
                Consider adding a bold statement accessory to elevate your signature style!
              </p>
              <Button variant="outline" size="sm" className="border-purple-200 text-purple-700 hover:bg-purple-50">
                <TrendingUp size={14} className="mr-2" />
                View Style Analytics
              </Button>
            </div>
          </div>
        </Card>

        {/* Quick Actions */}
        <section>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-6 text-center border-0 shadow-soft gradient-primary text-white hover:shadow-elegant transition-all duration-200 cursor-pointer group">
              <div className="group-hover:scale-110 transition-transform duration-200">
                <Search className="mx-auto mb-3" size={28} />
                <p className="font-semibold">Find Outfit</p>
                <p className="text-purple-100 text-xs mt-1">Smart search</p>
              </div>
            </Card>
            
            <Card className="p-6 text-center border-0 shadow-soft gradient-secondary text-white hover:shadow-elegant transition-all duration-200 cursor-pointer group">
              <div className="group-hover:scale-110 transition-transform duration-200">
                <Plus className="mx-auto mb-3" size={28} />
                <p className="font-semibold">Add Item</p>
                <p className="text-coral-100 text-xs mt-1">Scan & catalog</p>
              </div>
            </Card>
          </div>
        </section>

        {/* Recent Items */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Recently Added</h3>
              <p className="text-sm text-gray-600">Your latest wardrobe additions</p>
            </div>
            <Button variant="ghost" size="sm" className="text-gray-600">
              <Calendar size={14} className="mr-2" />
              View All
            </Button>
          </div>
          
          <div className="space-y-3">
            {recentItems.map((item, index) => (
              <Card key={index} className="p-5 border-0 shadow-soft hover:shadow-md transition-all duration-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-xl">👕</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.name}</h4>
                      <p className="text-sm text-gray-600">{item.brand} • {item.color}</p>
                    </div>
                  </div>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">
                    {item.category}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
