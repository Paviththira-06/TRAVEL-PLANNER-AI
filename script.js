document.addEventListener("DOMContentLoaded", () => {
  console.log("AI Travel Planner Loaded!");
});

function scrollToGenerator() {
  document.getElementById("generator").scrollIntoView({ behavior: "smooth" });
}

function generateItinerary() {
  const dest = document.getElementById("destination").value;
  const days = document.getElementById("days").value;
  const style = document.getElementById("style").value;

  if (!dest || !days) {
    alert("Please fill all fields!");
    return;
  }

  let travelTypeText;

  if (style === "budget") {
    travelTypeText = "Affordable local food, public transport, and low-cost sightseeing.";
  } else if (style === "luxury") {
    travelTypeText = "Premium hotels, fine dining, curated tours, and comfort travel.";
  } else {
    travelTypeText = "Outdoor activities, hiking, exploring wild areas, and thrilling experiences.";
  }

  let itinerary = `<h3>AI-Generated Itinerary for ${dest} (${days} Days)</h3>`;
  itinerary += `<p><strong>Travel Style:</strong> ${style.toUpperCase()}</p>`;
  itinerary += `<p>${travelTypeText}</p>`;

  itinerary += "<ul>";

  for (let i = 1; i <= days; i++) {
    itinerary += `<li><strong>Day ${i}:</strong> Explore top attractions, enjoy local food, and relax.</li>`;
  }

  itinerary += "</ul>";

  document.getElementById("result").innerHTML = itinerary;
}

// Reveal on scroll
const revealElements = document.querySelectorAll("[data-reveal]");

window.addEventListener("scroll", () => {
  revealElements.forEach(el => {
    const pos = el.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
});



function loginUser(event){ event.preventDefault();
const email = document.getElementById("email").value;
const pass = document.getElementById("password").value;
const msg = document.getElementById("message");
    if(email === "user@example.com" && pass === "password123")
       { msg.innerHTML = "<span class='text-success'>Login successful!</span>"; }
    else 
       { msg.innerHTML = "<span class='text-danger'>Invalid credentials</span>"; } }

