import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "https://my-burger-b72f0-default-rtdb.firebaseio.com/"
});

export default axiosInstance;

