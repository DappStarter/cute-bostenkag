require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom produce bone food cheap rifle spice punch hidden arctic slot general'; 
let testAccounts = [
"0x9d18bdcc8817f450eebc7ac130008d461e4703129033a0dcdbcb616410b37e08",
"0xbe3f0a7200efdb4a0f5d0c53a9c6599662f61733c3f4873c9d9c7818c378d20e",
"0x5f63ecabec60adc95479fb8cd4372bca38c670babe63a7d8db4d2ebb7de008b9",
"0x18c0eeef81f1e9cb5ceeb05deb5edab21a8603ad7c1c4a571da24555de32c88a",
"0x9b3ea42ddfce44af214ab6475777a43497c9562fad1073f42ec166e6a29e5a0d",
"0x950302a30983bf5ff232e1b6048972e23eec81076269b99b72725b1232072477",
"0x1fa2377ec71fa786702a9e2692d3cc4503e6fbe02655298935fe21986ee7d6e0",
"0x680cc16bb71cd4cb4ed8ac240eb7bdde8627d325d7c140130bb1bda574aecee4",
"0xee82754d871f8e19f2e491af557056e55de7d7c531fcb413371ce714f3660edb",
"0x5100efd5f9dc54a7e7846c227e3ee3b36df381b949067df1a266b27568fa17c8"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
