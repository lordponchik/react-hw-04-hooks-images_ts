import axios from 'axios';

const API_KEY = '36810234-b5e1d7960ec1148affe35137c';

axios.defaults.baseURL = `https://pixabay.com/api`;

export default async function reqPixabay(q: string, page: number) {
  const response = await axios.get(
    `?key=${API_KEY}&q=${q}&page=${page}&per_page=12&image_type=photo&orientation=horizontal`
  );
  const data = await response.data;

  return data;
}
