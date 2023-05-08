export const exerciseOptions =  {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '12b131c48fmshe93749f7cf91a8ap153098jsn37c0d6e0dd84',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '12b131c48fmshe93749f7cf91a8ap153098jsn37c0d6e0dd84',
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};