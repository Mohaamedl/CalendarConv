export default function createSecureId(input) {
    return CryptoJS.SHA256(input.toString()).toString(CryptoJS.enc.Hex);
  }