import axios from "axios";


const options = {
  params: {
    geo:"TR",
    lang:"tr"
  },
    headers: {
      'X-RapidAPI-Key': '4c7546fd62msh2dcd6b97d20729ep1318ffjsn4939354ba15c',
      'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
    }
  };

  axios.defaults.baseURL='https://yt-api.p.rapidapi.com/'

export const getData = async (url) => {
try { 
  const response =await axios.get(url, options)
    return response;
    
} catch (error) {
    console.log("verileri çekerken hata oldu");
    
}

   
}