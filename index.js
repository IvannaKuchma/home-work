const searchInput = document.getElementById('searchInput');
const resultsContainer = document.querySelector('.results');

const API_KEY = '8d94df97';


async function fetchMovies(query) {
  const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(query)}`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    if (data.Response === "True") {
      return data.Search; 
    } else {
      throw new Error(data.Error);
    }
  } catch (error) {
    console.error("Fetch error:", error.message);
    return null;
  }
}

function displayMovies(movies) {
  if (!movies || movies.length === 0) {
    resultsContainer.innerHTML = `<p>Нічого не знайдено</p>`;
    return;
  }

  resultsContainer.innerHTML = movies.map(movie => `
    <div class="movie-card">
      <img src="${movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Image"}" alt="${movie.Title}">
      <div class="movie-info">
        <h2>${movie.Title}</h2>
        <p><strong>Рік:</strong> ${movie.Year}</p>
        <p><strong>Тип:</strong> ${movie.Type}</p>
      </div>
    </div>
  `).join('');
}

function debounce(func, delay) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
}

const handleInput = debounce(async () => {
  const query = searchInput.value.trim();
  if (query.length === 0) {
    resultsContainer.innerHTML = '';
    return;
  }

  const movies = await fetchMovies(query);
  displayMovies(movies);
}, 500); 

const form = document.getElementById('searchForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const title = form.title.value.trim();
  const year = form.year.value.trim();
  const plot = form.plot.value.trim();
  const response = form.response.value.trim();

  console.log({ title, year, plot, response });

  alert(`Пошук: \nTitle: ${title}\nYear: ${year}\nPlot: ${plot}\nResponse: ${response}`);
});

form.addEventListener('reset', function() {
  console.log('Форма очищена');
});


searchInput.addEventListener('input', handleInput);

