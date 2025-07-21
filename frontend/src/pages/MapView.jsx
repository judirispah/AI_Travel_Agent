export default function MapView() {
  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4">🗺️ Explore Paris on Map</h2>
      <div className="aspect-video rounded-xl overflow-hidden shadow">
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999537412574!2d2.292292615674957!3d48.85837007928761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fdeb0f8f4b5%3A0x8e0e4e0e4e0e4e0e!2sEiffel%20Tower!5e0!3m2!1sen!2sin!4v1628774261213!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}