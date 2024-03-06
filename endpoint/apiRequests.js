// apiRequests.js
import axios from 'axios';

async function makeRequest(url) {
    try {
        const response = await axios.post(url, {
            jsonrpc: "2.0",
            method: "eth_blockNumber",
            params: [],
            id: 1
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        return { success: true, data: response.data };
    } catch (error) {
        return { success: false, error: error.response ? error.response.data : error.message };
    }
}

export { makeRequest };
