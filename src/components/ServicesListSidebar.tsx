
import { Plus } from 'lucide-react';

const ServicesListSidebar = () => {
  return (
    <div className="py-10 bg-arolax-black relative">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ai featured services<br />by arolax</h2>
      <div className="space-y-4 mt-8">
        <div className="flex items-center space-x-2 text-white hover:text-arolax-orange transition-colors">
          <Plus size={16} />
          <span className="font-medium">Central algorithm</span>
        </div>
        <div className="flex items-center space-x-2 text-white hover:text-arolax-orange transition-colors">
          <Plus size={16} />
          <span className="font-medium">Networking</span>
        </div>
        <div className="flex items-center space-x-2 text-white hover:text-arolax-orange transition-colors">
          <Plus size={16} />
          <span className="font-medium">Server security</span>
        </div>
        <div className="flex items-center space-x-2 text-white hover:text-arolax-orange transition-colors">
          <Plus size={16} />
          <span className="font-medium">Firewall deep prompt</span>
        </div>
        <div className="flex items-center space-x-2 text-white hover:text-arolax-orange transition-colors">
          <Plus size={16} />
          <span className="font-medium">Data structure</span>
        </div>
        <div className="flex items-center space-x-2 text-white hover:text-arolax-orange transition-colors">
          <Plus size={16} />
          <span className="font-medium">Artificial Intelligence</span>
        </div>
      </div>
    </div>
  );
};

export default ServicesListSidebar;
