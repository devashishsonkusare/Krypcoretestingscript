

const commonHeaders = {
    Authorization: "e917e2e7-eaea-44a6-a1e8-33c4d9fe5a75",
    DappId: "DEV_DEMO_YAHO_140_20240208",
    "Content-Type": "application/json"
};

const walletType = "dev-wallet";
const custodialWallet ="" // if it is dev-wallet keep it empty
const privateKey = "0x8342922845efe725d5379f705e707c8a7cff9941f7a301362c9de36e590135ab" // if it is non custodial wallet keep it empty
const recipientAddress = "0xe4DdA8Eae8a2c465872aaC9c2513BB101c7F3e99"


export const ftConfig = {
    createERC20: {
        url: 'https://api.krypcore.com/api/v0/ft-manager/createERC20',
        headers: commonHeaders,
        data: {
            ERCStandard: 'ERC20',
            chainId: '80001',
            custodialWalletAccessToken: custodialWallet,
            privateKey: privateKey,
            decimal: 18,
            premintAddress: recipientAddress,
            quantity: 100000000,
            tokenName: 'KrypCd Tdoken4',
            tokenSymbol: 'KC04dd',
            walletType: walletType
        }
    },
    fetchERC20Tokens: {
        url: 'https://api.krypcore.com/api/v0/ft-manager/erc20-tokens',
        headers: commonHeaders,
        data: {
            instanceId: "INS_FT_212_202428",
            page: 0,
            pageSize: 10
        }
    },
    fetchERC20Token: {
        url: 'https://api.krypcore.com/api/v0/ft-manager/erc20-token',
        headers: commonHeaders,
        data: {
            contractAddress: '',
            page: 0,
            pageSize: 10
        }
    },
    mintFT: {
        url: 'https://api.krypcore.com/api/v0/ft-manager/mintFT',
        headers: commonHeaders,
        data: {
            chainId: '80001',
            contractAddress: '',
            custodialWalletAccessToken: custodialWallet,
            privateKey:privateKey,
            erc: 'ERC20',
            quantity: '10000',
            recipientAddress: recipientAddress,
            walletType: walletType
        }
    },
    approveFT: {
        url: 'https://api.krypcore.com/api/v0/ft-manager/approveFT',
        headers: commonHeaders,
        data: {
            approveAddress: recipientAddress,
            chainId: '80001',
            contractAddress: '',
            custodialWalletAccessToken: custodialWallet,
            privateKey:privateKey,
            quantity: '1000',
            walletType: walletType
        }
    },
    transferFT: {
        url: 'https://api.krypcore.com/api/v0/ft-manager/transferFT',
        headers: commonHeaders,
        data: {
            chainId: '80001',
            contractAddress: '',
            custodialWalletAccessToken: custodialWallet,
            privateKey: privateKey,
            quantity: '10',
            recipientAddress: recipientAddress,
            walletType: walletType
        }
    },
    burnFT: {
        url: 'https://api.krypcore.com/api/v0/ft-manager/burnFT',
        headers: commonHeaders,
        data: {
            burnAddress: '0x588BeE528b93357B4d731CE817C47F4BFbc81B22',
            chainId: '80001',
            contractAddress: '',
            privateKey: privateKey,
            quantity: '100000000',
            walletType: walletType
        }
    },
    getTotalSupply: {
        url: 'https://api.krypcore.com/api/v0/ft-manager/getTotalSupply',
        headers: commonHeaders,
        data: {
            chainId: '80001',
            contractAddress: ''
        }
    },
    balanceOf: {
        url: 'https://api.krypcore.com/api/v0/ft-manager/balanceOf',
        headers: commonHeaders,
        data: {
            contractAddress: '',
            address: recipientAddress
        }
    },
};
