require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include enroll sure tribe stone random pave punch heavy knee army gaze'; 
let testAccounts = [
"0xdc83cc7397c4e747b24a4d78c207eb1dfd3b790ae37bd876f1e7e52f469131ed",
"0xf3d142e5f169de8f96d9d1aa9110b831bd028be5f51611ffc827b71f064ef95e",
"0xb0469746352221bc3cfc2a2f80bf5d59181977357e5f734beee9a412b7597147",
"0xbdb45be166eeff5d46d65d322ddcdbc4853c83e280c35dba9d427033d2831596",
"0xc4e77acec92814d4d4b43557596bdf89cbab672a71385b9507e54123517b885d",
"0x53d437f38e8b724db5c9c236eac79d008d013919bb4afa70c110780a13ab7c36",
"0xdeb57343db52836069004dd39566fa4d040ac7deff5da4d7944945c9267251df",
"0x96739b2bbdc6b7aa1c09640d3ef027423cbf58f409b8f8d78fff88eb0052c284",
"0x52e25b41b03b64ee70f4cedf8ca24b6df1585a4510503a119921dc179c0c564f",
"0x0b06398ec91ce88dfd80f7faf9461de7b4f460306089571ff35c24efe12b2acd"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

