const commonHeaders = {
    Authorization: "e917e2e7-eaea-44a6-a1e8-33c4d9fe5a75",
    DappId: "DEV_DEMO_YAHO_140_20240208",
    "Content-Type": "application/json"
};

export const nftCollectionConfig = {
    createCollection: {
        url: "https://api.krypcore.com/api/v0/easy-nft/createNFTCollection",
        headers: commonHeaders,
        data: {
            "ERCStandard": "ERC721",
            "chainId": "80001",
            "collectionDescription": "This is NFT collection description",
            "collectionImage": "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",
            "collectionName": "collectionName",
            "collectionSymbol": "collectionSymbol",
            "privateKey": "0x8342922845efe725d5379f705e707c8a7cff9941f7a301362c9de36e590135ab",
            "custodialWalletAccessToken": "",
            "isSoulBound": false,
            "walletType": "dev-wallet",
        }
    },
    fetchCollectionList: {
        url: "https://api.krypcore.com/api/v0/easy-nft/nft-collection-list",
        headers: commonHeaders,
        data: {
            "instanceId": "INS_EA_174_202428",
            "page": 0,
            "pageSize": 10
        }
    },
    fetchCollectionById: {
        url: "https://api.krypcore.com/api/v0/easy-nft/nft-collection",
        headers: commonHeaders,
        data: {
            "id": "",
            "page": 0,
            "pageSize": 10
        }
    },
    createNft: {
        url: "https://api.krypcore.com/api/v0/easy-nft/createNFT",
        headers: commonHeaders,
        data: {
            "file": "./1.jpg",
            "name": "krypc55",
            "description": "this is krypc logo",
            "recepientAddress": "0x313bA6399d60ff7c2ee8bCb01c2dc9C5e18b857D",
            "attributes": "",
            "quantity": "",
            "erc": "ERC721",
            "contractAddress": "",
            "chainId": "80001",
            "walletType": "dev-wallet",
            "privateKey": "0x8342922845efe725d5379f705e707c8a7cff9941f7a301362c9de36e590135ab",
            "custodialWalletAccessToken": ""
        }
    },
    fetchNftList: {
        url: "https://api.krypcore.com/api/v0/easy-nft/nft-list",
        headers: commonHeaders,
        data: {
            "contractAddress": "",
            "page": 0,
            "pageSize": 10
        }
    }
};
