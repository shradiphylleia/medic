import { useEffect, useState } from "react";
import { searchNearbyPlaces } from "./hospitalSearch.js";
import "./Map.css";

const MAP = import.meta.env.VITE_MAP;

export default function MapPage() {
  const [location, setLocation] = useState(null);
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      },
      (err) => {
        console.error("Location error:", err);
        setError("Unable to fetch location.");
        setLoading(false);
      }
    );
  }, []);

  useEffect(() => {
    if (location) {
      searchNearbyPlaces(location.lat, location.lng, MAP)
        .then((results) => {
          setPlaces(results);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Search error:", err);
          setError("Failed to load nearby hospitals.");
          setLoading(false);
        });
    }
  }, [location]);

  return (
    <div className="map-page">
      <h1>Nearby Hospitals</h1>

      {loading && <p>Loading...</p>}
      {location && !loading && !error && (
        <>
          {places.length > 0 ? (
            <ul>
              {places.map((place, idx) => (
                <li key={idx}>
                  <strong>{place.displayName?.text}</strong>
                  <br />
                  {place.formattedAddress}
                </li>
              ))}
            </ul>
          ) : (
            <p>No nearby hospitals found.</p>
          )}
        </>
      )}

      {!location && !loading && !error && <p>Fetching location...</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
}
