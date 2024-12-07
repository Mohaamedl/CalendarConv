import CryptoJS from 'crypto-js';

export default function createSecuredId(input: string)
{
    return CryptoJS.SHA256(input.toString()).toString(CryptoJS.enc.Hex);
}