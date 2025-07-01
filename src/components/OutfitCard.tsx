
import { Card } from '@/components/ui/card';

interface OutfitCardProps {
  title: string;
  items: string[];
  occasion: string;
  weather: string;
  image?: string;
}

const OutfitCard = ({ title, items, occasion, weather }: OutfitCardProps) => {
  return (
    <Card className="p-4 hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
      <div className="aspect-square bg-gradient-to-br from-purple-100 to-coral-100 rounded-lg mb-3 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2">
            <span className="text-2xl">👗</span>
          </div>
          <p className="text-xs text-gray-600 font-medium">{occasion}</p>
        </div>
      </div>
      
      <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
      
      <div className="space-y-1 mb-3">
        {items.map((item, index) => (
          <p key={index} className="text-sm text-gray-600">• {item}</p>
        ))}
      </div>
      
      <div className="flex justify-between items-center text-xs">
        <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
          {occasion}
        </span>
        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
          {weather}
        </span>
      </div>
    </Card>
  );
};

export default OutfitCard;
