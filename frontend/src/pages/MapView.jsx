import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix leaflet marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

export default function MapView() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = async (query = search) => {
    const res = await axios.get(`https://nominatim.openstreetmap.org/search?q=${query}&format=json&limit=5`);
    setResults(res.data);
    setSuggestions([]);
  };

  const handleTyping = async (e) => {
    const value = e.target.value;
    setSearch(value);
    if (value.length > 2) {
      const res = await axios.get(`https://nominatim.openstreetmap.org/search?q=${value}&format=json&limit=5`);
      setSuggestions(res.data);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelectSuggestion = (place) => {
    setSearch(place.display_name);
    setResults([place]);
    setSuggestions([]);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="p-4 flex-grow-1">
        <h3 className="mb-4 text-center">🗺️ Explore Destinations</h3>

        {/* Search Bar */}
        <div className="position-relative mb-4 mx-auto" style={{ maxWidth: '500px' }}>
          <div className="input-group shadow-sm">
            <input
              type="text"
              placeholder="Search destination..."
              value={search}
              onChange={handleTyping}
              className="form-control"
              style={{ height: '42px' }}
            />
            <button onClick={() => handleSearch()} className="btn btn-primary">
              🔍
            </button>
          </div>

          {suggestions.length > 0 && (
            <ul className="list-group position-absolute w-100" style={{ zIndex: 1000 }}>
              {suggestions.map((s, idx) => (
                <li
                  key={idx}
                  className="list-group-item list-group-item-action"
                  onClick={() => handleSelectSuggestion(s)}
                  style={{ cursor: 'pointer' }}
                >
                  {s.display_name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Map */}
        <MapContainer center={[20, 0]} zoom={2} style={{ height: '350px', width: '100%' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {results.map((place, idx) => (
            <Marker key={idx} position={[place.lat, place.lon]}>
              <Popup>
                <strong>{place.display_name}</strong><br />
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${place.lat},${place.lon}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📍 Get Directions
                </a>
              </Popup>
            </Marker>
          ))}
        </MapContainer>

        {/* Extra Info */}
        {results.length > 0 && (
          <div className="mt-4">
            <h5>📌 Selected Location:</h5>
            <p><strong>Address:</strong> {results[0].display_name}</p>
            <p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${results[0].lat},${results[0].lon}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                🌍 View on Google Maps
              </a>
            </p>
          </div>
        )}

        {/* Extra Info to Add Some Content */}
        <div className="mt-5 text-center">
          <h5>Why use TripAI Map?</h5>
          <p>Find your destination, get quick directions, and plan smarter travels with Google Map support.</p>
        </div>
      </div>









      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <p className="mb-1">© {new Date().getFullYear()}TripAI by Judi. All rights reserved.</p>
      </footer>
    </div>
  );
}
