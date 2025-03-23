// Define the cow breeds data with latitude/longitude coordinates
const cowBreeds = [
    {
        name: 'Gir Cow',
        location: 'Gujarat',
        coordinates: [22.2587, 70.8357] // latitude, longitude for Gujarat
    },
    {
        name: 'Ongole Cow',
        location: 'Andhra Pradesh',
        coordinates: [15.5057, 80.0499] // latitude, longitude for Ongole, Andhra Pradesh
    },
    {
        name: 'Sahiwal Cow',
        location: 'Punjab',
        coordinates: [31.1471, 75.3412] // latitude, longitude for Punjab
    },
    {
        name: 'Red Sindhi',
        location: 'Sindh (Pakistan)',
        coordinates: [25.8943, 68.5247] // latitude, longitude for Sindh
    },
    {
        name: 'Tharparkar',
        location: 'Rajasthan',
        coordinates: [26.9124, 71.1226] // latitude, longitude for Thar region, Rajasthan
    }
];

// This function will be called after the map is initialized
function addCowBreedMarkers(map) {
    // Create custom icon for cow markers
    const cowIcon = L.icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/2395/2395796.png',
        iconSize: [32, 32],
        iconAnchor: [16, 16],
        popupAnchor: [0, -16]
    });
    
    // Add markers for each cow breed
    cowBreeds.forEach(breed => {
        const cowMarker = L.marker(breed.coordinates, {icon: cowIcon}).addTo(map);
        
        // Add popup with breed information
        cowMarker.bindPopup(
            `<div style="text-align: center;">
                <h3>${breed.name}</h3>
                <p><strong>Location:</strong> ${breed.location}</p>
            </div>`
        );
    });
}

