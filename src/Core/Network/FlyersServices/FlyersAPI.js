import axios from "axios";


const getFlayers = () => {
  return axios({
    method: 'get',
    url: 'http://localhost:8000/flyers',
  });
};


export const FlayersServices = {
  getFlayers,
}