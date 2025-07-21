export default function Home() {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center items-center text-center bg-gradient-to-br from-indigo-100 to-pink-100 p-8">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Plan Your Dream Trip</h2>
      <p className="text-lg text-gray-600 mb-6 max-w-xl">
        Tell us where you want to go, your budget and preferences. We'll use AI to build a perfect travel itinerary.
      </p>
      <input
        type="text"
        placeholder="e.g. Plan a 3-day trip to Goa under ₹10,000"
        className="w-full max-w-xl px-5 py-3 rounded-xl border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <button className="mt-4 px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition">
        Plan My Trip 🚀
      </button>
    </section>
  );
}
