import { expect } from 'chai';
import { createNftCollection, fetchNftCollectionList, fetchNftList, fetchNftCollectionById, createNft } from './nftApi.js';
import { nftCollectionConfig } from './nftApiConfig.js';

// Define a function to test the NFT API
async function testNftApi() {
    describe('NFT API Tests', () => {
        it('should create a new NFT collection', async () => {
            const response = await createNftCollection(nftCollectionConfig.createCollection);

            // Check if there's an error or if the response status is not successful
            if (response.status !== 200 || response.data.Status !== 'SUCCESS') {
                throw new Error(`Failed to create NFT collection: ${response.response.data.Message}`);
            }

            expect(response.data.Status).to.equal("SUCCESS");
        }).timeout(0);

        // Test case for fetching NFT collection list
        it('should fetch NFT collection list', async () => {
            const response = await fetchNftCollectionList(nftCollectionConfig.fetchCollectionList);
            if (response.status !== 200 || response.data.Status !== 'SUCCESS') {
                throw new Error(`Error fetching NFT collection list: ${response.data.Message}`);
            }

            expect(response.data.Status).to.equal("SUCCESS");
        }).timeout(0);

        // Test case for fetching NFT collection by ID
        it('should fetch NFT collection By ID', async () => {
            const response = await fetchNftCollectionById(nftCollectionConfig.fetchCollectionById);
            if (response.status !== 200 || response.data.Status !== 'SUCCESS') {
                throw new Error(`Error fetching NFT collection by ID: ${response.data.Message}`);
            }

            expect(response.data.Status).to.equal("SUCCESS");
        }).timeout(0);

        // Test case for minting NFT
        it("should Mint NFT", async () => {
            const response = await createNft(nftCollectionConfig.createNft);
            if (response.status !== 200 || response.data.Status !== 'SUCCESS') {
                throw new Error(`Error minting NFT: ${response.response.data.Message}`);
            }

            expect(response.data.Status).to.equal("SUCCESS");
        }).timeout(0);

        // Test case for fetching NFT list
        it('should fetch NFT list', async () => {
            const response = await fetchNftList(nftCollectionConfig.fetchNftList);
            if (response.status !== 200 || response.data.Status !== 'SUCCESS') {
                throw new Error(`Error fetching NFT list: ${response.data.Message}`);
            }

            expect(response.data.Status).to.equal("SUCCESS");
        }).timeout(0);


        
    });
}

export { testNftApi };
