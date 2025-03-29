import { Plus } from 'lucide-react';

const ServicesListSidebar = () => {
  return (
    <div className="py-10 bg-threeAtoms-black relative">
      <div className="space-y-4">
        <div className="flex items-center space-x-2 text-white hover:text-threeAtoms-orange transition-colors">
          <Plus size={16} />
          <span className="font-medium">Artificial</span>
        </div>
        <div className="flex items-center space-x-2 text-white hover:text-threeAtoms-orange transition-colors">
          <Plus size={16} />
          <span className="font-medium">Local Authority</span>
        </div>
        <div className="flex items-center space-x-2 text-white hover:text-threeAtoms-orange transition-colors">
          <Plus size={16} />
          <span className="font-medium">Business Survey</span>
        </div>
        <div className="flex items-center space-x-2 text-white hover:text-threeAtoms-orange transition-colors">
          <Plus size={16} />
          <span className="font-medium">Identity</span>
        </div>
        <div className="flex items-center space-x-2 text-white hover:text-threeAtoms-orange transition-colors">
          <Plus size={16} />
          <span className="font-medium">Data Connection</span>
        </div>
        <div className="flex items-center space-x-2 text-white hover:text-threeAtoms-orange transition-colors">
          <Plus size={16} />
          <span className="font-medium">Public Server</span>
        </div>
      </div>
    </div>
  );
};

export default ServicesListSidebar;
