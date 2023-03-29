import axios from 'axios';

const API_KEY = '31648636-359962a21bdb0d93d510a7c9e';
const BASE_URL = 'https://pixabay.com/api/';
export const PER_PAGE = 12;

export const fetchImages = async (search, page) => {
  const res = await axios.get(
    `${BASE_URL}?q=${search}&key=${API_KEY}&image_type=photo&orientation=horizontal&page=${page}&per_page=${PER_PAGE}`
  );

  if (res.status === 200) {
    return res.data;
  }
};
