
import Layout from '@/components/Layout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Receipt, Plus, Calendar, Users } from 'lucide-react';

const Receipts = () => {
  const receipts = [
    {
      store: 'Zara',
      date: '2024-01-15',
      total: '$127.50',
      items: 3,
      status: 'Processed',
      itemsAdded: ['Silk Blouse', 'Wide-leg Trousers', 'Gold Earrings']
    },
    {
      store: 'H&M',
      date: '2024-01-12', 
      total: '$89.99',
      items: 2,
      status: 'Processed',
      itemsAdded: ['Cotton T-shirt', 'Denim Jacket']
    },
    {
      store: 'Nike',
      date: '2024-01-08',
      total: '$156.00',
      items: 1,
      status: 'Processing',
      itemsAdded: ['Air Max Sneakers']
    }
  ];

  return (
    <Layout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 gradient-secondary rounded-3xl flex items-center justify-center mx-auto mb-4">
            <Receipt className="text-white" size={32} />
          </div>
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">
            Receipt History
          </h2>
          <p className="text-gray-600">
            Track your shopping and automatically build your wardrobe
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <Card className="p-4 text-center border-0 shadow-sm">
            <Receipt className="mx-auto text-purple-600 mb-2" size={20} />
            <div className="text-lg font-bold text-gray-900">15</div>
            <div className="text-xs text-gray-600">Receipts</div>
          </Card>
          
          <Card className="p-4 text-center border-0 shadow-sm">
            <Calendar className="mx-auto text-coral-600 mb-2" size={20} />
            <div className="text-lg font-bold text-gray-900">$847</div>
            <div className="text-xs text-gray-600">This Month</div>
          </Card>
          
          <Card className="p-4 text-center border-0 shadow-sm">
            <Users className="mx-auto text-blue-600 mb-2" size={20} />
            <div className="text-lg font-bold text-gray-900">42</div>
            <div className="text-xs text-gray-600">Items Added</div>
          </Card>
        </div>

        {/* Add Receipt Button */}
        <Button className="w-full gradient-secondary text-white border-0 h-12 font-medium">
          <Plus className="mr-2" size={20} />
          Scan New Receipt
        </Button>

        {/* Receipts List */}
        <section>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Receipts</h3>
          
          <div className="space-y-4">
            {receipts.map((receipt, index) => (
              <Card key={index} className="p-5 border-0 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">{receipt.store}</h4>
                    <p className="text-sm text-gray-600">{receipt.date}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-900">{receipt.total}</div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      receipt.status === 'Processed' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {receipt.status}
                    </span>
                  </div>
                </div>
                
                <div className="border-t pt-3">
                  <p className="text-sm text-gray-600 mb-2">
                    {receipt.items} items • Added to wardrobe:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {receipt.itemsAdded.map((item, itemIndex) => (
                      <span 
                        key={itemIndex}
                        className="bg-purple-50 text-purple-700 px-2 py-1 rounded-full text-xs"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Tips */}
        <Card className="p-5 bg-gradient-to-r from-purple-50 to-coral-50 border-0">
          <h4 className="font-semibold text-gray-900 mb-2">💡 Pro Tip</h4>
          <p className="text-sm text-gray-700 leading-relaxed">
            Scan receipts immediately after shopping for the most accurate wardrobe tracking. 
            Our AI can identify brands, colors, and categories automatically!
          </p>
        </Card>
      </div>
    </Layout>
  );
};

export default Receipts;
