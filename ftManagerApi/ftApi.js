// ftApi.js
import axios from 'axios';
import {ftConfig} from './ftConfig.js';
let ContractAddress = ""
export async function createERC20() {
    try {
        const response = await axios.post(
            ftConfig.createERC20.url,
            ftConfig.createERC20.data,
            { headers: ftConfig.createERC20.headers }
        );
        return response;
    } catch (error) {
        return error;
    }
}

export async function fetchERC20Tokens() {
    try {
        const response = await axios.post(
            ftConfig.fetchERC20Tokens.url,
            ftConfig.fetchERC20Tokens.data,
            { headers: ftConfig.fetchERC20Tokens.headers }
        );
       ContractAddress = response.data.Data.result[0].contractAddress;
        return response;
    } catch (error) {
        return error;
    }
}

export async function fetchERC20Token() {
    try {
        ftConfig.fetchERC20Token.data.contractAddress=ContractAddress
        const response = await axios.post(
            ftConfig.fetchERC20Token.url,
            ftConfig.fetchERC20Token.data,
            { headers: ftConfig.fetchERC20Token.headers }
        );
        return response;
    } catch (error) {
        return error;
        
    }
}

export async function mintFT() {
    try {
        ftConfig.mintFT.data.contractAddress=ContractAddress;
        const response = await axios.post(
            ftConfig.mintFT.url,
            ftConfig.mintFT.data,
            { headers: ftConfig.mintFT.headers }
        );
        return response;
    } catch (error) {
        return error;
    }
}

export async function approveFT() {
    try {
        ftConfig.approveFT.data.contractAddress=ContractAddress
        const response = await axios.post(
            ftConfig.approveFT.url,
            ftConfig.approveFT.data,
            { headers: ftConfig.approveFT.headers }
        );
        return response;
    } catch (error) {
        return error;
    }
}

export async function transferFT() {
    try {
        ftConfig.transferFT.data.contractAddress = ContractAddress;
        const response = await axios.post(
            ftConfig.transferFT.url,
            ftConfig.transferFT.data,
            { headers: ftConfig.transferFT.headers }
        );
        return response;
    } catch (error) {
        return error;
    }
}

export async function burnFT() {
    try {
        
        ftConfig.burnFT.data.contractAddress = ContractAddress;
        const response = await axios.post(
            ftConfig.burnFT.url,
            ftConfig.burnFT.data,
            { headers: ftConfig.burnFT.headers }
        );
        return response;
    } catch (error) {
        return error;
    }
}

export async function getTotalSupply() {
    try {
        ftConfig.getTotalSupply.data.contractAddress = ContractAddress;

        const response = await axios.post(
            ftConfig.getTotalSupply.url,
            ftConfig.getTotalSupply.data,
            { headers: ftConfig.getTotalSupply.headers }
        );
        return response;
    } catch (error) {
        return error;
    }
}

export async function balanceOf() {
    try {
        ftConfig.balanceOf.data.contractAddress = ContractAddress;
        const response = await axios.post(
            ftConfig.balanceOf.url,
            ftConfig.balanceOf.data,
            { headers: ftConfig.balanceOf.headers }
        );
        return response;
    } catch (error) {
        return error;
    }
}

