// ftApiTests.js

import { expect } from 'chai';
import {
    createERC20,
    fetchERC20Tokens,
    fetchERC20Token,
    mintFT,
    approveFT,
    transferFT,
    burnFT,
    getTotalSupply,
    balanceOf
} from "./ftApi.js"

export async function testFtApi() {
    describe('FT Manager API Tests', () => {
        // it('should create a new ERC20 token', async () => {
        //     const response = await createERC20();
        //     if (response.status !== 200 || response.data.Status !== 'SUCCESS') {
        //         throw new Error(`Failed to create ERC20 token: ${response.response.data.Message}`);
        //     }
        //     expect(response.data.Status).to.equal("SUCCESS");
        // }).timeout(0);

        it('should fetch ERC20 tokens', async () => {
            const response = await fetchERC20Tokens();
            if (response.status !== 200 || response.data.Status !== 'SUCCESS') {
                throw new Error(`Failed to fetch ERC20 tokens: ${response.response.data.Message}`);
            }
            expect(response.data.Status).to.equal("SUCCESS");
        }).timeout(0);

        it('should fetch ERC20 token by contract address', async () => {
            const response = await fetchERC20Token();
            if (response.status !== 200 || response.data.Status !== 'SUCCESS') {
                throw new Error(`Failed to fetch ERC20 token by contract address: ${response.response.data.Message}`);
            }
            expect(response.data.Status).to.equal("SUCCESS");
        }).timeout(0);

        it('should mint FT', async () => {
            const response = await mintFT();
            if (response.status !== 200 || response.data.Status !== 'SUCCESS') {
                throw new Error(`Failed to mint FT: ${response.response.data.Message}`);
            }
            expect(response.data.Status).to.equal("SUCCESS");
        }).timeout(0);

        it('should approve FT', async () => {
            const response = await approveFT();
            if (response.status !== 200 || response.data.Status !== 'SUCCESS') {
                throw new Error(`Failed to approve FT: ${response.response.data.Message}`);
            }
            expect(response.data.Status).to.equal("SUCCESS");
        }).timeout(0);

        it('should transfer FT', async () => {
            const response = await transferFT();
            if (response.status !== 200 || response.data.Status !== 'SUCCESS') {
                throw new Error(`Failed to transfer FT: ${response.response.data.Message}`);
            }
            expect(response.data.Status).to.equal("SUCCESS");
        }).timeout(0);

        it('should burn FT', async () => {
            const response = await burnFT();
            if (response.status !== 200 || response.data.Status !== 'SUCCESS') {
                throw new Error(`Failed to burn FT: ${response.response.data.Message}`);
            }
            expect(response.data.Status).to.equal("SUCCESS");
        }).timeout(0);

        it('should get total supply', async () => {
            const response = await getTotalSupply();
            if (response.status !== 200 || response.data.Status !== 'SUCCESS') {
                throw new Error(`Failed to get total supply: ${response.response.data.Message}`);
            }
            expect(response.data.Status).to.equal("SUCCESS");
        }).timeout(0);

        it('should get balance', async () => {
            const response = await balanceOf();
            if (response.status !== 200 || response.data.Status !== 'SUCCESS') {
                throw new Error(`Failed to get balance: ${response.response.data.Message}`);
            }
            expect(response.data.Status).to.equal("SUCCESS");
        }).timeout(0);

    });
}

