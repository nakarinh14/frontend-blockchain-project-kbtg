import axios from "axios";
import {BACKEND_URL} from '@env'


const generateAuthHeader = (access_token) => ({
    'Authorization': `Bearer ${access_token}`
})

export const addProfileAPI = async(access_token, firstname, lastname) => {
    return await axios.post(`${BACKEND_URL}/auth/register`, {
        firstname,
        lastname
    }, {
        headers: generateAuthHeader(access_token)
    })
}

export const getBalanceAPI = async (access_token) => {
    const res = await axios.get(`${BACKEND_URL}/api/balance`, {
        headers: generateAuthHeader(access_token)
    })
    return res.data.balance;
}

export const donateAPI = async (access_token, amount, recipient, cause, tax_reduction) => {
    const res = await axios.post(`${BACKEND_URL}/api/donor/donate`, {
        amount,
        recipient,
        cause,
        tax_reduction
    }, {
        headers: generateAuthHeader(access_token)
    })
    return res.data.result
}

export const depositAPI = async (access_token, amount, currencyType) => {
    return await axios.post(`${BACKEND_URL}/api/donor/deposit`, {
        amount,
        currencyType
    }, {
        headers: generateAuthHeader(access_token)
    })
}

export const getTransactionHistory = async (uid) => {
    const res = await axios.get(`${BACKEND_URL}/api/activity/${uid}`)
    return res.data.data
}
