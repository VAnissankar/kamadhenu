
// Define the cow breeds data
const cowBreeds = [
    {
        name: 'Gir Cow',
        location: 'Kashmeer',
        coordinates: [250, 50] /* x, y coordinates on the map */
    },
    {
        name: 'Ongole Cow',
        location: 'Andhra Pradesh',
        coordinates: [250, 300]
    },
    // Add more cow breeds here...
];

// Add markers to the map
const map = document.getElementById('map');
cowBreeds.forEach(breed => {
    const marker = document.createElement('div');
    marker.classList.add('marker');
    marker.style.left = `${breed.coordinates[0]}px`;
    marker.style.top = `${breed.coordinates[1]}px`;
    marker.addEventListener('click', () => {
        alert(`${breed.name} - ${breed.location}`);
    });
    map.appendChild(marker);
});

