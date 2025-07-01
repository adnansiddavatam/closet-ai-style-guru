
import Layout from '@/components/Layout';
import ScanButton from '@/components/ScanButton';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Scan = () => {
  const { toast } = useToast();

  const handlePhotoScan = () => {
    toast({
      title: "📸 Photo Scan",
      description: "Camera functionality would open here to catalog your clothing items.",
    });
  };

  const handleReceiptScan = () => {
    toast({
      title: "🧾 Receipt Scan", 
      description: "Receipt scanning would analyze your purchases and add items to your wardrobe.",
    });
  };

  const handleUpload = () => {
    toast({
      title: "📤 Upload",
      description: "File upload would allow you to add photos from your gallery.",
    });
  };

  return (
    <Layout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-4">
            <Sparkles className="text-white" size={32} />
          </div>
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">
            Smart Scanning
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Use AI to automatically catalog your wardrobe from photos and receipts
          </p>
        </div>

        {/* Scan Options */}
        <div className="grid grid-cols-1 gap-6">
          <ScanButton
            type="photo"
            title="Scan Clothing"
            description="Take photos of your clothes to automatically identify and catalog items with AI"
            onClick={handlePhotoScan}
          />
          
          <ScanButton
            type="receipt"
            title="Scan Receipt"
            description="Upload shopping receipts to instantly add new purchases to your wardrobe"
            onClick={handleReceiptScan}
          />
        </div>

        {/* Upload Alternative */}
        <Card className="p-6 border-2 border-dashed border-gray-200 text-center">
          <Upload className="mx-auto text-gray-400 mb-4" size={32} />
          <h3 className="font-semibold text-gray-900 mb-2">Upload from Gallery</h3>
          <p className="text-sm text-gray-600 mb-4">
            Select photos from your device to add to your wardrobe
          </p>
          <Button variant="outline" onClick={handleUpload}>
            Choose Files
          </Button>
        </Card>

        {/* Recent Scans */}
        <section>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Scans</h3>
          
          <div className="space-y-3">
            {[
              { type: 'Photo', item: 'Blue Denim Jacket', time: '2 hours ago', status: 'Added' },
              { type: 'Receipt', item: 'Zara Shopping - 3 items', time: '1 day ago', status: 'Processed' },
              { type: 'Photo', item: 'Black Ankle Boots', time: '2 days ago', status: 'Added' }
            ].map((scan, index) => (
              <Card key={index} className="p-4 border-0 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">{scan.item}</h4>
                    <p className="text-sm text-gray-600">{scan.type} • {scan.time}</p>
                  </div>
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                    {scan.status}
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

export default Scan;
