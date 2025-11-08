document.addEventListener("DOMContentLoaded", function() {
    const servicesRoot = document.getElementById('DSTVsRoot');
    if (!servicesRoot) return;

   const services = [
  {
    image: '../../Images/DSTV-compact.jpg',
    PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
    title: 'DStv Compact',
    description:
      'Enjoy a wide selection of entertainment, movies, sports, and lifestyle channels including Mzansi Magic, SuperSport Variety, and more — perfect for family viewing at an affordable price.',
    BookService: 'Request Service'
  },
  {
    image: '../../Images/DSTV-Access.jpg',
    PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
    title: 'DStv Access',
    description:
      'An affordable package offering essential entertainment, local channels, news, and educational content — ideal for basic viewing needs.',
    BookService: 'Request Service'
  },
  {
    image: '../../Images/DSTV-OpenView.jpg',
    PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
    title: 'OpenView HD',
    description:
      'A free-to-view satellite TV service offering over 20 local and international channels with no monthly fees — once-off installation and you’re set for good.',
    BookService: 'Request Service'
  },
  {
    image: '../../Images/DSTV-Explora.jpg',
    PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
    title: 'DStv Explora',
    description:
      'Experience next-level entertainment with the DStv Explora decoder — pause, rewind, and record live TV, watch Catch Up, and rent the latest movies with BoxOffice.',
    BookService: 'Request Service'
  },
  {
    image: '../../Images/DSTV-Explora-Ultra.jpg',
    PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
    title: 'DStv Explora Ultra',
    description:
      'The most advanced DStv decoder yet — enjoy 4K streaming, built-in DStv Stream, Netflix, YouTube, and voice search, all in one powerful device.',
    BookService: 'Request Service'
  },
  {
    image: '../../Images/DSTV-HD-single-View.jpg',
    PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
    title: 'DStv HD Single View',
    description:
      'A cost-effective HD decoder for single-room viewing — access crystal-clear channels and great entertainment in high definition.',
    BookService: 'Request Service'
  },
  {
    image: '../../Images/DSTV-Family.jpg',
    PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
    title: 'DStv Family',
    description:
      'A balanced package with something for everyone — enjoy local favourites, kids shows, music, and general entertainment channels for the whole family.',
    BookService: 'Request Service'
  },
  {
    image: '../../Images/DSTV-Streama.jpg',
    PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
    title: 'DStv Streama',
    description:
      'A smart streaming device that turns your TV into a smart TV — stream DStv, Netflix, YouTube, and more in one place without needing a satellite dish.',
    BookService: 'Request Service'
  },
  {
    image: '../../Images/DSTV-compact-plus.jpg',
    PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
    title: 'DStv Compact Plus',
    description:
      'Upgrade your viewing with premium sports, international series, and movie channels — perfect for sports lovers and movie fans who want a bit more variety.',
    BookService: 'Request Service'
  }
];

    

    // Clear any existing content (optional)
    servicesRoot.innerHTML = '';

    services.forEach(service => {
        const serviceDiv = document.createElement('div');
        serviceDiv.className = 'DSTV-item';

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
