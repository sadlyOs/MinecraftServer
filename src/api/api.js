import axios from "axios";

const api = axios.create({
    // baseURL: '/api/api/v1/',
    baseURL: "http://localhost:8081/api/v1/",
    headers: { 'X-Custom-Header': 'foobar' }
});

export async function createRequest(data) {
    try {
        const answer = await api.post("/reg", JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log("Anser: ", answer);

        return answer.data;
    } catch (error) {
        throw new Error(error.response.data.error)
    }
}

export async function getCurrentUser() {
    const res = await api.get("/user/me", {
        withCredentials: 'include',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token') || ''}`
        }
    })
    console.log(res);

    return res
}

export async function refreshToken() {
    try {
        const res = await api.post("/refresh", {
            withCredentials: 'include'
        })
        return res
    } catch (error) {
        throw new Error(error)
    }
}


export async function loginRequest(data) {
    try {
        const res = await api.post("/log", JSON.stringify(data), {
            withCredentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        return res
    } catch (error) {
        console.log(error);
        return error
    }
}