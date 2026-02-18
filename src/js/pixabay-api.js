import axios from 'axios';

const API_KEY = '37881893-de2938aaaa45ff8f8348dc2a6';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query, page = 1) {
  const searchParams = {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 15,
      page,
    },
  };

  const response = await axios.get(BASE_URL, searchParams);

  return response.data;
}
