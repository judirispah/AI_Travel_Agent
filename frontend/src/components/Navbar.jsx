export default function Nav({ setActiveTab }) {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <h1 className="text-2xl font-bold text-indigo-600 cursor-pointer" onClick={() => setActiveTab("home")}>TripAI ✈️</h1>
      <ul className="flex space-x-6 text-gray-600 font-medium">
        <li onClick={() => setActiveTab("itinerary")} className="hover:text-indigo-500 cursor-pointer">Itinerary</li>
        <li onClick={() => setActiveTab("flights")} className="hover:text-indigo-500 cursor-pointer">Flights</li>
        <li onClick={() => setActiveTab("hotel")} className="hover:text-indigo-500 cursor-pointer">Hotels</li>
        <li onClick={() => setActiveTab("map")} className="hover:text-indigo-500 cursor-pointer">Map View</li>
      </ul>
    </nav>
  );
}