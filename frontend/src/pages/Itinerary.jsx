export default function Itinerary() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4">🧠 Your AI-Powered Itinerary</h2>
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="text-xl font-bold text-indigo-600">Day 1</h3>
          <ul className="list-disc ml-6 mt-2 text-gray-700">
            <li>Arrival in Paris and check-in</li>
            <li>Visit the Eiffel Tower</li>
            <li>Evening Seine River Cruise</li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="text-xl font-bold text-indigo-600">Day 2</h3>
          <ul className="list-disc ml-6 mt-2 text-gray-700">
            <li>Explore the Louvre Museum</li>
            <li>Stroll in Montmartre</li>
            <li>French dinner in a cozy bistro</li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="text-xl font-bold text-indigo-600">Day 3</h3>
          <ul className="list-disc ml-6 mt-2 text-gray-700">
            <li>Visit Notre-Dame Cathedral</li>
            <li>Relax in Luxembourg Gardens</li>
            <li>Departure</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
