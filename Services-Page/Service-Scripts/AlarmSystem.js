document.addEventListener("DOMContentLoaded", function() {
    const servicesRoot = document.getElementById('AlarmsRoot');
    if (!servicesRoot) return;

    const services = [
        {
            image: '../../Images/Alarm-Wireless.png',
            PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
            title: 'Wireless Alarm System',
            description:
                'A modern, cable-free solution ideal for homes and small offices — quick to install, easy to expand, and compatible with smart devices.',
            BookService: 'Request Installation'
        },
        {
            image: '../../Images/Alarm-Wired.jpg',
            PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
            title: 'Wired Alarm System',
            description:
                'Reliable and secure — wired alarm systems are perfect for permanent setups and offer consistent performance with minimal interference.',
            BookService: 'Request Installation'
        },
        {
            image: '../../Images/Alarm-SmartHome.jpg',
            PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
            title: 'Smart Home Alarm System',
            description:
                'Control and monitor your alarm system from anywhere using your smartphone — integrate motion sensors, door alarms, and cameras seamlessly.',
            BookService: 'Request Installation'
        },
        {
            image: '../../Images/Alarm-MotionSensor.png',
            PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
            title: 'Motion Sensor Alarm',
            description:
                'Detects movement with precision — perfect for indoor and outdoor security, alerting you instantly when unexpected motion is detected.',
            BookService: 'Request Installation'
        },
        {
            image: '../../Images/Alarm-DoorWindow.jpg',
            PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
            title: 'Door & Window Sensor System',
            description:
                'Keep your entry points protected — these sensors trigger instant alerts when doors or windows are opened unexpectedly.',
            BookService: 'Request Installation'
        },
        {
            image: '../../Images/Alarm-SmokeDetector.jpg',
            PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
            title: 'Smoke & Fire Alarm System',
            description:
                'Enhance safety with a system designed to detect smoke and fire early — suitable for homes, offices, and industrial environments.',
            BookService: 'Request Installation'
        },
        {
            image: '../../Images/Alarm-GSM.jpeg',
            PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
            title: 'GSM Alarm System',
            description:
                'Stay informed even when you’re away — this system sends SMS or call alerts directly to your phone when the alarm is triggered.',
            BookService: 'Request Installation'
        },
        {
            image: '../../Images/Alarm-Siren.jpg',
            PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
            title: 'Outdoor Siren Alarm',
            description:
                'Loud and highly visible — outdoor sirens alert neighbors and deter intruders instantly when a breach is detected.',
            BookService: 'Request Installation'
        },
        {
            image: '../../Images/Alarm-ControlPanel.jpg',
            PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
            title: 'Alarm Control Panel System',
            description:
                'The central hub of your security setup — manage sensors, arm or disarm your system, and monitor alerts with ease.',
            BookService: 'Request Installation'
        }
    ];

    // Clear existing content
    servicesRoot.innerHTML = '';

    services.forEach(service => {
        const serviceDiv = document.createElement('div');
        serviceDiv.className = 'Alarm-item';

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
