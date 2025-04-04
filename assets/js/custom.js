// Countdown Timer
function updateCountdown() {
    // Get current date and time in IST
    const now = new Date();
    const nowIST = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
    
    // Set event date in IST (May 3, 2025, 9:00 AM)
    const eventDate = new Date('2025-05-03T09:00:00');
    eventDate.setHours(9, 0, 0, 0);
    
    // Calculate difference in milliseconds
    const diff = eventDate - nowIST;
    
    // Debug output
    console.log('Current time (IST):', nowIST);
    console.log('Event time:', eventDate);
    console.log('Time difference (ms):', diff);
    
    if (diff <= 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }

    // Calculate days, hours, minutes, seconds
    const totalSeconds = Math.floor(diff / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    
    const days = Math.floor(totalHours / 24);
    const hours = totalHours % 24;
    const minutes = totalMinutes % 60;
    const seconds = totalSeconds % 60;

    // Debug output
    console.log('Days remaining:', days);
    console.log('Hours remaining:', hours);
    console.log('Minutes remaining:', minutes);
    console.log('Seconds remaining:', seconds);

    // Update the display
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Initialize countdown timer when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Initial update
    updateCountdown();
    
    // Update every second
    setInterval(updateCountdown, 1000);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize Google Maps
function initMap() {
    const venueLocation = { lat: 18.5204, lng: 73.8567 }; // Pune coordinates
    const map = new google.maps.Map(document.getElementById('venue-map'), {
        zoom: 15,
        center: venueLocation,
        styles: [
            {
                featureType: "poi",
                elementType: "labels",
                stylers: [{ visibility: "off" }]
            }
        ]
    });
    const marker = new google.maps.Marker({
        position: venueLocation,
        map: map,
        title: 'AWS Community Day Pune 2025'
    });
}

// Form validation
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            if (!form.checkValidity()) {
                e.preventDefault();
                alert('Please fill in all required fields correctly.');
            }
        });
    });
});

// FAQ Accordion
document.querySelectorAll('.faq-item').forEach(item => {
    const header = item.querySelector('.faq-question');
    const content = item.querySelector('.faq-answer');
    
    header.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        
        // Close all other items
        document.querySelectorAll('.faq-item').forEach(otherItem => {
            otherItem.classList.remove('active');
            otherItem.querySelector('.faq-answer').style.maxHeight = '0';
        });
        
        // Toggle current item
        if (!isOpen) {
            item.classList.add('active');
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
});

// Image Gallery Lightbox
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        const imgSrc = this.querySelector('img').src;
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <img src="${imgSrc}" alt="Gallery Image">
                <button class="close-lightbox">&times;</button>
            </div>
        `;
        
        document.body.appendChild(lightbox);
        
        lightbox.querySelector('.close-lightbox').addEventListener('click', () => {
            lightbox.remove();
        });
        
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.remove();
            }
        });
    });
}); 