import axios from "axios"

const BASE_URL= "https://youtube138.p.rapidapi.com"

const options = {
    params: {
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'X-RapidAPI-Key': "1a7ddc765bmsh98a4491aa8d2b2dp1679bdjsnf7ab4a34c8fe",
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };


export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};
