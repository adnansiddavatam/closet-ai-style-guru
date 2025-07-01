
import { Camera, Receipt } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface ScanButtonProps {
  type: 'photo' | 'receipt';
  title: string;
  description: string;
  onClick: () => void;
}

const ScanButton = ({ type, title, description, onClick }: ScanButtonProps) => {
  const Icon = type === 'photo' ? Camera : Receipt;
  const gradient = type === 'photo' ? 'gradient-primary' : 'gradient-secondary';

  return (
    <Card 
      className="p-6 cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 shadow-md"
      onClick={onClick}
    >
      <div className={`w-16 h-16 ${gradient} rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
        <Icon className="text-white" size={28} />
      </div>
      
      <h3 className="font-semibold text-gray-900 text-center mb-2">{title}</h3>
      <p className="text-sm text-gray-600 text-center leading-relaxed">{description}</p>
    </Card>
  );
};

export default ScanButton;
