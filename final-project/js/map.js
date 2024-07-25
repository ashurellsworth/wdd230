function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: { lat: 20.423, lng: -86.922 }
    });

    const locations = [
        { lat: 20.507, lng: -86.951, name: "Playa del Carmen-Cozumel Ferry dock" },
        { lat: 20.478, lng: -86.968, name: "Terminal Puerta Maya" }
    ];

    locations.forEach(location => {
        new google.maps.Marker({
            position: location,
            map,
            title: location.name
        });
    });
}

document.addEventListener('DOMContentLoaded', initMap);
