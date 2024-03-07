// storageApiTests.js

import { expect } from 'chai';
import {
    storeFile,
    getFileDetails,
    downloadFileFromIPFS,
    updatePinStatus
} from "./storageApi.js"

export async function testStorageApi(){
    
}

describe('Storage API Tests', () => {
    it('should store a file', async () => {
        const response = await storeFile();
        expect(response.status).to.equal("SUCCESS");
    }).timeout(0);

    it('should get file details', async () => {
        const response = await getFileDetails();
        if (response.status !== 200 || response.data.Status !== 'SUCCESS') {
            throw new Error(`Failed to fetch File Details: ${response.response.data.Message}`);
        }
        expect(response.data.Status).to.equal("SUCCESS");
    }).timeout(0);

    it('should download file from IPFS', async () => {
        const response = await downloadFileFromIPFS();
        if (response.status !== 200 || response.data.Status !== 'SUCCESS') {
            throw new Error(`Failed to download file from ipfs: ${response.response.data.Message}`);
        }
        expect(response.data.Status).to.equal("SUCCESS");
    }).timeout(0);

    it('should update pin status', async () => {
        const response = await updatePinStatus();
        if (response.status !== 200 || response.data.Status !== 'SUCCESS') {
            throw new Error(`Failed to update pin status: ${response.response.data.Message}`);
        }
        expect(response.data.Status).to.equal("SUCCESS");
    }).timeout(0);

});
