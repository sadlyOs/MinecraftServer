import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:8081/api/v1/',
  headers: {'X-Custom-Header': 'foobar'}
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
