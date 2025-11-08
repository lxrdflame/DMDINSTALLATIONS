document.addEventListener("DOMContentLoaded", function() {
    const servicesRoot = document.getElementById('CCTVsRoot');
    if (!servicesRoot) return;

    const services = [
        {
            image: '../../Images/CCTV-Dome.jpg',
            PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
            title: 'Dome CCTV Camera',
            description:
                'Compact and discreet — ideal for indoor surveillance in homes, offices, or retail spaces. Dome cameras offer wide coverage and vandal resistance.',
            BookService: 'Request Installation'
        },
        {
            image: '../../Images/CCTV-Bullet.jpg',
            PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
            title: 'Bullet CCTV Camera',
            description:
                'Perfect for outdoor monitoring — weatherproof and designed for long-range visibility, bullet cameras act as a strong visual deterrent.',
            BookService: 'Request Installation'
        },
        {
            image: '../../Images/CCTV-PTZ.jpg',
            PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
            title: 'PTZ (Pan-Tilt-Zoom) Camera',
            description:
                'High-end cameras with motorized control — pan, tilt, and zoom remotely for flexible surveillance of large areas such as parking lots or warehouses.',
            BookService: 'Request Installation'
        },
        {
            image: '../../Images/CCTV-IP.jpg',
            PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
            title: 'IP CCTV Camera',
            description:
                'Network-based cameras providing crystal-clear HD video and remote access through mobile apps — ideal for modern security systems.',
            BookService: 'Request Installation'
        },
        {
            image: '../../Images/CCTV-Wireless.jpg',
            PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
            title: 'Wireless CCTV Camera',
            description:
                'Easy to install and manage — wireless cameras eliminate cable clutter while providing secure, high-quality video transmission.',
            BookService: 'Request Installation'
        },
        {
            image: '../../Images/CCTV-NightVision.jpg',
            PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
            title: 'Infrared Night Vision Camera',
            description:
                'Designed for 24/7 protection — these cameras capture clear footage even in complete darkness using infrared LED technology.',
            BookService: 'Request Installation'
        },
        {
            image: '../../Images/CCTV-DVR.jpg',
            PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
            title: 'CCTV DVR System',
            description:
                'A complete digital video recorder system for analog cameras — record, store, and replay footage with advanced playback features.',
            BookService: 'Request Installation'
        },
        {
            image: '../../Images/CCTV-NVR.jpg',
            PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
            title: 'CCTV NVR System',
            description:
                'For IP camera setups — record high-definition video directly over your network with superior image quality and remote access.',
            BookService: 'Request Installation'
        },
        {
            image: '../../Images/CCTV-SmartCam.jpg',
            PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
            title: 'Smart Wi-Fi Camera',
            description:
                'Smart home security made simple — connect via Wi-Fi, get motion alerts on your phone, and monitor your space in real-time from anywhere.',
            BookService: 'Request Installation'
        }
    ];

    // Clear existing content
    servicesRoot.innerHTML = '';

    services.forEach(service => {
        const serviceDiv = document.createElement('div');
        serviceDiv.className = 'CCTV-item';

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
