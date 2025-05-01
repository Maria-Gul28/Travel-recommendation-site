// Handle form submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the data to a server
            console.log('Form submitted:', { name, email, message });
            
            // Show success message
            alert('Thank you for your message! We will get back to you soon.');
            
            // Reset form
            contactForm.reset();
        });
    }
});

// For the country recommendation
function showCountryRecommendation() {
    const countries = [
        {
            name: "Japan",
            description: "Explore the perfect blend of traditional culture and modern technology.",
            images: ["japan_landscape2.jpg", "japan_landscape2.avif"]
        },
        {
            name: "Italy",
            description: "Experience world-class cuisine, art, and history in this beautiful country.",
            images: ["italy_landscape.jpg", "italy_landscape2.jpg"]
        },
        {
            name: "New Zealand",
            description: "Adventure awaits in this land of stunning landscapes and outdoor activities.",
            images: ["nz1.webp", "nz2.jpg"]
        }
    ];
        
    // Select a random country
    const randomCountry = countries[Math.floor(Math.random() * countries.length)];
    
    // Create HTML for the recommendation
    const html = `
        <section class="recommendation">
            <h2>Country Recommendation: ${randomCountry.name}</h2>
            <div class="image-gallery">
                <img src="images/${randomCountry.images[0]}" alt="${randomCountry.name} landscape 1">
                <img src="images/${randomCountry.images[1]}" alt="${randomCountry.name} landscape 2">
            </div>
            <p>${randomCountry.description}</p>
        </section>
    `;
    
    // Add to the page
    document.querySelector('.container').insertAdjacentHTML('beforeend', html);
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', showCountryRecommendation);