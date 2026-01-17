const API_KEY = "e6ec93302b8998c5edd27ec9bcf1059b";
const BASE_URL = "https://gnews.io/api/v4";

export const fetchNews = async (query, max = 10) => {
  const response = await fetch(
    `${BASE_URL}/search?q=${query}&lang=en&max=${max}&apikey=${API_KEY}`
  );
  const data = await response.json();
  return data.articles || [];
};