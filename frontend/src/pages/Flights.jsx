export default function Flights() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4">✈️ Best Flight Deals</h2>
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-xl shadow flex justify-between items-center">
          <div>
            <p className="text-lg font-medium text-gray-700">Chennai → Paris</p>
            <p className="text-sm text-gray-500">Air India • Non-stop • 10h 15m</p>
          </div>
          <span className="text-indigo-600 font-bold text-lg">₹34,500</span>
        </div>
        <div className="bg-white p-4 rounded-xl shadow flex justify-between items-center">
          <div>
            <p className="text-lg font-medium text-gray-700">Mumbai → Paris</p>
            <p className="text-sm text-gray-500">Air France • 1 Stop • 11h 40m</p>
          </div>
          <span className="text-indigo-600 font-bold text-lg">₹31,200</span>
        </div>
      </div>
    </div>
  );
}