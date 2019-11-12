import { IpfsConnection, BlockchainNetworkType, Protocol, ConnectionConfig, Uploader, FileParameterData, UploadParameter, BlockchainNetworkConnection } from 'tsjs-chain-xipfs-sdk';
import { Mosaic, MosaicId, UInt64 } from 'tsjs-xpx-chain-sdk';


// Creates ipfs connection
const ipfsConnection = new IpfsConnection(
  'ipfs1-dev.xpxsirius.io', // the host or multi address
  5001, // the port number
  { protocol: 'http' } // the optional protocol
);


// Creates Proximax blockchain network connection
const blockchainConnection = new BlockchainNetworkConnection(
  BlockchainNetworkType.TEST_NET,
  'bctestnet1.brimstone.xpxsirius.io',
  3000,
  Protocol.HTTP
);

const connectionConfig =  ConnectionConfig.createWithLocalIpfsConnection(
  blockchainConnection,
  ipfsConnection
);

/*
const account = Account.generateNewAccount(NetworkType.TEST_NET);
console.log(account.privateKey);
console.log(account.address.pretty());
console.log(account.publicKey);
*/

// Initialised uploader
const uploader = new Uploader(connectionConfig);

// Default network currency prx.xpx
const mosaics = [new Mosaic(new MosaicId('13bfc518e40549d7'), UInt64.fromUint(0))]

// Prepares upload data file
const metadata = new Map<string, string>();
metadata.set('author', 'Proximax');

const paramData = FileParameterData.create(
  './data/NEM_techRef.pdf',
  'test name',
  'test description',
  'application/pdf',
  metadata
);


const senderPrivateKey = 'B41926ECD6A69B62D0B487E9B70B09DA565827708EB9760160E2B8B43821C77F';
const recipientPublicKey = 'A6DB65BEDB7663BD5D860D3863BC08E42C6C3A0978A931BB92FB667B8D3E8DFC';
const recipientAddress = 'VB3BMW-XJNUS4-QWFTLP-K2AY2T-SANCWK-QWOZGJ-UQMI';

const uploadParam = UploadParameter.createForFileUpload(
  paramData,
  senderPrivateKey
)
.withTransactionMosaics(mosaics)
.withPlainPrivacy()
.withDetectContentType(true)
.withTransactionDeadline(1)
.withRecipientPublicKey(recipientPublicKey)
.withRecipientAddress(recipientAddress)
.build();

console.log('Uploading ....');

uploader.upload(uploadParam).then(result => {
  console.log(result);
  console.log('Upload completed');
}).catch(error=> {
  console.log('Upload error');
  console.log(error);
})
