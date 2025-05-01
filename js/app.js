// Database of recommendations
const recommendations = {
    beaches: [
        {
            name: "White Sand Beach, Thailand",
            description: "Famous for its powdery white sand and crystal clear waters.",
            images: ["white_sand_beach.jpg", "Tropical-Beach.jpg"]
        },
        {
            name: "Anse Source d'Argent, Seychelles",
            description: "One of the most photographed beaches in the world with unique granite boulders.",
            images: ["beach3.jpg", "beach4.png"]
        }
    ],
    temples: [
        {
            name: "Angkor Wat, Cambodia",
            description: "The largest religious monument in the world, originally constructed as a Hindu temple.",
            images: ["temple1.webp", "temple2.webp"]
        },
        {
            name: "Borobudur, Indonesia",
            description: "The world's largest Buddhist temple, with stunning sunrise views.",
            images: ["temple3.jpg", "temple4.avif"]
        }
    ],
    countries: [
        {
            name: "Japan",
            description: "A fascinating blend of ancient traditions and cutting-edge technology.",
            images: ["japan1.jpg", "japan2.avif", "japan3.jpg"]
        },
        {
            name: "Italy",
            description: "Rich history, stunning art, and world-renowned cuisine.",
            images: ["italy1.jpg", "italy2.jpg"]
        },
        {
            name: "New Zealand",
            description: "Adventure awaits in this land of stunning landscapes and outdoor activities.",
            images: ["nz1.webp", "nz2.jpg"]
        }
    ]
};

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    // Set up contact form if on contact page
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }

    // Set up search functionality on all pages
    setupSearch();
});

// Set up search functionality
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const clearBtn = document.getElementById('clearBtn');
    
    if (searchBtn && clearBtn && searchInput) {
        searchBtn.addEventListener('click', handleSearch);
        clearBtn.addEventListener('click', clearResults);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') handleSearch();
        });
    }
}

// Handle form submission
function handleFormSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    console.log('Form submitted:', { name, email, message });
    alert('Thank you for your message! We will get back to you soon.');
    e.target.reset();
}

// Handle search
function handleSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    if (!searchTerm) {
        alert('Please enter a search term');
        return;
    }

    // Create or find results container
    let resultsContainer = document.getElementById('resultsContainer');
    if (!resultsContainer) {
        const container = document.querySelector('.container');
        if (container) {
            resultsContainer = document.createElement('div');
            resultsContainer.id = 'resultsContainer';
            container.insertBefore(resultsContainer, container.firstChild.nextSibling);
        } else {
            return;
        }
    }

    resultsContainer.innerHTML = ''; // Clear previous results

    // Determine what to search for
    if (searchTerm.includes('beach')) {
        displayRecommendations('beaches', 'Beach Recommendations');
    } 
    else if (searchTerm.includes('temple')) {
        displayRecommendations('temples', 'Temple Recommendations');
    } 
    else if (searchTerm.includes('country')) {
        displayRecommendations('countries', 'Country Recommendations');
    } 
    else {
        resultsContainer.innerHTML = '<p>No results found. Try searching for "beach", "temple", or "country".</p>';
    }
}

// Display recommendations
function displayRecommendations(type, title) {
    const items = recommendations[type];
    const resultsContainer = document.getElementById('resultsContainer');
    
    if (!resultsContainer) return;
    
    if (!items || items.length === 0) {
        resultsContainer.innerHTML = '<p>No recommendations found for this category.</p>';
        return;
    }

    const heading = document.createElement('h2');
    heading.textContent = title;
    resultsContainer.appendChild(heading);

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'recommendation-card';
        
        // Use the first two images
        const image1 = item.images[0] || '';
        const image2 = item.images[1] || item.images[0] || '';
        
        card.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <div class="image-gallery">
                ${image1 ? `<img src="images/${image1}" alt="${item.name} 1">` : ''}
                ${image2 ? `<img src="images/${image2}" alt="${item.name} 2">` : ''}
            </div>
        `;
        
        resultsContainer.appendChild(card);
    });
}

// Clear results
function clearResults() {
    const searchInput = document.getElementById('searchInput');
    const resultsContainer = document.getElementById('resultsContainer');
    
    if (searchInput) {
        searchInput.value = '';
    }
    if (resultsContainer) {
        resultsContainer.innerHTML = '';
    }
}
