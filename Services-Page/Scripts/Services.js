document.addEventListener("DOMContentLoaded", function() {
    const servicesRoot = document.getElementById('servicesRoot');
    if (!servicesRoot) return;

    const services = [
        {
            image: '../../Images/DSTV-image.jpg',
            PageUrl: '../Service-pages/DSTV-page.html',
            title: 'DSTV Installation',
            description: 'DSTV installation and maintenance including dish alignment, signal testing, and troubleshooting.',
            BookService: 'Request Service'
        },
        {
            image: '../../Images/CCTV-Image.png',
            PageUrl: '../Service-pages/CCTV-page.html',
            title: 'CCTV Installation',
            description: 'CCTV installation and maintenance services for residential and commercial properties.',
            BookService: 'Request Service'
        },
        {
            image: '../../Images/Alarm-Image.png',
            PageUrl: '../Service-pages/Alarm-page.html',
            title: 'Alarm Installation',
            description: 'Alarm installation and monitoring services for residential and commercial properties.',
            BookService: 'Request Service'
        },
        {
            image: '../../Images/Wifi-Image.png',
            PageUrl: '../Service-pages/Wifi-page.html',
            title: 'Wifi Installation',
            description: 'Professional wifi installation and optimization services for homes and businesses.',
            BookService: 'Request Service'
        },
        {
            image: '../../Images/Surround-Sound.png',
            PageUrl: '../Service-pages/SoundSystem-page.html',
            title: 'Surround Sound Installation',
            description: 'Custom surround sound system installation for an immersive audio experience.',
            BookService: 'Request Service'
        }
    ];

    // Clear any existing content (optional)
    servicesRoot.innerHTML = '';

    services.forEach(service => {
        const serviceDiv = document.createElement('div');
        serviceDiv.className = 'service-item';

        serviceDiv.innerHTML = `
            <img src="${service.image}" alt="${service.title}">
            <div>
                <h3>${service.title}</h3>
                <p>${service.description}</p>
                <button class="request-service-btn" onclick="location.href='${service.PageUrl}'">${service.BookService}</button>
            </div>
        `;

        servicesRoot.appendChild(serviceDiv);
    });


   


});
