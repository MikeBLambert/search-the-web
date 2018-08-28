export default {

  getNews(searchTerm = '') {
    return fetch(`
        https://newsapi.org/v2/everything?q=${encodeURIComponent(searchTerm)}&apiKey=eb29f27ac24a4592b7d39d6708389a1c`)
      .then(response => response.json());
  }
};