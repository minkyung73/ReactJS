import axios from "axios";

const baseURL = "http://175.45.202.165:8000";

const axiosInstance = axios.create({
    baseURL: baseURL, 
});

axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("slamAtoken");
        if (!accessToken) return config;

        config.headers = {
            Authorization: `Bearer ${accessToken}`, 
            "Content-Type": "application/json", 
        };

        return config;
    }, 
    (err) => {
        Promise.reject(err);
    }
);
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    }, 
    async (error) => {
        const originalRequest = error.config;
        if(error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            const refreshToken = localStorage.getItem("slamRtoken");
            if (refreshToken) {
                try {
                    const refreshResponse = await axios({
                        method: "POST", 
                        url: `${baseURL}/api/User/refresh-token`, 
                        data: {
                            token: refreshToken, 
                        }, 
                        headers: {
                            "Content-Type": "application/json", 
                        }, 
                    });
                    localStorage.setItem(
                        "slamAtoken" ,
                        refreshResponse.data.token
                    );
                    localStorage.setItem(
                        "slamRtoken", 
                        refreshResponse.data.refreshToken
                    );
                    return axiosInstance(originalRequest);
                } catch (err) {
                    return Promise.reject(error);
                }
            }
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;


