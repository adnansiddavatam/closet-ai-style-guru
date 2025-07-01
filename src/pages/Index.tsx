
import Layout from '@/components/Layout';
import OutfitCard from '@/components/OutfitCard';
import WardrobeStats from '@/components/WardrobeStats';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Search, Plus } from 'lucide-react';

const Index = () => {
  const todayOutfits = [
    {
      title: "Work Meeting",
      items: ["Navy Blazer", "White Button-up", "Dark Jeans", "Brown Oxfords"],
      occasion: "Professional",
      weather: "22°C"
    },
    {
      title: "Dinner Date",
      items: ["Black Dress", "Red Heels", "Gold Jewelry", "Leather Jacket"],
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
      <div className="p-6 space-y-6">
        {/* Welcome Section */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">
            Good Morning! ☀️
          </h2>
          <p className="text-gray-600">Ready to look amazing today?</p>
        </div>

        {/* Stats */}
        <WardrobeStats />

        {/* Today's Suggestions */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Today's Outfits</h3>
            <Button variant="ghost" size="sm" className="text-purple-600">
              <Plus size={16} className="mr-1" />
              Create
            </Button>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            {todayOutfits.map((outfit, index) => (
              <OutfitCard key={index} {...outfit} />
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          
          <div className="grid grid-cols-2 gap-3">
            <Card className="p-4 text-center border-0 shadow-sm gradient-primary text-white">
              <Search className="mx-auto mb-2" size={24} />
              <p className="font-medium text-sm">Find Outfit</p>
            </Card>
            
            <Card className="p-4 text-center border-0 shadow-sm gradient-secondary text-white">
              <Plus className="mx-auto mb-2" size={24} />
              <p className="font-medium text-sm">Add Item</p>
            </Card>
          </div>
        </section>

        {/* Recent Items */}
        <section>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recently Added</h3>
          
          <div className="space-y-3">
            {recentItems.map((item, index) => (
              <Card key={index} className="p-4 border-0 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">{item.name}</h4>
                    <p className="text-sm text-gray-600">{item.brand} • {item.color}</p>
                  </div>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
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
