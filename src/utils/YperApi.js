import axios from 'axios';

const API_BASE_URL = 'https://io.beta.yper.org';
const API_KEY = '8eb12b6a57434385b24e9b07c4e5cef4';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    'X-Request-Timestamp': new Date().getTime()
  },
});

export async function searchRetailPoints(location, minDistance, maxDistance) {
  try {
    const url = `/retailpoint/search?location=${location}&min_distance=${minDistance}&max_distance=${maxDistance}`;
    const response = await axiosInstance.get(url);

    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getRetailPointById(retailpoint_id) {
  try {
    const url = `/retailpoint?enabled=true&ids=${retailpoint_id}`;
    const response = await axiosInstance.get(url);

    return response.data.result.data[0];
  } catch (error) {
    console.error(error);
  }
}
