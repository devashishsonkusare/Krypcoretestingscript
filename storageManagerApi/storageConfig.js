

const commonHeaders = {
    Authorization: "e917e2e7-eaea-44a6-a1e8-33c4d9fe5a75",
    DappId: "DEV_DEMO_YAHO_140_20240208",
};
export const storageConfig = {
    storeFile: {
        url: 'https://api.krypcore.com/api/v0/storagemanageripfs/storefile',
        headers: commonHeaders,
        formData: {
            files: './dd.jpg' 
        }
    },
    getFileDetails: {
        url: 'https://api.krypcore.com/api/v0/storagemanageripfs/getFileDetails',
        headers: commonHeaders,
        requestData: {
            page: 0,
            pageSize: 10
        }
    },
    downloadFileFromIPFS: {
        url: 'https://api.krypcore.com/api/v0/storagemanageripfs/downloadFileFromIPFS',
        headers: commonHeaders,
        requestData: {
            id: ''
        }
    },
    updatePinStatus: {
        url: 'https://api.krypcore.com/api/v0/storagemanageripfs/updatePinStatus',
        headers: commonHeaders,
        requestData: {
            id: ''
        }
    }
};

