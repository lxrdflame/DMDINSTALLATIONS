document.addEventListener("DOMContentLoaded", function() {
    const servicesRoot = document.getElementById("servicesRoot");
    const searchInput = document.getElementById("serviceSearch");
    if (!servicesRoot || !searchInput) return;

    // One big array containing ALL services
    const allServices = [
        // ---------------- DSTV ----------------
        {
            image: '../../Images/DSTV-compact.jpg',
            PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
            title: 'DStv Compact',
            description: 'Enjoy a wide selection of entertainment, movies, sports, and lifestyle channels including Mzansi Magic, SuperSport Variety, and more — perfect for family viewing at an affordable price.',
            BookService: 'Request Service'
        },
        {
            image: '../../Images/DSTV-Access.jpg',
            PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
            title: 'DStv Access',
            description: 'An affordable package offering essential entertainment, local channels, news, and educational content — ideal for basic viewing needs.',
            BookService: 'Request Service'
        },
        {
            image: '../../Images/DSTV-OpenView.jpg',
            PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
            title: 'OpenView HD',
            description: 'A free-to-view satellite TV service offering over 20 local and international channels with no monthly fees — once-off installation and you’re set for good.',
            BookService: 'Request Service'
        },

        // ---------------- CCTV ----------------
        {
            image: '../../Images/CCTV-Dome.jpg',
            PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
            title: 'Dome CCTV Camera',
            description: 'Compact indoor cameras ideal for shops, offices, and homes — discreet yet reliable.',
            BookService: 'Request Installation'
        },
        {
            image: '../../Images/CCTV-Bullet.jpg',
            PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
            title: 'Bullet CCTV Camera',
            description: 'Perfect for outdoor surveillance — long-range and weatherproof.',
            BookService: 'Request Installation'
        },
        {
            image: '../../Images/CCTV-IP.jpg',
            PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
            title: 'IP CCTV Camera',
            description: 'View and record CCTV footage remotely using your mobile or PC — modern smart surveillance.',
            BookService: 'Request Installation'
        },

        // ---------------- Alarm Systems ----------------
        {
            image: '../../Images/Alarm-Wireless.png',
            PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
            title: 'Wireless Alarm System',
            description: 'A modern, cable-free solution ideal for homes and small offices — quick to install, easy to expand, and compatible with smart devices.',
            BookService: 'Request Installation'
        },
        {
            image: '../../Images/Alarm-Wired.jpg',
            PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
            title: 'Wired Alarm System',
            description: 'Reliable and secure — wired alarm systems offer consistent performance with minimal interference.',
            BookService: 'Request Installation'
        },
        {
            image: '../../Images/Alarm-SmartHome.jpg',
            PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
            title: 'Smart Home Alarm System',
            description: 'Control and monitor your alarm system from anywhere using your smartphone — includes motion sensors and cameras.',
            BookService: 'Request Installation'
        },

        // ---------------- Wi-Fi ----------------
        {
            image: '../../Images/WiFi-Home.jpg',
            PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
            title: 'Home Wi-Fi Installation',
            description: 'Reliable Wi-Fi coverage for your home — includes router setup and signal optimization.',
            BookService: 'Request Installation'
        },
        {
            image: '../../Images/WiFi-Office.jpg',
            PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
            title: 'Office Wi-Fi Setup',
            description: 'Professional Wi-Fi network installation for offices with fast, secure connections.',
            BookService: 'Request Installation'
        },
        {
            image: '../../Images/WiFi-Mesh.jpg',
            PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
            title: 'Mesh Wi-Fi System',
            description: 'Seamless Wi-Fi coverage for large or multi-floor buildings using mesh technology.',
            BookService: 'Request Installation'
        },

        // ---------------- Sound Systems ----------------
        {
            image: '../../Images/Sound-HomeTheatre.jpg',
            PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
            title: 'Home Theater Installation',
            description: 'Transform your living room into a cinematic experience with professional surround sound setup.',
            BookService: 'Request Installation'
        },
        {
            image: '../../Images/Sound-MultiRoom.jpg',
            PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
            title: 'Multi-Room Audio System',
            description: 'Stream synchronized sound across multiple rooms using wired or wireless systems.',
            BookService: 'Request Setup'
        },
        {
            image: '../../Images/Sound-Outdoor.jpg',
            PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
            title: 'Outdoor Sound System',
            description: 'Weatherproof outdoor speakers professionally installed and tuned for great sound.',
            BookService: 'Request Installation'
        }
    ];

    // Function to render services
    function renderServices(services) {
        servicesRoot.innerHTML = '';
        services.forEach(service => {
            const serviceDiv = document.createElement("div");
            serviceDiv.className = "service-item";

            serviceDiv.innerHTML = `
                <img src="${service.image}" alt="${service.title}">
                <hr>
                <div>
                    <h3>${service.title}</h3>
                    <p>${service.description}</p>
                    <button class="request-service-btn" onclick="location.href='${service.PageUrl}'">
                        ${service.BookService}
                    </button>
                </div>
            `;
            servicesRoot.appendChild(serviceDiv);
        });
    }

    // Initial render of all services
    renderServices(allServices);

    // Search filter logic
    searchInput.addEventListener("input", function() {
        const query = searchInput.value.toLowerCase();
        const filtered = allServices.filter(service =>
            service.title.toLowerCase().includes(query)
        );
        renderServices(filtered);
    });
});
