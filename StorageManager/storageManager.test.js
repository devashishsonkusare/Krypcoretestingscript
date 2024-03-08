import { expect } from 'chai';
import FormData from 'form-data';
import fs from 'fs';
import axios from 'axios';
import dotenv from 'dotenv';
import path from 'path';


dotenv.config();

const data = new FormData();
const token = process.env.TOKEN;
const instanceId = process.env.INSTANCE_ID;

describe('API Test', function () {
    this.timeout(5000);
    it('should store a file successfully', async function () {
        try {
            // const filePath = '/home/rajdeep/Downloads/download.png';

            const filePath = path.resolve(process.argv['FILE_PATH'] || '/download.png');

            data.append('files', fs.createReadStream(filePath));

            const config = {
                method: 'post',
                url: 'https://api.krypcore.com/api/v0/storagemanageripfs/storefile',
                headers: {
                    'Authorization': token,
                    'Instanceid': instanceId,
                    ...data.getHeaders()
                },
                data: data
            };
            const response = await axios(config);
            expect(response.status).to.equal(200);
            expect(response.data.Status).to.equal('SUCCESS');
            expect(response.data.Data).to.be.a('string');
        } catch (error) {
            throw error;
        }
    });
    it('should get file details successfully', async function () {
        try {
            const data = JSON.stringify({
                "page": 0,
                "pageSize": 10
            });

            const response = await axios({
                method: 'post',
                url: 'https://api.krypcore.com/api/v0/storagemanageripfs/getFileDetails',
                headers: {
                    'Authorization': token,
                    'Instanceid': instanceId,
                    'Content-Type': 'application/json'
                },
                data: data
            });

            expect(response.status).to.equal(200);
            expect(response.data.Status).to.equal('SUCCESS');
            expect(response.data.Data).to.be.an('object');
            expect(response.data.Message).to.equal('Records fetched successfully');
        } catch (error) {
            throw error;
        }
    });


    it('should download a file from IPFS successfully', async () => {
        try {
            //id value used to fetch the file from IPFS
            const data = { "id": '65eac532f1eefd939861ff63' };
            const config = {
                method: 'post',
                url: 'https://api.krypcore.com/api/v0/storagemanageripfs/downloadFileFromIPFS',
                headers: {
                    'Authorization': token,
                    'Instanceid': instanceId,
                    'Content-Type': 'application/json'
                },
                data: data
            };

            const response = await axios(config);
            expect(response.status).to.equal(200);
            expect(response.data).to.be.an('object');
            expect(response.data).to.have.property('Data');
            expect(response.data).to.have.property('Message');
            expect(response.data).to.have.property('Status');
        } catch (error) {
            if (error.response && error.response.status === 401) {
                console.log('Unauthorized access: Please check your authentication credentials.');
            } else {
                console.error('Error:', error.message);
            }
            throw error;
        }
    });

    it('should update pin status successfully', async () => {
        // Make the actual request
        const response = await axios.post('https://api.krypcore.com/api/v0/storagemanageripfs/updatePinStatus', {
          id: '65ead14bf1eefd939861ff69'
        }, {
          headers: {
            'Authorization': token,
            'Instanceid': instanceId,
            'Content-Type': 'application/json'
          }
        });
    
        // Assertions
        expect(response.status).to.equal(200);
        expect(response.data).to.have.property('Status').that.equals('SUCCESS');
        expect(response.data).to.have.property('Message').that.equals('pin status updated successfully');
      });
    
      

});



///home/rajdeep/Downloads/monkey.jpg
// npx mocha --experimental-modules StorageManager/storageManager.test.js
// FILE_PATH='/download.png' npx mocha --experimental-modules StorageManager/storageManager.test.js