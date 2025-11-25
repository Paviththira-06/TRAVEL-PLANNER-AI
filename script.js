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


// //gallery- Lightbox effect
// document.querySelectorAll('.lightbox').forEach(img => {
//     img.addEventListener('click', function (e) {
//         e.preventDefault();

//         const overlay = document.createElement('div');
//         overlay.classList.add('lightbox-overlay');

//         const image = document.createElement('img');
//         image.src = this.href;

//         overlay.appendChild(image);
//         document.body.appendChild(overlay);

//         // Close lightbox on click
//         overlay.addEventListener('click', () => {
//             overlay.remove();
//         });
//     });
// });

function loginUser(event){event.preventDefault();
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    const msg = document.getElementById("message");
         if(email === "user@example.com" && pass === "password123") 
            { msg.innerHTML = "<span class='text-success'>Login successful!</span>"; } 
         else
             { msg.innerHTML = "<span class='text-danger'>Invalid credentials</span>"; } }
