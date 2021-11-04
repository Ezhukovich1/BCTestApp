const API_KEY = '?api_key=20d8b0963982ce66bea342b2f7de2667';
const API_URL = `https://api.flickr.com/services/rest/${API_KEY}&format=json&nojsoncallback=1&`;

interface IAPI {
  search: string;
  photoDetail: string;
}

export const API: IAPI = {
  search: `${API_URL}extras=url_s&per_page=40&method=flickr.photos.search&`,
  photoDetail: `${API_URL}method=flickr.photos.getInfo&`,
};
