document.addEventListener('DOMContentLoaded', () => {
    fetch('data/rentals.json')
        .then(response => response.json())
        .then(data => {
            const rentalsTable = document.getElementById('rentals-table');
            let tableHtml = `
                <tr>
                    <th>Type</th>
                    <th>CC</th>
                    <th>Max Persons</th>
                    <th>Half Day (Reservation)</th>
                    <th>Full Day (Reservation)</th>
                    <th>Half Day (Walk-In)</th>
                    <th>Full Day (Walk-In)</th>
                </tr>
            `;

            data.rentals.forEach(rental => {
                tableHtml += `
                    <tr>
                        <td>${rental.type}</td>
                        <td>${rental.cc}</td>
                        <td>${rental.persons}</td>
                        <td>${rental.halfDayReservation}</td>
                        <td>${rental.fullDayReservation}</td>
                        <td>${rental.halfDayWalkIn}</td>
                        <td>${rental.fullDayWalkIn}</td>
                    </tr>
                `;
            });

            rentalsTable.innerHTML = tableHtml;
        });
});
