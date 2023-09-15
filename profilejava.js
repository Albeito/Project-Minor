// JavaScript to simulate real-time temperature changes and show the warning
document.addEventListener('DOMContentLoaded', function () {
    const temperatureElement = document.getElementById('temperature');
    const warningElement = document.getElementById('warning');

    // Function to update the temperature and show the warning when it's too hot
    function updateTemperature() {
        const randomTemperature = Math.floor(Math.random() * 50) + 1; // Simulate random temperature between 1°C and 50°C
        temperatureElement.textContent = `${randomTemperature}°C`;

        if (randomTemperature > 40) {
            warningElement.style.display = 'block';
        } else {
            warningElement.style.display = 'none';
        }
    }

    // Update temperature initially and set an interval to update it periodically
    updateTemperature();
    setInterval(updateTemperature, 5000); // Update temperature every 5 seconds (you can adjust the interval)
});
