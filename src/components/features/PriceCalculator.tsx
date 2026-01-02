import { useState } from 'react';

export default function PriceCalculator() {
  const [doorType, setDoorType] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [doorSize, setDoorSize] = useState('');
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);

  const calculatePrice = () => {
    // Base prices
    let basePrice = 0;
    
    if (serviceType === 'repair') {
      basePrice = 150;
      if (doorType === 'double') basePrice += 50;
    } else if (serviceType === 'spring') {
      basePrice = 250;
      if (doorType === 'double') basePrice += 100;
    } else if (serviceType === 'opener') {
      basePrice = 200;
    } else if (serviceType === 'installation') {
      basePrice = 800;
      if (doorSize === 'double') basePrice += 400;
      if (doorSize === 'oversized') basePrice += 600;
    }
    
    setEstimatedPrice(basePrice);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Garage Door Service Cost Calculator
            </h2>
            <p className="text-gray-600">
              Get an instant estimate for your garage door service needs
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Service Type
              </label>
              <select
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select service type</option>
                <option value="repair">Basic Repair</option>
                <option value="spring">Spring Replacement</option>
                <option value="opener">Opener Repair/Installation</option>
                <option value="installation">New Door Installation</option>
              </select>
            </div>

            {(serviceType === 'repair' || serviceType === 'spring') && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Door Type
                </label>
                <select
                  value={doorType}
                  onChange={(e) => setDoorType(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select door type</option>
                  <option value="single">Single Car Door</option>
                  <option value="double">Double Car Door</option>
                </select>
              </div>
            )}

            {serviceType === 'installation' && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Door Size
                </label>
                <select
                  value={doorSize}
                  onChange={(e) => setDoorSize(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select door size</option>
                  <option value="single">Single Car (8'x7')</option>
                  <option value="double">Double Car (16'x7')</option>
                  <option value="oversized">Oversized (20'+ wide)</option>
                </select>
              </div>
            )}

            <button
              onClick={calculatePrice}
              disabled={!serviceType}
              className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Calculate Estimate
            </button>

            {estimatedPrice !== null && (
              <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 text-center">
                <div className="text-sm text-gray-600 mb-2">Estimated Price Range</div>
                <div className="text-4xl font-bold text-green-700 mb-2">
                  ${estimatedPrice} - ${estimatedPrice + 200}
                </div>
                <p className="text-sm text-gray-600">
                  *This is an estimate. Final pricing depends on specific model, parts needed, and complexity. 
                  Contact us at <a href="tel:914-557-6816" className="text-blue-600 font-semibold">(914) 557-6816</a> for an accurate quote.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}




