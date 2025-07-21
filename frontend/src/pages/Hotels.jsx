export default function Hotels() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4">🏨 Hotel Options in Paris</h2>
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-lg font-bold text-gray-800">Hotel Le Parisien</p>
          <p className="text-sm text-gray-600">3-Star • Near Eiffel Tower • ₹7,200/night</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-lg font-bold text-gray-800">Budget Stay Hostel</p>
          <p className="text-sm text-gray-600">1-Star • Central Paris • ₹2,999/night</p>
        </div>
      </div>
    </div>
  );
}
