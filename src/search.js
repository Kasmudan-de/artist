// JavaScript-Code
const searchButton = document.querySelector('#search-button');
searchButton.addEventListener('click', () => {
  const searchInput = document.querySelector('#search-input');
  const searchTerm = searchInput.value.toLowerCase();
  const images = document.querySelectorAll('img');

  const results = [];

  images.forEach((image) => {
    const altText = image.getAttribute('alt').toLowerCase();
    if (altText.includes(searchTerm)) {
      results.push(image);
    }
  });

  displayResults(results);
});

// Funktion zum Anzeigen der Suchergebnisse
function displayResults(results) {
  const searchResults = document.querySelector('#search-results');
  searchResults.innerHTML = '';

  results.forEach((result) => {
    const resultDiv = document.createElement('div');
    resultDiv.classList.add('search-result');

    const resultImg = document.createElement('img');
    resultImg.src = result.src;
    resultImg.alt = result.alt;

    const resultLink = document.createElement('a');
    resultLink.href = result.src;
    resultLink.target = '_blank';
    resultLink.appendChild(resultImg);

    resultDiv.appendChild(resultLink);
    searchResults.appendChild(resultDiv);
  });
}