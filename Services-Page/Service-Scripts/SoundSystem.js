document.addEventListener("DOMContentLoaded", function() {
    const servicesRoot = document.getElementById('SoundRoot');
    if (!servicesRoot) return;

    const services = [
        {
            image: '../../Images/Sound-HomeTheatre.jpg',
            PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
            title: 'Home Theater Installation',
            description:
                'Transform your living room into a cinematic experience with professional surround sound setup, speaker calibration, and cable management.',
            BookService: 'Request Installation'
        },
        {
            image: '../../Images/Sound-MultiRoom.jpg',
            PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
            title: 'Multi-Room Audio System',
            description:
                'Stream music in every room with synchronized sound — ideal for homes, offices, and entertainment venues using wireless or wired systems.',
            BookService: 'Request Setup'
        },
        {
            image: '../../Images/Sound-Soundbar.jpg',
            PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
            title: 'Soundbar Setup & Mounting',
            description:
                'Enhance your TV’s sound with a perfectly mounted and calibrated soundbar for deep bass and crystal-clear dialogue.',
            BookService: 'Request Installation'
        },
        {
            image: '../../Images/Sound-Outdoor.jpg',
            PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
            title: 'Outdoor Sound System',
            description:
                'Bring music to your patio, garden, or pool area with weather-resistant outdoor speakers professionally installed and tuned.',
            BookService: 'Request Installation'
        },
        {
            image: '../../Images/Sound-Conference.jpg',
            PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
            title: 'Conference Room Audio Setup',
            description:
                'Install microphones, speakers, and echo-free sound systems for professional meetings, calls, and presentations.',
            BookService: 'Request Setup'
        },
        {
            image: '../../Images/Sound-CeilingSpeakers.jpg',
            PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
            title: 'Ceiling Speaker Installation',
            description:
                'Discreetly installed ceiling speakers provide clean aesthetics and immersive sound for homes, offices, and retail spaces.',
            BookService: 'Request Installation'
        },
        {
            image: '../../Images/Sound-PA.png',
            PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
            title: 'Public Address (PA) System Setup',
            description:
                'Perfect for schools, churches, and events — we install microphones, amplifiers, and speakers for reliable public sound coverage.',
            BookService: 'Request Setup'
        },
        {
            image: '../../Images/Sound-DJSystem.jpg',
            PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
            title: 'DJ Sound System Setup',
            description:
                'Professional-grade sound system installations for DJs, events, and clubs — including speaker placement and sound balance.',
            BookService: 'Request Setup'
        },
        {
            image: '../../Images/Sound-Maintenance.jpg',
            PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
            title: 'Sound System Maintenance & Repair',
            description:
                'We inspect, repair, and optimize existing sound systems to restore peak performance and eliminate distortion or connection issues.',
            BookService: 'Request Repair'
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
