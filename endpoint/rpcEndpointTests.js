import { expect } from 'chai';
import { makeRequest } from './apiRequests.js';
import { rpcEndpoints } from './rpcEndpoints.js';

async function testRPCEndpoints() {
    describe('RPC Endpoint Tests', () => {
        for (const endpoint of rpcEndpoints) {
            const rpcLink = endpoint;

            it(`should successfully make a request to ${rpcLink}`, async () => {
                const { data, error } = await makeRequest(rpcLink);
                console.log(data)
                expect(data).to.exist;
                expect(error).to.be.undefined;
            }).timeout(15000);
        }
    });
}

export { testRPCEndpoints };
