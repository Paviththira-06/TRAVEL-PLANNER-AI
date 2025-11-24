// document.addEventListener("DOMContentLoaded", () => {
//   console.log("AI Travel Planner Loaded!");
// });

// function scrollToGenerator() {
//   document.getElementById("generator").scrollIntoView({ behavior: "smooth" });
// }

// function generateItinerary() {
//   const dest = document.getElementById("destination").value;
//   const days = document.getElementById("days").value;
//   const style = document.getElementById("style").value;

//   if (!dest || !days) {
//     alert("Please fill all fields!");
//     return;
//   }

//   let travelTypeText;

//   if (style === "budget") {
//     travelTypeText = "Affordable local food, public transport, and low-cost sightseeing.";
//   } else if (style === "luxury") {
//     travelTypeText = "Premium hotels, fine dining, curated tours, and comfort travel.";
//   } else {
//     travelTypeText = "Outdoor activities, hiking, exploring wild areas, and thrilling experiences.";
//   }

//   let itinerary = `<h3>AI-Generated Itinerary for ${dest} (${days} Days)</h3>`;
//   itinerary += `<p><strong>Travel Style:</strong> ${style.toUpperCase()}</p>`;
//   itinerary += `<p>${travelTypeText}</p>`;

//   itinerary += "<ul>";

//   for (let i = 1; i <= days; i++) {
//     itinerary += `<li><strong>Day ${i}:</strong> Explore top attractions, enjoy local food, and relax.</li>`;
//   }

//   itinerary += "</ul>";

//   document.getElementById("result").innerHTML = itinerary;
// }

// // Reveal on scroll
// const revealElements = document.querySelectorAll("[data-reveal]");

// window.addEventListener("scroll", () => {
//   revealElements.forEach(el => {
//     const pos = el.getBoundingClientRect().top;
//     if (pos < window.innerHeight - 100) {
//       el.classList.add("visible");
//     }
//   });
// });



document.getElementById("tripForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get input values
    const destination = document.getElementById("destination").value.trim();
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;

    // Validation
    if (new Date(startDate) > new Date(endDate)) {
        showResult(`
            <div class="alert alert-danger">❌ End date must be after start date.</div>
        `);
        return;
    }

    // AI-like response generator
    const days = Math.ceil(
        (new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24)
    );

    const responseHTML = `
        <div class="p-4 rounded shadow-sm bg-dark text-white animate__animated animate__fadeIn">
            <h3 class="mb-3">🌍 Your AI-Generated Travel Plan</h3>
            <p><strong>Destination:</strong> ${destination}</p>
            <p><strong>Trip Duration:</strong> ${days} days</p>
            <hr class="border-secondary">
            <h5>✨ Suggested Itinerary</h5>
            <ul>
                <li>📍 Explore top attractions in <strong>${destination}</strong>.</li>
                <li>🍽️ Try local food and hidden restaurants.</li>
                <li>🚶 Enjoy a guided city walk & scenic spots.</li>
                <li>🎭 Experience local culture, markets, and nightlife.</li>
            </ul>
            <p class="mt-3">✔️ More advanced AI itinerary will be added soon.</p>
        </div>
    `;

    showResult(responseHTML);
});

// Function to show output
function showResult(htmlContent) {
    const resultSection = document.getElementById("results-section");
    resultSection.innerHTML = htmlContent;

    // Smooth scroll to results
    resultSection.scrollIntoView({ behavior: "smooth" });
}



