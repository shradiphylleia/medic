export async function searchNearbyPlaces(lat, lng, map) {
  const url = "https://places.googleapis.com/v1/places:searchNearby";

  const body = {
    includedTypes: ["hospital"],
    maxResultCount: 20,
    locationRestriction: {
      circle: {
        center: {
          latitude: lat,
          longitude: lng,
        },
        radius: 10000.0,
      },
    },
  };

  const headers = {
    "Content-Type": "application/json",
    "X-Goog-Api-Key": map,
    "X-Goog-FieldMask": "places.displayName,places.formattedAddress,places.location",
  };

  try {
    const res = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const errData = await res.text();
      throw new Error(`Error ${res.status}: ${errData}`);
    }

    const data = await res.json();
    return data.places || [];
  } catch (error) {
    console.error("Internal error:", error);
    return [];
  }
}
