document.addEventListener("DOMContentLoaded", function() {
    const servicesRoot = document.getElementById('SoundRoot');
    if (!servicesRoot) return;

    const services = [
        {
            image: '../../Images/Sound-HomeTheater.jpg',
            PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
            title: 'Home Theater Installation',
            description:
                'Enjoy cinematic sound at home with professional home theater setup — including speaker placement, surround sound calibration, and cable management.',
            BookService: 'Request Installation'
        },
        {
            image: '../../Images/Sound-Office.jpg',
            PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
            title: 'Office Sound System Setup',
            description:
                'Enhance your workspace with clear, high-quality audio systems for meetings, presentations, and background music — optimized for acoustic performance.',
            BookService: 'Request Setup'
        },
        {
            image: '../../Images/Sound-Outdoor.jpg',
            PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
            title: 'Outdoor Sound System Installation',
            description:
                'Bring music outdoors with weatherproof speakers and clean cabling — perfect for gardens, patios, and entertainment areas.',
            BookService: 'Request Installation'
        },
        {
            image: '../../Images/Sound-Surround.jpg',
            PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
            title: 'Surround Sound Calibration',
            description:
                'Get perfectly balanced sound with our surround sound calibration — we fine-tune speaker angles, distances, and output levels for immersive audio.',
            BookService: 'Request Calibration'
        },
        {
            image: '../../Images/Sound-SmartHome.jpg',
            PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
            title: 'Smart Sound Integration',
            description:
                'Integrate your sound system with smart assistants like Alexa or Google Home — control music and volume with your voice or mobile app.',
            BookService: 'Request Integration'
        },
        {
            image: '../../Images/Sound-Wireless.jpg',
            PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
            title: 'Wireless Sound System Setup',
            description:
                'We install and configure wireless sound systems for clutter-free, high-quality music streaming across multiple rooms or zones.',
            BookService: 'Request Setup'
        },
        {
            image: '../../Images/Sound-Repair.jpg',
            PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
            title: 'Sound System Troubleshooting & Repair',
            description:
                'Having sound issues? Our technicians diagnose and fix problems with amplifiers, speakers, or wiring to restore premium sound quality.',
            BookService: 'Request Repair'
        },
        {
            image: '../../Images/Sound-Event.jpg',
            PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
            title: 'Event Sound System Setup',
            description:
                'We provide professional sound setup for events, parties, and functions — ensuring clear and powerful audio for audiences of any size.',
            BookService: 'Request Setup'
        },
        {
            image: '../../Images/Sound-CustomDesign.jpg',
            PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
            title: 'Custom Sound System Design',
            description:
                'Tailored sound solutions designed to fit your home or business layout — from acoustic planning to complete installation.',
            BookService: 'Request Design'
        }
    ];

    // Clear existing content
    servicesRoot.innerHTML = '';

    services.forEach(service => {
        const serviceDiv = document.createElement('div');
        serviceDiv.className = 'Sound-item';

        serviceDiv.innerHTML = `
            <img src="${service.image}" alt="${service.title}">
            <hr> 
            <div>
                <h3>${service.title}</h3>
                <p>${service.description}</p>
                <button class="request-service-btn" onclick="location.href='${service.PageUrl}'">${service.BookService}</button>
            </div>
        `;

        servicesRoot.appendChild(serviceDiv);
    });
});
