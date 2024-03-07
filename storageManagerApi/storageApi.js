import axios from 'axios';
import { storageConfig } from './storageConfig.js';


let id = ""
export async function storeFile() {
    try {
        const response = await axios.post(
            storageConfig.storeFile.url,
            storageConfig.storeFile.formData.files,
            { headers: storageConfig.storeFile.headers }
        );
        
        return response;
    } catch (error) {
        return error;
    }
}

export async function getFileDetails() {
    try {
        const response = await axios.post(
            storageConfig.getFileDetails.url,
            storageConfig.getFileDetails.requestData,
            { headers: storageConfig.getFileDetails.headers }
        );
        if (response.data.Data.data != null) {
            id = response.data.Data.data[0]._id
        }    
        return response;
    } catch (error) {
        return error;
    }
}

export async function downloadFileFromIPFS() {
    try {
        storageConfig.downloadFileFromIPFS.requestData.id = id
        const response = await axios.post(
            storageConfig.downloadFileFromIPFS.url,
            storageConfig.downloadFileFromIPFS.requestData,
            { headers: storageConfig.downloadFileFromIPFS.headers }
        );
        return response;
    } catch (error) {
        return error;
    }
}

export async function updatePinStatus() {
    try {
       
        storageConfig.updatePinStatus.requestData.id = id
        const response = await axios.post(
            storageConfig.updatePinStatus.url,
            storageConfig.updatePinStatus.requestData,
            { headers: storageConfig.updatePinStatus.headers }
        );
        return response;
    } catch (error) {
        return error;
    }
}