import axios from "axios";

const agent = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

// agent.interceptors.response.use

export default agent;
