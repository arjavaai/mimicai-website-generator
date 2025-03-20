
const ClientsSection = () => {
  return (
    <section className="py-16 bg-arolax-black border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {/* Client logos */}
          <div className="flex items-center justify-center">
            <div className="text-center">
              <h4 className="text-xl font-bold text-white mb-1">CANON</h4>
              <p className="text-xs text-gray-500">CLIENT</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="text-center">
              <h4 className="text-xl font-bold text-white mb-1">ARCOM</h4>
              <p className="text-xs text-gray-500">CLIENT</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="text-center">
              <h4 className="text-xl font-bold text-white mb-1">NETFLIX</h4>
              <p className="text-xs text-gray-500">CLIENT</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="text-center">
              <h4 className="text-xl font-bold text-white mb-1">stripe</h4>
              <p className="text-xs text-gray-500">CLIENT</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
