document.addEventListener("DOMContentLoaded", function() {
    
    

  fetch(url)
    .then(response => response.json())
    .then(data => {
      newsContainer.innerHTML = ""; // Clear "Loading..." text

      if (data.results && data.results.length > 0) {
        data.results.slice(0, 8).forEach(article => {
          const newsDiv = document.createElement("div");
          newsDiv.className = "news-card";

          const imageUrl = article.image_url || "../../Images/DefaultNews.jpg";

          newsDiv.innerHTML = `
            <img src="${imageUrl}" alt="${article.title}">
            <h3>${article.title}</h3>
            <p>${article.description ? article.description.slice(0, 120) + '...' : 'No description available.'}</p>
            <a href="${article.link}" target="_blank">Read More →</a>
          `;

          newsContainer.appendChild(newsDiv);
        });
      } else {
        newsContainer.innerHTML = "<p>No tech news available right now.</p>";
      }
    })
    .catch(error => {
      console.error("Error fetching news:", error);
      newsContainer.innerHTML = "<p>Failed to load news. Please try again later.</p>";
    });




});
