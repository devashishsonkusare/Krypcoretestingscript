import axios from 'axios';


let collectionId = "";
let collectionContractAddress = "";
// Function to create NFT collection
export async function createNftCollection(config) {
    try {
        const response = await axios.post(
            config.url,
            config.data,
            { headers: config.headers }
        );
        
        return response;
    } catch (error) {
        return error;
       
        // return error.message;
    }
}

// Function to fetch NFT collection list
export async function fetchNftCollectionList(config) {
    try {
        const response = await axios.post(
            config.url,
            config.data,
            { headers: config.headers }
        );

        collectionId = response.data.Data.result[0]._id;
        collectionContractAddress = response.data.Data.result[0].collectionContractAddress;
        return response;
    } catch (error) {
        return error;
    }
}


export async function fetchNftCollectionById(config) {
    try {
        config.data.id = collectionId;

        const response = await axios.post(
            config.url,
            config.data,
            { headers: config.headers }
        );
        return response;
    } catch (error) {
        return error;

    }
}

// Function to create NFT
export async function createNft(config) {
    try {
        config.data.contractAddress = collectionContractAddress;

        const response = await axios.post(
            config.url,
            config.data,
            { headers: config.headers }
        );
        return response;
    } catch (error) {
        return error;

    }
}

export async function fetchNftList(config) {
    try {
        config.data.contractAddress = collectionContractAddress;

        const response = await axios.post(
            config.url,
            config.data,
            { headers: config.headers }
        );
        return response;   
    } catch (error) {
        return error;
    }
}